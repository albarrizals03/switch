import React, { Component } from 'react'
import LAMPUON from "./lampuhidup.gif";
import LAMPUOf from "./lampu.gif";

export class Switch extends Component {
    state ={
        LAMPU1: 1,
    };
    Lampu() {
        if(this.state.LAMPU1 ===1){
            return <img src={LAMPUON}alt="" />;
        }else{
            return <img src={LAMPUOf}alt="" ></img>;
        }
    }
    saklar() {
        if (this.state.LAMPU1 ===1){
            return (
                <button
                onClick={() => {
                    this.setState({ LAMPU1 : 2});
                }}
                >
                OFF
                </button>
            );
            
        } else{
            return (
                <button
                onClick={()=>{
                    this.setState({LAMPU1: 1});
                }}
                >
                    ON
                </button>
            );

        }
    }
  render() {
    return (
       <div>
        {this.Lampu()}
        <br />
        {this.saklar()}
       </div>
    );
  }
}
    
export default Switch;