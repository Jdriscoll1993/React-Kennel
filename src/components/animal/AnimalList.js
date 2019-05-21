import React, { Component } from 'react'

export default class AnimalList extends Component {
    // tellNewJoke= () => {
    //     const joke = {
    //         id: 76,
    //         type: "sean joke",
    //         setup: "what do you call a fly with no wings",
    //         punchline: "a walk"
    //     }
    //     this.props.setNewJokeState(joke);
    // }
    
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.name}
                    </div>
                )
            }
            {/* {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                       Owner: {owner.name}
                    </div>
                )
            } */}
            </section>
         )
    }
}

