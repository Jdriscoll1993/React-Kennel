import React, { Component } from "react";
import { withRouter } from 'react-router'
// import "./Employee.css";

class LocationForm extends Component {
  // Set initial state
  state = {
    locationName: "",
    locationAddress: "",
    locationId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewLocation = evt => {
    if (this.state.employee === "") {
      window.alert("Please select an animal");
    } else {
      const location = {
        name: this.state.locationName,
        locationAddress: this.state.locationAddress,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        employeeId: parseInt(this.state.employeeId)
      };

      // Create the animal and redirect user to animal list
      this.props.addLocation(location)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
      console.log("what are props", this.props)
    return (
      <React.Fragment>
        <form className="locationForm">
          <div className="form-group">
            <label htmlFor="locationName">Location name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="locationName"
              placeholder="Location name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Location Address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="address"
              placeholder="Location Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee">Assign a Manager to this location</label>
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an employee</option>
              {this.props.employees.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={this.constructNewLocation} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(LocationForm)
