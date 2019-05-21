import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "../modules/AnimalManager"
import EmployeesManager from "../modules/EmployeesManager"
import LocationManager from "../modules/LocationManager"
class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: []
    }

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
        .then(AnimalManager.getAll)
        .then(animals => {
            console.log("animals", animals);
            newState.animals = animals
            })
            .then (() => this.setState(newState))
    }
    
    componentDidMount(){
        console.log("APPVIEWS componentDidMount")
        const newState = {};
        AnimalManager.getAll()
            .then(animals => {
                console.log("animals", animals)
                newState.animals = animals})
            .then(() => 
                EmployeesManager.getAll()
                .then(employees => {
                    console.log("employees", employees)
                    newState.employees = employees})
                .then(()=> 
                LocationManager.getAll()
                .then(locations => {
                    console.log("locations", locations)
                    newState.locations = locations})
                .then(()=> this.setState(newState))
            ))}

    render() {
        console.log("APPVIEWS render");
        return (
            // <> short hand for <React.Fragment>
            <> 
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}  
                                                    deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </>
        )
    }
}

export default ApplicationViews