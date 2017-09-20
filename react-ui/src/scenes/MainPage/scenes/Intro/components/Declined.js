// @flow
import React, { Component } from "react"
import FullscreenSlide from "../../../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {PALETTE} from "../../../../../services/styleTools"

const IntroStyl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const IntroLogoStyl = styled.img`
  color: ${PALETTE.SECONDARY};
  font-size: 20px;
  max-width: 260px;
`

const IntroHeaderStyl = styled.h1`
  color: ${PALETTE.SECONDARY};
  font-size: 60px;
  clear: both;
`

const PHASES = {
  QUESTIONS: "QUESTIONS",
  APPROVED: "APPROVED",
  DECLINED: "DECLINED",
}

class Declined extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phase: "",
    };
  }

  toggleQuestions = () => {
    this.setState({
      phase: this.state.phase === PHASES.QUESTIONS
        ? "" // reset
        : PHASES.QUESTIONS
    })
  }

  render() {
    const {
      phase
    } = this.state


    return (
      <FullscreenSlide className="Attendance">

        <IntroStyl>

          {phase === PHASES.QUESTIONS &&
            <div>
              Ano
            </div>
          }

          <IntroLogoStyl
            onClick={this.toggleQuestions}
            src="urna.svg"
            alt="Generace s názorem | Volební urna"
          />

          {phase === PHASES.QUESTIONS &&
            <div>
              Ano
            </div>
          }

          <IntroHeaderStyl>Znáte tohle?</IntroHeaderStyl>
        </IntroStyl>

      </FullscreenSlide>
    )
  }
}
export default Declined
