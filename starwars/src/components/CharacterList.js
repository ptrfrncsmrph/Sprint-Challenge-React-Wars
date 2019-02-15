import React from "react"
import Character from "./Character"

import "./CharacterList.css"

const lastMatch = xs => xs[xs.length - 2]
const uidFromUrl = url => lastMatch(url.split(/\//))

const CharacterList = ({ characters }) => (
  <ul>
    {characters.map(character => (
      <Character key={uidFromUrl(character.url)} {...character} />
    ))}
  </ul>
)

export default CharacterList
