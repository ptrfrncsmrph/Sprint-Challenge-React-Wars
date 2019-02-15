import React from "react"
import "./Character.css"

const Character = ({ name, height, mass, created, edited }) => (
  <li className="character">
    <h2>{name}</h2>
    <dl>
      <dt>Height</dt>
      <dd>{height}</dd>
      <dt>Mass</dt>
      <dd>{mass}</dd>
      <dt>Created</dt>
      <dd>{created && new Date(created).toDateString()}</dd>
      <dt>Edited</dt>
      <dd>{edited && new Date(edited).toDateString()}</dd>
    </dl>
  </li>
)

export default Character
