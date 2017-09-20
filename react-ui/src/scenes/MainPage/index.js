// @flow
import React from "react"

import { FullPage } from "react-full-page"

import Appendix from "./components/Appendix"
import Attendance from "./components/Attendance"
import Header from "../../components/Header"
import Info from "./components/Info"
import Intro from "./scenes/Intro/index"

const MainPage = () =>
  <div className="MainPage">
    <Header/>
    <FullPage style={{backgroundColor: "red"}}>
      <Intro />
      <Attendance />
      <Info />
      <Appendix />
    </FullPage>
  </div>

export default MainPage;

