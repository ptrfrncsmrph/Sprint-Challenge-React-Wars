import React from "react"
import "./Character.css"

const Character = ({ name, height, mass, created, edited }) => (
  <li className="character">
    <h2>{name}</h2>
    <ul>
      <li>{created}</li>
    </ul>
  </li>
)

export default Character
