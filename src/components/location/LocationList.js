import React, { Component } from 'react'
import LocationItem from "./LocationItem"
import { withRouter } from 'react-router';
class LocationList extends Component {

    render() {
        return (
            <div className ="location-div">
                <h2>Locations</h2>
                <div className="locationButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/locations/new")}
                            }>
                        Add New Location
                    </button>
                </div>                
                <section className="locations">
                <hr/>
                {
                    this.props.locations.map((item)=>{
                        return <LocationItem key={item.id} location={item}
                            deleteLocation ={this.props.deleteLocation} />
                    })
                }
                </section>
            </div>
         )
    }
}

export default withRouter(LocationList)