import React, { Component } from 'react'

export class LifeCycle extends Component {
    // state={value:0};


    constructor(){
        super()
        console.log("i am constructor");
        this.state={value:0};
    }


    componentDidMount(){
        console.log("Mouting Phase")
        //curernt class
        this.s1=setInterval(()=>{
            console.log("hello")
        },2000)
    }
    componentDidUpdate(){
        console.log("Updating Phase")

    }
    getSnapshotBeforeUpdate(props,state){
        console.log("befor the upadate state was: " , state);
        return null;

    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.s1);
    }
  render() {
    console.log(" I am render")
    return (
      <div>

        <h1>Learn Life Cycle Methods {this.state.value}</h1>
        <button onClick={()=>this.setState({value:this.state.value+1})}>
                   Click
        </button>
      </div>
    )
  }
}

export default LifeCycle