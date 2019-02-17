import React from "react"
import "./Character.css"

import formatDistance from "date-fns/formatDistance"

const Character = ({ name, starshipConnection: { starships } }) => (
  <li
    className="character"
    style={{ display: starships.length ? "inherit" : "none" }}
  >
    <h2>{name}</h2>
    <ul>
      {starships.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  </li>
)

export default Character
