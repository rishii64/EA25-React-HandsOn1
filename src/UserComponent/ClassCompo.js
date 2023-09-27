import React, { Component } from 'react'

export default class ClassCompo extends Component {
    constructor(){
        super();
        this.state={
            head : 'This is created using Class Component',
            p1 : 'This is done using External CSS',
            p2 : 'This is done using Internal CSS'
        }
    }
  render() {
    return (
      <div id='class'>
        <h1>{this.state.head}</h1>
        <p>{this.state.p1}</p>
        <p>{this.state.p2}</p>
      </div>
    )
  }
}
