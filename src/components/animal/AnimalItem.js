import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Animal.css"
import dog from "./DogIcon.svg"
class AnimalItem extends Component {

  state = {
    saveDisabled: false
}


    handleClick = (event) => {
        console.log("click", event, this.props.animal.id);
        this.setState({
          saveDisabled: true
        })
        this.props.deleteAnimal(this.props.animal.id);
    }

  render() {
    return (
      <article className = "animal-item">
          <img src={ dog } className="icon--dog" alt="dog"/>
          <h3>{this.props.animal.name}</h3>
          <button onClick={this.handleClick} disabled={ this.state.saveDisabled }>Delete</button>
          <Link to={`/animals/${this.props.animal.id}`}>Details</Link>
          <hr/>
      </article>
    )
  }
}

export default AnimalItem;
