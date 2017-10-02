// @flow
import React, {Component} from "react"
import styled from "styled-components"

import { QuestionSubtitle } from "./index"
import {isLtDesktopBigHeight, MEDIA_ONLY_QUERY} from "../../../../../../services/styleTools"
import LabelLink from "../../../../../../components/LabelLink"


const PADDING = "10px"


const QuestionBlockStylWrapper = styled.div`
  
  margin-left: -${PADDING};
  margin-bottom: ${isLtDesktopBigHeight ? "15px" : "40px"};
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    margin-top: 15px;
    margin-bottom: 10px;
  `}
`

const QuestionBlockStyl = styled.div`
  display: flex; 
  padding: ${PADDING} ${PADDING} 0 ${PADDING};
  border-radius: 4px;
`

const QuestionBlockHere = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`

class QuestionBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  toggleText = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { title, text, extraTest, labels, ...rest } = this.props
    const { open } = this.state

    return (
      <QuestionBlockStylWrapper>
        <QuestionBlockStyl
          {...rest}
        >
          <div onClick={this.toggleText}>
            <QuestionSubtitle style={{marginTop: 0}}>{title}</QuestionSubtitle>

            {open &&
              <div>
                <p>{text}</p>
                {extraTest && <p>{extraTest}</p>}
              </div>
            }

          </div>

        </QuestionBlockStyl>

        {open && labels &&
          <div style={{marginTop: PADDING, marginLeft: PADDING }}>
            {labels.map(label =>
              <LabelLink href={label.href} style={{marginRight: PADDING}} hover={label.hover}>
                {label.label}
              </LabelLink>
            )}
          </div>
        }

      </QuestionBlockStylWrapper>
    )
  }

}

export default QuestionBlock
