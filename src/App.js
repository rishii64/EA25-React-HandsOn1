import './App.css';
import React, { Component } from 'react'
import ClassCompo from './UserComponent/ClassCompo';
import FunctionCompo from './UserComponent/FunctionCompo';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 id='mainHead'>Styling using Functional and Class Component</h1>

        <button className='btn'>To see styling using Functional Component</button>
        <button className='btn'>To see styling using Class Component</button>
        <div id='boxes'>
          <FunctionCompo/>
          <ClassCompo/>
        </div>
      </div>
    )
  }
}
