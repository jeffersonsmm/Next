import styled from 'styled-components'

interface IContentProps {
  visible: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;

  svg {
    cursor: pointer;
  }
`

export const Content = styled.div<IContentProps>`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px 10px 0;
  box-shadow: 1px 1px 6px #696969;
  width: 80%;
  color: #343a40;

  thead {
    background: #28a745;
    color: whitesmoke;

    td {
      font-weight: bold;
      font-size: 17px;
    }
  }

  td {
    text-transform: uppercase;
  }

  tbody tr:hover {
    background: #b3cfb0 !important;
  }

  sub {
    font-size: 10px;
    strong {
      font-size: 10px;
    }
  }

  .fl {
    position: absolute;
    top: -20px;
    left: 0;
  }

  .fr {
    position: absolute;
    top: -20px;
    right: 0;
  }

  .btn-add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    svg {
      display: flex;
      align-items: center;
      margin-left: 5px;
    }
  }
`
export const Title = styled.h1`
  text-align: center;
  color: #343a40;
`
export const Line = styled.hr`
  border-top: 1px solid #28a745;
`

export const ModalContent = styled.div<IContentProps>`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: relative;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 8px;
  padding: 10px 10px 0;
  box-shadow: 1px 1px 6px #696969;
  color: #343a40;

  .align-close {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .fr {
    position: absolute;
    top: -20px;
    right: 0;
  }
`
