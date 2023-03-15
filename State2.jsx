import React, { Component } from 'react'
import JSON from './state2.json'
import State2user from './State2user';

export default class State2 extends Component {
    constructor(){
        super()
        this.state={json:JSON}
    }
  render() {
    return (
      <div>
        <State2user data={this.state.json}/>
      </div>
    )
  }
}
