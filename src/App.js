import React, { Component } from 'react'
import ListItem from './Component/ListItems/ListItems'
import Additems from './Component/AddItems/AddItems'

export default class App extends Component {
  state={
    listitems:["task1","task2"]
  }
  handelItem=(item)=>{
    // this.setState(item(...this.state.listitems))
    this.setState({listitems:this.state.listitems.concat(item)})

  }
  handleDelete=(indice)=>{
this.setState({listitems:this.state.listitems.filter((el,i)=>i!=indice)})
  }
  render() {
    return (
      <div>
        <h1>Todo lists</h1>
        <Additems handelItem={this.handelItem}/>
        <ListItem listitems={this.state.listitems} handleDelete={this.handleDelete}/>

        
      </div>
    )
  }
}
