import React, { Component } from 'react'
class OwnerItem extends Component {

  state = {
    saveDisabled: false
}


    handleClick = (event) => {
        console.log("click", event, this.props.owner.id);
        this.setState({
          saveDisabled: true
        })
        this.props.deleteOwner(this.props.owner.id);
    }

  render() {
    return (
      <article className = "owner-item">
          <h3>{this.props.owner.name}</h3>
          <h5>{this.props.owner.phoneNumber}</h5>
          <button onClick={this.handleClick} disabled={ this.state.saveDisabled }>Delete</button>
          <hr/>
      </article>
    )
  }
}

export default OwnerItem;
