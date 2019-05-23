import React, { Component } from 'react'
import AnimalItem from "./AnimalItem"

export default class AnimalList extends Component {

    render() {
        console.log("animal list render")
        return (
            <div className="animal-div">
                <h2>Animals</h2>
                    <div className="animalButton">
                        <button type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push("/animals/new")}
                                }>
                            Add New Animal
                        </button>
                    </div>
                <section className="animals">
                <hr/>
                {
                    this.props.animals.map((item)=>{
                        return <AnimalItem key={item.id} animal={item} {...this.props}
                            deleteAnimal ={this.props.deleteAnimal} />
                    })
                }
                </section>
            </div>
         )
    }
}