import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import Footer from "./footer/footer"
import ApplicationViews from "./ApplicationViews"
// import "./Kennel.css"
import "./footer/footer.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
                <Footer />
            </React.Fragment>
        )
    }
}
export default Kennel

    // state = {
    //     id: 75,
    //     type: "general",
    //     setup: "what the fuck",
    //     punchline: "quiet"

    // }

    // setNewJokeState= jokeObj => {
    //     this.setState({
    //         id: jokeObj.id,
    //         type: jokeObj.type,
    //         setup: jokeObj.setup,
    //         punchline: jokeObj.punchline
    //     })
    // }


