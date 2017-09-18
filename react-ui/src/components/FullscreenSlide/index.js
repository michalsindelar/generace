// @flow
import React from "react"

import { Slide} from "react-full-page"

import Container from "../Container/index"

type Props = {
  children: any,
  disableContainer?: boolean
}

const FullscreenSlide = ({ disableContainer, children } : Props) =>
  <Slide className="FullscreenSlide">
    {disableContainer
      ? {children}
      : <Container>{children}</Container>
    }
  </Slide>

export default FullscreenSlide
