/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

// import { getDay } from 'date-fns'
// import { toDate } from 'date-fns-tz'

import Tooltip from './Tooltip/index'

interface IProps {
  name: string
  col?: string
  label?: string
  optionalLabel?: string
  icon?: React.ComponentType<IconBaseProps>
  iconEnd?: any
}

type InputProps = JSX.IntrinsicElements['input'] & IProps

const InputNormal: React.FC<InputProps> = ({
  name,
  label,
  col,
  // optionalLabel,
  // icon: Icon,
  // iconEnd,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  // const [optionalLabelText, setOptionalLabelText] = useState('')

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField])

  // const DiaDaSemana = [
  //   'Domingo',
  //   'Segunda-Feira',
  //   'Terça-Feira',
  //   'Quarta-Feia',
  //   'Quinta-Feira',
  //   'Sexta-Feira',
  //   'Sábado',
  // ]

  // const handleChange = useCallback(() => {
  //   if (String(inputRef.current?.value))
  //     setOptionalLabelText(
  //       () => DiaDaSemana[getDay(toDate(String(inputRef.current?.value)))],
  //     )
  // }, [DiaDaSemana])

  return (
    <div
      className={col}
      style={{
        flexDirection: 'row',
        minWidth: '250px',
      }}
    >
      {/* <p style={{ textAlign: 'center', color: '#222' }}>{optionalLabelText}</p> */}

      <div id={fieldName} className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">{label}</span>
        </div>

        <input
          name={fieldName}
          className="form-control"
          ref={inputRef}
          defaultValue={defaultValue}
          // onChange={handleChange}
          {...rest}
        />
        {error && (
          <div className="input-group-append">
            <span className="input-group-text">
              <Tooltip title={error}>
                <FiAlertCircle color="#c53030" size={15} />
                &nbsp;
              </Tooltip>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputNormal
