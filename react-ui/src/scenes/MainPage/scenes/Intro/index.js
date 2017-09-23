// @flow
import React, { Component } from "react"
import FullscreenSlide from "../../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {ANIMATION, isLtDesktopBig, MEDIA_ONLY_QUERY, PALETTE} from "../../../../services/styleTools"
import Question from "./components/Question/index"

const IntroStyl = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  
  align-content: center;
  align-items: center;
  justify-content: center;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    display: block;
  `}

`

const IntroCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 40%;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    width: 100%;
    padding-top: 80px;
  `}
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
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    font-size: 40px;
    margin-top: 20px;
  `}
`

class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true,
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

    const centerText = <IntroHeaderStyl>Znáte tohle?</IntroHeaderStyl>
    const center = isLtDesktopBig()
      ? <IntroCenter>{centerText}{centerLogo}</IntroCenter>
      : <IntroCenter>{centerLogo}{centerText}</IntroCenter>

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
