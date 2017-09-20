// @flow
import React, { Component } from "react"
import FullscreenSlide from "../../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {PALETTE} from "../../../../services/styleTools"
import Approved from "./components/Approved"
import Declined from "./components/Declined"

const IntroStyl = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-content: center;
  align-items: center;
`

const IntroCenter = styled.div`
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

          {open &&
            <Approved />
          }

          <IntroCenter>
            <IntroLogoStyl
              // onClick={this.toggleQuestions}
              src="urna.svg"
              alt="Generace s názorem | Volební urna"
            />

            <IntroHeaderStyl>Znáte tohle?</IntroHeaderStyl>
          </IntroCenter>

          {open &&
            <Approved />
          }

        </IntroStyl>

      </FullscreenSlide>
    )
  }
}
export default Intro
