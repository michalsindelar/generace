// @flow
import React from "react"
import R from "ramda"

import { FullPage } from "react-full-page"

import Appendix from "./components/Appendix"
import Attendance from "./components/Attendance"
import Header from "../../components/Header"
import Info from "./components/Info"
import Intro from "./scenes/Intro/index"
import People from "./scenes/People/index"
import Video from "./components/Video"
import { isLtDesktopBig } from "../../services/styleTools"
import {PEOPLE} from "../../services/consts"

const MainPage = () => {

  return (
    <div className="MainPage">
      <Header/>

      {isLtDesktopBig() ?

        <div>
          <Video />
          <Intro />
          <Attendance />
          <People />
          <Info />
          <Appendix />
        </div> :

        <FullPage>
          <Video />
          <Intro />
          <Attendance />
          <People people={R.take(7, Object.keys(PEOPLE))} />
          <People people={R.takeLast(4, Object.keys(PEOPLE))} />
          <Info />
          <Appendix />
        </FullPage>
      }

    </div>
  )
}


export default MainPage;

