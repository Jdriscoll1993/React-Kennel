import React, { Component } from 'react'
import {Link} from "react-router-dom"
import shelter from "./shelter.svg"
class LocationItem extends Component {

  state = {
    saveDisabled: false
}


    handleClick = (event) => {
        console.log("click", event, this.props.location.id);
        this.setState({
          saveDisabled: true
        })
        this.props.deleteLocation(this.props.location.id);
    }

  render() {
    return (
      <article className = "location-item">
          <img src={ shelter } className="shelter" alt="dog"/>
          <h4>{this.props.location.name}</h4>
          <h6>{this.props.location.locationAddress}</h6>
          <button onClick={this.handleClick} disabled={ this.state.saveDisabled }>Delete</button>
          <Link className="deets" to={`/locations/${this.props.location.id}`}>Details</Link>
          <hr/>
      </article>
    )
  }
}

export default LocationItem;
