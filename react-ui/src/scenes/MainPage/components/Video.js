// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';

const IframeWrapper = styled.div`
  & > iframe {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
  }
`


const Video = () =>
  <FullscreenSlide className="Attendance">
    <IframeWrapper>
      <iframe src="https://www.youtube.com/embed/Or3Zo07Us38?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
    </IframeWrapper>
  </FullscreenSlide>

export default Video
