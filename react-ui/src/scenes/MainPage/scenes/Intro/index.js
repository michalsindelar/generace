// @flow
import React, { Component } from "react"
import FullscreenSlide from "../../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {ANIMATION, PALETTE} from "../../../../services/styleTools"
import Question from "./components/Question/index"

const IntroStyl = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  
  align-content: center;
  align-items: center;
  justify-content: center;
`

const IntroCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 40%;
`

const IntroLogoStyl = styled.img`
  color: ${PALETTE.SECONDARY};
  font-size: 20px;
  max-width: 260px;
  cursor: pointer;
  animation: 2s ${ANIMATION.pulse} alternate infinite;
`

const IntroHeaderStyl = styled.h1`
  color: ${PALETTE.SECONDARY};
  font-size: 60px;
  clear: both;
`

class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    };
  }

  toggleQuestions = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {
      open
    } = this.state


    return (
      <FullscreenSlide className="Attendance">

        <IntroStyl>

          <Question view="approved" open={open} />

          <IntroCenter>

            <IntroLogoStyl
              onClick={this.toggleQuestions}
              src="urna.svg"
              alt="Generace s názorem | Volební urna"
            />

            <IntroHeaderStyl>Znáte tohle?</IntroHeaderStyl>

          </IntroCenter>

          <Question view="declined" open={open} />

        </IntroStyl>

      </FullscreenSlide>
    )
  }
}
export default Intro
