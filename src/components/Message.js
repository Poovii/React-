import { Component } from "react";

 
class Message extends Component
{
    render()
    {
    
    return(<div>
        <h1> {this.state.msg}</h1>
        <button onClick={()=>this.changeMessage()}> Subscribe  </button> </div>)
    }
    constructor()
    {
        super()
        this.state={msg:"Here Your Subscription!!!!"} 
    }
    changeMessage()
    {
        this.setState({msg:"Thank  You For Your Subscription!!!!"})
      
    }
}
export default Message;