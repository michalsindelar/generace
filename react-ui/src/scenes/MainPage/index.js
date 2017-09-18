// @flow
import React from "react"

import { FullPage } from "react-full-page"

import Attendance from "./components/Attendance"

const MainPage = () =>
  <div className="MainPage">
    <FullPage style={{backgroundColor: "red"}}>
      <Attendance />
      <Attendance />
      <Attendance />
      <Attendance />
    </FullPage>
  </div>

export default MainPage;

