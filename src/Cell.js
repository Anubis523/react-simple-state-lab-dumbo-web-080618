import React, { Component } from 'react'
export default class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  changeColor = (evt) => {
    debugger
    this.setState({color: '#333'})
    console.log(evt)
  }

  render(){
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={(e)=> {this.changeColor(e)}}>
      </div>
    )
  }
}