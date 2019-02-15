import React, { Component } from "react"
import CharacterList from "./components/CharacterList"

import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentWillMount() {
    console.log(window)
    window.addEventListener("fetch", event => {
      console.log("Handling fetch event for", event.request.url)
    })
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people")
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ characters: data.results })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    console.log(this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.characters} />
      </div>
    )
  }
}

export default App
