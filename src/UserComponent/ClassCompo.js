import React, { Component } from 'react'

export default class ClassCompo extends Component {
    constructor(){
        super();
        this.state = {
            head : 'This is created using Class Component',
            p1 : 'This is done using External CSS',
            p2 : 'This is done using Internal CSS',
            count : false
        }
    }
  render() {
    return (
      <div id='class'>
        <h1>{this.state.head}</h1>
        <span>{this.state.p1}</span>
        <p style={{color:'blue'}}>{this.state.p2}</p>
      </div>
    )
  }
}
