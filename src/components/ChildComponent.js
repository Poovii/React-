import React, { Component } from "react";
class ChildComponent extends Component
{
    render(){
        return <h1>Hello  {this.props.name}
       <h3>{this.props.children}</h3></h1>
    }

}


export default ChildComponent;