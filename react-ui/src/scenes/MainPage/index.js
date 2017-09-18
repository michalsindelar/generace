// @flow
import React from "react"

import { FullPage } from "react-full-page"

import Attendance from "./components/Attendance"
import Intro from "./components/Intro"
import Header from "../../components/Header"

const MainPage = () =>
  <div className="MainPage">
    <Header/>
    <FullPage style={{backgroundColor: "red"}}>
      <Intro />
      <Attendance />
      <Attendance />
      <Attendance />
    </FullPage>
  </div>

export default MainPage;

