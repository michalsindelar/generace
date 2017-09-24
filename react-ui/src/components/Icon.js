import React from "react"
import { ICON_DIMENSION } from "../services/styleTools"

const Icon = ({ src, width, height, alt,...rest }) =>
  <img
    style={{width: width || ICON_DIMENSION, height: height || ICON_DIMENSION}}
    src={src}
    alt={alt || "Generace s názorem"}
    {...rest}
  />

export default Icon