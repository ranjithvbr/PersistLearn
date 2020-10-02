import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import {inputupdatefun} from "./action/onchangeinput"
import {persistchangefun} from "./action/persistchange"


class App extends React.Component{
  
  render(){
    console.log(this.props.inputvalue,"inputvalue")
    alert(this.props.persisttest)
    return (
      <div className="App">
        <h3 onClick={()=>this.props.inputupdatefun("Done")}>persisttest-{this.props.inputvalue}</h3>
        <h3 onClick={()=>this.props.persistchangefun("Done")}>testhai</h3>{this.props.persisttest}

        {/* <input onChange={this.props.inputupdatefun} /> */}
        
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  inputvalue:state.inputvalue,
  persisttest:state.persisttest
})

const mapDispatchToProps=()=>({
  inputupdatefun,
  persistchangefun
})

export default connect(mapStateToProps,mapDispatchToProps())(App);
