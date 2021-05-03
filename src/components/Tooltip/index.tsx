import React from 'react'

import { Container } from './styles'

interface ITootipProps {
  title: string
}

const Tooltip: React.FC<ITootipProps> = ({ title, children }) => {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip
