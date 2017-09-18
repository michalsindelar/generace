import React from "react"
import styled from 'styled-components';

const ContainerStyl = styled.div`
  max-width: 200px;
`

const Container = ({ children }) =>
  <ContainerStyl className={`Container`}>
    {children}
  </ContainerStyl>

export default Container
