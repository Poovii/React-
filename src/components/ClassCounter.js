import React from "react";
import { Component } from "react";

class ClassCounter extends Component
{ 
    render()
    {
        return(<div><button onClick={()=>this.incrementCount()}>Count{this.state.count}</button></div>)

    }
    constructor(){
        super()
        this.state={count:0}
    }
    incrementCount(){
        this.setState({count:this.state.count+1})
        console.log(this.state.count)//previous count value
    }
    increment()
    {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        

    }


}
export default ClassCounter;