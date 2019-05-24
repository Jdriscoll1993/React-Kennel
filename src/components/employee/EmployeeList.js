import React, { Component } from 'react'
import EmployeeItem from "./EmployeeItem"
import { withRouter } from 'react-router';
class EmployeeList extends Component {

    render() {
        return (
            <div className ="employee-div">
                <h2>Employees</h2>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Add New Employee
                    </button>
                </div>                
                <section className="employees">
                <hr/>
                {
                    this.props.employees.map((item)=>{
                        return <EmployeeItem key={item.id} employee={item}
                            deleteEmployee ={this.props.deleteEmployee} />
                    })
                }
                </section>
            </div>
         )
    }
}

export default withRouter(EmployeeList)