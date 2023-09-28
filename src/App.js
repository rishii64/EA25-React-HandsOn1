import './App.css';
import React, { Component } from 'react'
import ClassCompo from './UserComponent/ClassCompo';
import FunctionCompo from './UserComponent/FunctionCompo';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      classShow : false,
      funShow : false
    }
  }
  render() {
    return (
      <div className='App'>
        <h1 id='mainHead'>Styling using Functional and Class Component</h1>
        <button className='btn' onClick={()=> this.setState({funShow : !this.state.funShow})}>To see styling using Functional Component</button>
        <button className='btn' onClick={()=> this.setState({classShow : !this.state.classShow})}>To see styling using Class Component</button>
        <div id='boxes'>
          {(this.state.classShow) ? <ClassCompo/> : null}
          {(this.state.funShow) ? <FunctionCompo/> : null}
        </div>
      </div>
    )
  }
}
