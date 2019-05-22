import React, { Component } from 'react'
import OwnerItem from "./OwnerItem"
export default class OwnerList extends Component {

    render() {
        return (
            <div className="owner-div">
                <h2>All Owners</h2>
                <section className="owners">
                <hr/>
                {
                    this.props.owners.map((item)=>{
                        return <OwnerItem key={item.id} owner={item}
                            deleteOwner ={this.props.deleteOwner} />
                    })
                }
                </section>
            </div>
         )
    }
}