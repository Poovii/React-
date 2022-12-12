import { Component } from "react";
import { ProgressPlugin } from "webpack";

 class Welcome extends Component
{ 
   /* render()
    {
        return( <h1> Welcome To {this.props.name}</h1>)
    }*/
    render()
    {
        const {name,msg}=this.props;
        //const{count}=this.state;
        return(<h1>{msg} <i> {name}</i></h1>)
    }

}
/*  const Welcome = props=>
{
    const {name,cls} =props
    return (<h1>Students: {name} is in class {cls}</h1>)
}*/
export default Welcome;