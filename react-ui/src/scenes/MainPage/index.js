// @flow
import React from "react"

import { FullPage } from "react-full-page"

import Appendix from "./components/Appendix"
import Attendance from "./components/Attendance"
import Header from "../../components/Header"
import Info from "./components/Info"
import Intro from "./scenes/Intro/index"
import People from "./scenes/People/index"
import Video from "./components/Video"
import { isLtDesktopBig } from "../../services/styleTools"

const MainPage = () => {

  return (
    <div className="MainPage" style={{maxWidth: "100vw"}}>
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

        <div>
          <People dense />
          <Video />
          <Intro />
          <Attendance />
          <Info />
          <Appendix />
        </div>
      }

    </div>
  )
}


export default MainPage;

