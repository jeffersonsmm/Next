import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;

  svg {
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  }

  span {
    width: auto;
    position: absolute;
    background: var(--Erro) !important;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    padding: 10px;
    border-radius: 6px;
    font-size: 0.7rem !important;
    transition: opacity 0.4s;
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--Erro) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-65%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
