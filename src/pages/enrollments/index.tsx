import { useCallback, useRef, useState, ReactNode } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import { FaTrash, FaUserPlus, FaPaperPlane } from 'react-icons/fa'
import { FiCornerDownLeft } from 'react-icons/fi'

import api from 'axios'
import InputNormal from '../../components/InputNormal'
import { Container, Content, ModalContent, Title, Line } from './styles'
import { useToast } from '../../hooks/Toast'

interface IEnrollmentsProps {
  children: ReactNode
  cpf_cnpj: number
}

function Enrollments({ children }: IEnrollmentsProps) {
  const formRef = useRef<FormHandles>(null)
  const [visible, setVisible] = useState(true)

  const { addToast } = useToast()

  const data = {
    class_id: 255,
    curse: 'Trainee',
    professor: 'Jefferson',
    start: '20/06/2021',
    students: [
      {
        id: 1,
        fullname: 'Lucas Ferronato',
        nickname: 'Lucas',
        dateEnrollment: '02/04/2021',
      },
      {
        id: 2009,
        fullname: 'Jefferson S M de Matos',
        nickname: 'Jefferson',
        dateEnrollment: '12/04/2021',
      },
      {
        id: 307,
        fullname: 'Matheus Ferronato',
        nickname: 'Matheus',
        dateEnrollment: '05/05/2021',
      },
    ],
  }

  const loading = useCallback((load: string) => {
    document.getElementById('loading')?.setAttribute('style', `display:${load};`)
  }, [])

  const deleteStudentEnrollment = useCallback(
    async (id: number, index: number) => {
      try {
        loading('block')

        await api.patch('/', id) // trocar

        addToast({
          type: 'success',
          title: `Sucesso ao remover ${data.students[index].nickname} da chamada!!`,
        })
        loading('none')
      } catch (error) {
        loading('none')

        addToast({
          type: 'error',
          title: 'Erro',
          description: `Não foi possível remover ${data.students[index].nickname} da chamada!!`,
        })
      }
    },
    [addToast, loading, data],
  )

  const handleSubmit = useCallback(
    async (data: IEnrollmentsProps, { reset }) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          cpf_cnpj: Yup.string().trim().required('CPF necessário'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        loading('flex')

        await api.patch('op/classgroups/', data) // trocar caminho

        addToast({
          type: 'success',
          title: 'Aluno(a) adicionado a chamada!!',
        })

        reset()

        loading('none')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }

        loading('none')

        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Ocorreu um erro ao adicionar aluno(a)',
        })
      }
    },
    [addToast, loading],
  )

  return (
    <Container>
      {children}

      {data && (
        <>
          <Content visible={visible}>
            <Title>
              {data.curse}{' '}
              <sub className="font-italic text-muted">
                (Turma: <strong className="font-italic">{data.class_id}</strong>)
              </sub>
            </Title>
            <Line />
            {data.professor && (
              <p className="fl font-italic text-muted m-0 pb-1">
                Professor: <strong className="font-italic">{data.professor}</strong>
              </p>
            )}
            <p className="fr font-italic text-muted m-0 pb-1">
              Início: <strong className="font-italic">({data.start})</strong>
            </p>
            <table className="table table-striped table-hoverd">
              <thead>
                <tr>
                  <td>ID</td>
                  <td className="text-center">Aluno</td>
                  <td className="text-center">Data Matricula</td>
                  <td className="text-center">Ação</td>
                </tr>
              </thead>
              <tbody>
                {data.students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td className="text-center">{student.fullname}</td>
                    <td className="text-center">{student.dateEnrollment}</td>
                    <td className="text-center">
                      <FaTrash
                        size={17}
                        color="#a31818"
                        onClick={() => deleteStudentEnrollment(student.id, index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-outline-success btn-block my-3 btn-add"
              type="button"
              onClick={() => setVisible(!visible)}
            >
              Adicionar Aluno <FaUserPlus size={20} color="##28a745" />
            </button>
          </Content>

          <ModalContent visible={!visible}>
            <Title>Chamada - {data.curse}</Title>
            <p className="fr font-italic text-muted m-0 pb-1">
              Turma <strong>{data.class_id}</strong> início{' '}
              <strong>({data.start})</strong>
            </p>
            <Line />
            <FiCornerDownLeft
              className="close align-close"
              size={20}
              color="#a31818"
              onClick={() => setVisible(!visible)}
            />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <InputNormal
                name="cpf_cnpj"
                type="text"
                label="CPF"
                placeholder="Digite o cpf do aluno/a!"
              />
              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-success my-3 btn-add"
                  type="submit"
                >
                  Inserir <FaPaperPlane size={17} color="##28a745" />
                </button>
              </div>
            </Form>
          </ModalContent>
        </>
      )}
    </Container>
  )
}

export default Enrollments
