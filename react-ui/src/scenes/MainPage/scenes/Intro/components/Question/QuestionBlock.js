// @flow
import React from "react"
import styled from "styled-components"

import { QuestionSubtitle } from "./index"


const PADDING = "10px"

const QuestionBlockStyl = styled.div`
  display: flex; 
  border-radius: 4px;
  padding: ${PADDING};
  margin-left: -${PADDING};
  margin-bottom: 20px;
`

const QuestionBlockHere = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`

const QuestionBlock = ({ bordered, title, text, extraTest, ...rest }) =>
  <QuestionBlockStyl
    style={{
      border: bordered ? "1px solid white" : "",
    }}
    {...rest}
  >
    <div>
      <QuestionSubtitle style={{marginTop: 0}}>{title}</QuestionSubtitle>
      <p>{text}</p>
      <p>{extraTest}</p>
    </div>

    {bordered &&
      <div><QuestionBlockHere href="https://volby.hlidacstatu.cz/">ZDE!</QuestionBlockHere></div>
    }
  </QuestionBlockStyl>

export default QuestionBlock
