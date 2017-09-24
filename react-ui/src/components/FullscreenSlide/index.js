// @flow
import React from "react"
import styled from 'styled-components';

import { Slide} from "react-full-page"

import Container from "../Container"
import {MEDIA_ONLY_QUERY, PALETTE} from "../../services/styleTools"

type Props = {
  children: any,
  disableContainer?: boolean,
  footer: any
}

const FullscreenSlideStyl = styled.div`
  background: ${PALETTE.PRIMARY} url('./slide-bg.svg') center bottom 30px no-repeat;
  height: 100%; // Super important
  position: relative;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    padding-bottom: 60px;
  `}
`

const FullscreenSlideFooterStyl = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-right: 20px;
  padding-bottom: 8px;
`


const FullscreenSlide = ({ disableContainer, children, footer } : Props) =>

  <FullscreenSlideStyl>
    <Slide className="FullscreenSlide">
      {disableContainer
        ? {children}
        : <Container>{children}</Container>
      }

    </Slide>

    {footer &&
      <FullscreenSlideFooterStyl>{footer}</FullscreenSlideFooterStyl>
    }

  </FullscreenSlideStyl>

export default FullscreenSlide
