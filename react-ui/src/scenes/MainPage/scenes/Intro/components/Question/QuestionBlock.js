// @flow
import React from "react"
import styled from "styled-components"

import { QuestionSubtitle } from "./index"


const QuestionBlockStyl = styled.div`
  cursor: pointer;
  border-radius: 4px;
  padding: 5px;
`

const QuestionBlock = ({ bordered, title, text, extraTest }) =>
  <QuestionBlockStyl style={{border: bordered ? "1px solid white" : ""}}>
    <QuestionSubtitle>{title}</QuestionSubtitle>
    <p>{text}</p>
    <p>{extraTest}</p>
  </QuestionBlockStyl>

export default QuestionBlock
