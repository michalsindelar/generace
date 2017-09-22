import React from "react"
import {FACEBOOK_LINK} from "../services/consts"

const Facebook = ({ href }) =>

  <a href={href || FACEBOOK_LINK}>
    <img
      style={{width: "34px", height: "34px"}}
      src="./fb.svg"
      alt="Generace s názorem | Facebook"
    />
  </a>

export default Facebook