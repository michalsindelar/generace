// @flow
import React from "react"

import { FullPage, Slide} from "react-full-page"

const MainPage = () =>
  <FullPage>
    <Slide>
      {/* Intro */}
      <h1>Intro</h1>
    </Slide>

    <Slide>
      {/* Attendance */}
      <h1>Attendance </h1>
    </Slide>

    <Slide>
      {/* Description */}
      <h1>Description</h1>
    </Slide>

    <Slide>
      {/* I will */}
      <h1>I will</h1>
    </Slide>

  </FullPage>

export default MainPage;

