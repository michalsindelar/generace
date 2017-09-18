// @flow
import React from "react"
import styled from 'styled-components';

import { Slide} from "react-full-page"

import Container from "../Container"
import {PALETTE} from "../../services/styleTools"

type Props = {
  children: any,
  disableContainer?: boolean
}

const FullscreenSlideStyl = styled.div`
  background: ${PALETTE.PRIMARY} url('./slide-bg.svg') center bottom 30px no-repeat;
  height: 100%; // Super important
`

const FullscreenSlide = ({ disableContainer, children } : Props) =>

  <FullscreenSlideStyl>
    <Slide className="FullscreenSlide">
      {disableContainer
        ? {children}
        : <Container>{children}</Container>
      }
    </Slide>
  </FullscreenSlideStyl>

export default FullscreenSlide
