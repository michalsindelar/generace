// @flow
import React from "react"
import styled from 'styled-components';

import Container from "../Container"
import {isLtDesktopBig, MEDIA_ONLY_QUERY, PALETTE} from "../../services/styleTools"

type Props = {
  children: any,
  disableContainer?: boolean,
  footer: any
}

export const FullscreenSlideStyl = styled.div`
  background: ${PALETTE.PRIMARY} url('./slide-bg.svg') center bottom 30px no-repeat;
  height: 100%; // Super important
  position: relative;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    padding-bottom: 60px;
  `}
`

const SlideStyl = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`

const FullscreenSlideFooterStyl = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-right: 20px;
  padding-bottom: 8px;
`

const FullscreenSlideFooterContainerStyl = styled.div`
  width: 1415px;
  max-width: 100%;
  margin: 0 auto;
`


const FullscreenSlide = ({ disableContainer, children, label, footer } : Props) =>

  <FullscreenSlideStyl>
    {isLtDesktopBig() ?
      <div>
        {disableContainer
          ? {children}
          : <Container>{children}</Container>
        }
      </div> :
      <SlideStyl className="FullscreenSlide">
        {disableContainer
          ? {children}
          : <Container>{children}</Container>
        }
      </SlideStyl>
    }


    {(footer || label) &&
      <FullscreenSlideFooterStyl>
        <FullscreenSlideFooterContainerStyl>
          {label || ""}
          {footer || ""}
        </FullscreenSlideFooterContainerStyl>
      </FullscreenSlideFooterStyl>
    }

  </FullscreenSlideStyl>

export default FullscreenSlide
