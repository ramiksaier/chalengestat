import React, { Component } from 'react'

export default class AddItems extends Component {
    state={ 
        input:""
    }
    
    handelChange=(e)=>{
        this.setState({
            input:e.target.value
        })
    }
    
    render() {
        return (
            <div>
<input type="text" placeholder="Add to do" onChange={this.handelChange}></input>        
<button onClick={()=>this.props.handelItem(this.state.input)} >ADD</button>       
            </div>
        )
    }
}
