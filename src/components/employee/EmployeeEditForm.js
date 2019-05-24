import React, { Component } from "react"
import EmployeesManager from "../../modules/EmployeesManager"
export default class EmployeeEditForm extends Component {
    // Set initial state
    state = {
      employeeName: "",
      animalId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()

      if (this.state.animal === "") {
        window.alert("Please select an animal");
      } else {
        const editedEmployee = {
          id: this.props.match.params.employeeId,
          name: this.state.employeeName,
          animalId: parseInt(this.state.animalId)
        };

    this.props.updateEmployee(editedEmployee)
    .then(() => this.props.history.push("/employees")) 
    }
  }

    componentDidMount() {
        EmployeesManager.get(this.props.match.params.employeeId)
        .then(employee => {
        this.setState({
          employeeName: employee.name,
          animalId: employee.animalId
        });
      });
    }


    render() {
        console.log("employee edit form")
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
                value = {this.state.employeeName}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="breed">Breed</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value = {this.state.breed}
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="animal">Assign to animal</label>
              <select
                name="animal"
                id="animalId"
                onChange={this.handleFieldChange}
                value = {this.state.animalId}
              >
                <option value="">Select an animal</option>
                {this.props.animals.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              onClick={this.updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}