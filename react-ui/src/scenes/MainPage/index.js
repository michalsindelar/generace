// @flow
import React from "react"

import { FullPage } from "react-full-page"

import Appendix from "./components/Appendix"
import Attendance from "./components/Attendance"
import Header from "../../components/Header"
import Info from "./components/Info"
import Intro from "./scenes/Intro/index"
import People from "./scenes/People/index"
import Team from "./components/Team"
import {isLtDesktopBig} from "../../services/styleTools"

const MainPage = () => {

  return (
    <div className="MainPage">
      <Header/>

      {isLtDesktopBig() ?

        <div>
          <Intro />
          <Attendance />
          <People />
          <Info />
          <Appendix />
          <Team />
        </div> :

        <FullPage>
          <Intro />
          <Attendance />
          <People />
          <Info />
          <Appendix />
          <Team />
        </FullPage>
      }

    </div>
  )
}


export default MainPage;

