import React, { Component } from "react"
import CharacterList from "./components/CharacterList"
import ApolloClient from "apollo-boost"
import gql from "graphql-tag"
import { get, set } from "partial.lenses"
import { compose } from "ramda"

import "./App.css"

const trace = msg => x => {
  console.log(msg, x)
  return x
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.getDataFromGraphQL("http://localhost:50648/")
  }

  getDataFromGraphQL = uri => {
    const client = new ApolloClient({
      uri
    })

    client
      .query({
        query: gql`
          {
            allPeople {
              people {
                name
                starshipConnection {
                  starships {
                    name
                  }
                }
              }
            }
          }
        `
      })
      .then(
        compose(
          this.setState.bind(this),
          get(["data", "allPeople"])
        )
      )
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.people} />
      </div>
    )
  }
}

export default App
