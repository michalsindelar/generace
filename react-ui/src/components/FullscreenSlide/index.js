// @flow
import React from "react"

import { Slide} from "react-full-page"

import Container from "../Container"
import {PALETTE} from "../../services/styleTools"

type Props = {
  children: any,
  disableContainer?: boolean
}

const FullscreenSlide = ({ disableContainer, children } : Props) =>

  <Slide className="FullscreenSlide" style={{backgroundColor: PALETTE.PRIMARY}}>
    {disableContainer
      ? {children}
      : <Container>{children}</Container>
    }
  </Slide>

export default FullscreenSlide
