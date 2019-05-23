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
          <h4>{this.props.animal.name}</h4>
          <h6>{this.props.animal.breed}</h6>
          <button onClick={this.handleClick} disabled={ this.state.saveDisabled }>Delete</button>
          <Link className="deets" to={`/animals/${this.props.animal.id}`}>Details</Link>
          <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(`/animals/${this.props.animal.id}/edit`);
            }}>Edit</button>
          <hr/>
      </article>
    )
  }
}

export default AnimalItem;
