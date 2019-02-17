import React from "react"
import Character from "./Character"

import "./CharacterList.scss"

const CharacterList = ({ characters }) => (
  <ul className="character-list">
    {characters.map(character => (
      <Character key={character.name} {...character} />
    ))}
  </ul>
)

export default CharacterList
