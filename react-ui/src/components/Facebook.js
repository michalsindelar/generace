import React from "react"

const Facebook = ({ href }) =>

  <a href={href || "https://www.facebook.com/generacesnazorem/?ref=br_rs"}>
    <img
      style={{width: "34px", height: "34px"}}
      src="./fb.svg"
      alt="Generace s názorem | Facebook"
    />
  </a>

export default Facebook