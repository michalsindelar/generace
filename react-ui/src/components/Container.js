import React from "react"
import styled from 'styled-components';

const ContainerStyl = styled.div`
  margin: 0 auto;
  width: 1500px;
  max-width: 100%;
  padding: 20px;
`

const Container = ({ children }) =>
  <ContainerStyl className={`Container`}>
    {children}
  </ContainerStyl>

export default Container
