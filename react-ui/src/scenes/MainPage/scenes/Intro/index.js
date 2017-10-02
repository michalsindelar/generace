// @flow
import React, { Component } from "react"
import FullscreenSlide from "../../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {
  ANIMATION, isLtDesktopBig, MEDIA_ONLY_QUERY, PALETTE, FadeInComp,
  isLtDesktopBigHeight
} from "../../../../services/styleTools"
import Question from "./components/Question/index"

const IntroStyl = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  color: ${PALETTE.secondary};
  
  align-content: center;
  align-items: center;
  justify-content: center;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    display: block;
    min-height: 100vh;
  `}

`

const IntroCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 40%;
  min-width: 200px;
  text-align: center;
  margin-top: 10px;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    width: 100%;
  `}
`

const IntroLogoStyl = styled.img`
  color: ${PALETTE.SECONDARY};
  font-size: 20px;
  max-width: 260px;
  cursor: pointer;
  animation: 1s ${ANIMATION.pulse} alternate infinite;
  margin-top: ${isLtDesktopBigHeight ? "0" : "20%"};
`

const IntroHeaderStyl = styled.h1`
  color: ${PALETTE.SECONDARY};
  font-size: 60px;
  clear: both;
  height: 30px;
  margin-bottom: 150px;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    font-size: 40px;
    margin-top: 60px;
    margin-bottom: 60px;
  `}
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

    const approved = <Question view="approved" open={open} />
    const declined = <Question view="declined" open={open} />

    const centerLogo = <IntroLogoStyl
      onClick={this.toggleQuestions}
      src="urna.svg"
      alt="Generace s názorem | Volební urna"
    />

    const centerText = open
      ? <FadeInComp><IntroHeaderStyl>Jdeš volit?</IntroHeaderStyl></FadeInComp>
      : <IntroHeaderStyl />

    const center = <IntroCenter>{centerText}{centerLogo}</IntroCenter>

    return (
      <FullscreenSlide className="Attendance">
        {isLtDesktopBig() ?
          <IntroStyl>
            {center} {approved} {declined}
          </IntroStyl> :

          <IntroStyl>
            {approved} {center} {declined}
          </IntroStyl>
        }

      </FullscreenSlide>
    )
  }
}
export default Intro
