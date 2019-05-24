import React, { Component } from "react";
import { withRouter } from 'react-router'
// import "./Employee.css";

class EmployeeForm extends Component {
  // Set initial state
  state = {
    employeeName: "",
    // status: "",
    animalId: ""
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
  constructNewEmployee = evt => {
    if (this.state.animal === "") {
      window.alert("Please select an animal");
    } else {
      const employee = {
        name: this.state.employeeName,
        // status: this.state.status,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
      };

      // Create the animal and redirect user to animal list
      this.props.addEmployee(employee)
        .then(() => this.props.history.push("/employees"));
    }
  };

  render() {
      console.log("what are props", this.props)
    return (
      <React.Fragment>
        <form className="employeeForm">
          <div className="form-group">
            <label htmlFor="employeeName">Employee name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="employeeName"
              placeholder="Employee name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Employment Status</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="status"
              placeholder="Employment Status"
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal">Assign to animal</label>
            <select
              defaultValue=""
              name="animal"
              id="animalId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an animal</option>
              {this.props.animals.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(EmployeeForm)
