import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import AnimalManager from "../modules/AnimalManager"
import AnimalDetail from "./animal/AnimalDetail"
import AnimalForm from "./animal/AnimalForm"
import AnimalEditForm from "./animal/AnimalEditForm"
import LocationList from './location/LocationList'
import LocationManager from "../modules/LocationManager"
import LocationDetail from "./location/LocationDetail"
import LocationForm from "./location/LocationForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from "./employee/EmployeeForm"
import EmployeesManager from "../modules/EmployeesManager"
import EmployeeDetail from "./employee/EmployeeDetail"
import OwnerList from "./owner/OwnerList"
import OwnerManager from "../modules/OwnerManager"
import Login from './authentication/Login'
class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners:[]
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


// animals
    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
        .then(AnimalManager.getAll)
        .then(animals => {
            console.log("animals", animals);
            newState.animals = animals
            })
            .then (() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    }
    addAnimal = animal =>
        AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals =>
            this.setState({
                animals: animals
            })
    );
    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
        .then(() => AnimalManager.getAll())
        .then(animals => {
            this.props.history.push("/animals")
            this.setState({
                animals: animals
            })
        });
};
// location
    deleteLocation = (id) => {
        const newState = {};
        LocationManager.deleteLocation(id)
        .then(LocationManager.getAll)
        .then(locations => {
            console.log("locations", locations);
            newState.locations = locations
            })
            .then (() => {
                this.props.history.push("/")
                this.setState(newState)
            })
    }
    addLocation = location =>
        LocationManager.postLocation(location)
        .then(() => LocationManager.getAll())
        .then(locations =>
            this.setState({
                locations: locations
            })
    );
//employee
    deleteEmployee = (id) => {
        const newState = {};
        EmployeesManager.deleteEmployee(id)
        .then(EmployeesManager.getAll)
        .then(employees => {
            console.log("employees", employees);
            newState.employees = employees
            })
            .then (() => {
                this.props.history.push("/employees")
                this.setState(newState)
            })
    }
    addEmployee = employee =>
        EmployeesManager.postEmployee(employee)
        .then(() => EmployeesManager.getAll())
        .then(employees =>
            this.setState({
                employees: employees
            })
    );
    updateEmployee = (editedEmployeeObject) => {
        return EmployeesManager.put(editedEmployeeObject)
        .then(() => EmployeesManager.getAll())
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({
                employees: employees
            })
        });
};
//owner
    deleteOwner = (id) => {
        const newState = {};
        OwnerManager.deleteOwner(id)
        .then(OwnerManager.getAll)
        .then(owners => {
            console.log("owners", owners);
            newState.owners = owners
            })
            .then (() => {
                this.props.history.push("/owners")
                this.setState(newState)
            })
    }

// get
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
            .then(()=> 
        OwnerManager.getAll()
        .then(owners => {
            console.log("owners", owners)
            newState.owners = owners})        
            .then(() =>this.setState(newState))
        )))}
//render
    render() {
        console.log("APPVIEWS render");
        return (
            <> 
            {/* login */}
                <Route path="/login" component={Login} />

                <Route exact path="/employees" render={props => {
                     if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                             employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            {/* //location */}
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations}
                                                    deleteLocation={this.deleteLocation}/>
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )
                    if (!location) {
                        location = {id:404, name:"404", breed: "Location not found"}
                    }
                    return <LocationDetail location={ location }
                                deleteLocation={ this.deleteLocation } />
                }} />       
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props}
                                addLocation={this.addLocation}
                                employees={this.state.employees} />
                }} />                         
            {/* //animal */}
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}  {...props}
                                                    deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }
                    return <AnimalDetail animal={ animal }
                                deleteAnimal={ this.deleteAnimal } />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                                addAnimal={this.addAnimal}
                                employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
                }} />                            
            {/* //employee */}
                {/* <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                                                        deleteEmployee={this.deleteEmployee} />
                }} /> */}
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    if (!employee) {
                        employee = {id:404, name:"404", breed: "Employee not found"}
                    }
                    return <EmployeeDetail employee={ employee }
                                deleteEmployee={ this.deleteEmployee } />
                }} />      
                 <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                addEmployee={this.addEmployee}
                                animals={this.state.animals} />
                }} />               
                 <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    return <EmployeeEditForm {...props} updateEmployee={this.updateEmployee}/>
                }} />             
            {/* //owner */}                
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners}
                                                    deleteOwner={this.deleteOwner}/>
                }} />   
            </>
        )
    }
}

export default withRouter(ApplicationViews)

