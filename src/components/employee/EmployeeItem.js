import React, { Component } from 'react'
import {Link} from "react-router-dom"
class EmployeeItem extends Component {

  state = {
    saveDisabled: false
}


    handleClick = (event) => {
        console.log("click", event, this.props.employee.id);
        this.setState({
          saveDisabled: true
        })
        this.props.deleteEmployee(this.props.employee.id);
    }

  render() {
    return (
      <article className = "employee-item">
          <h4>{this.props.employee.name}</h4>
          <h6>{this.props.employee.status}</h6>
          <button onClick={this.handleClick} disabled={ this.state.saveDisabled }>Delete</button>
          <Link className="deets" to={`/employees/${this.props.employee.id}`}>Details</Link>
          <hr/>
      </article>
    )
  }
}

export default EmployeeItem;
