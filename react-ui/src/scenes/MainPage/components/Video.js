// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';

import { MEDIA_ONLY_QUERY } from "../../../services/styleTools"

const IframeWrapper = styled.div`
  & > iframe {
    
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: 0;  
      border: 0;
    
    ${MEDIA_ONLY_QUERY.TABLET`
      position: inherit;
      width: 100vw;
      height: calc(100vh - 20px);
      margin-left: -20px;
    `}
  
  }
`

const Video = () =>
  <FullscreenSlide className="Attendance">
    <IframeWrapper>
      <iframe src="https://www.youtube.com/embed/Or3Zo07Us38?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
    </IframeWrapper>
  </FullscreenSlide>

export default Video
