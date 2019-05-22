import React, { Component } from 'react'
import {Link} from "react-router-dom"
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
          <h3>{this.props.location.name}</h3>
          <h5>{this.props.location.address}</h5>
          <button onClick={this.handleClick} disabled={ this.state.saveDisabled }>Delete</button>
          <Link to={`/locations/${this.props.location.id}`}>Details</Link>
          <hr/>
      </article>
    )
  }
}

export default LocationItem;
