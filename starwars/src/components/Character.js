import React from "react"
import "./Character.css"

const Character = ({ name, height, mass, created, edited }) => (
  <li>
    <h2>{name}</h2>
  </li>
)

export default Character
