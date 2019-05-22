import React, { Component } from 'react'
import AnimalItem from "./AnimalItem"

export default class AnimalList extends Component {

    render() {
        return (
            <div className="animal-div">
                <h2>All Animals</h2>
                <section className="animals">
                    <div className="animalButton">
                        <button type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push("/animals/new")}
                                }>
                            Admit Animal
                        </button>
                    </div>
                <hr/>
                {
                    this.props.animals.map((item)=>{
                        return <AnimalItem key={item.id} animal={item}
                            deleteAnimal ={this.props.deleteAnimal} />
                    })
                }
                </section>
            </div>
         )
    }
}