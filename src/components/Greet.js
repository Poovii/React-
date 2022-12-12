import React from "react";
//const Greet=props=><h3>Hello Students {props.msg}</h3>
const Greet=({name}) =>{
    return <h3>{name}</h3>
}
export default Greet;