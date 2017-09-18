// @flow
import React from "react"

import { FullPage } from "react-full-page"

import Attendance from "./components/Attendance"
import General from "./components/General"
import Header from "../../components/Header"
import Intro from "./components/Intro"

const MainPage = () =>
  <div className="MainPage">
    <Header/>
    <FullPage style={{backgroundColor: "red"}}>
      <Intro />
      <Attendance />
      <General />
      <General />
    </FullPage>
  </div>

export default MainPage;

