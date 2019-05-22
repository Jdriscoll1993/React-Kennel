import React, { Component } from 'react'
import EmployeeItem from "./EmployeeItem"
export default class EmployeeList extends Component {

    render() {
        return (
            <div className ="employee-div">
                <section className="employees">
                <h2>All Employees</h2>
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