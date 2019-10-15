import React from 'react';

import Form from './Form.js'
import Robot from './Robot.js'

import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      form : {
        somethingSaid:''
      }
    }
  }
  
  handleChange = (e) => {
    // console.log("handleChange event->>",e)
    // console.log("handleChange e.Target->>",e.target)
    // console.log("handleChange e.target.Value->>",e.target.value)
    // const{ form } = this.state 
    // form[e.target.name] = e.target.value
    // this.setState({form})
    this.setState({form:{somethingSaid:e.target.value }})
  }

  render() {
    return (
      <div className="App">
        Robo Active Listenting World
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="somethingSaid"
            placeholder="What should I say?"
            onChange={this.handleChange}
            value = {this.state.form.somethingSaid}
            />
        </form>
        
        <Form handleChange={()=>console.log('changed')} name="somethingSaid" value={this.state.form.somethingSaid}/>
        
        <Robot name={"Good Robot"} input={this.state.form.somethingSaid} func={(word) => `I hear you saying ${word}. Is that correct?`}/>
        <Robot name={"Bad Robot"} input={this.state.form.somethingSaid} func={(word) => `I hear you saying ${"BLABBLABBLABBLAB".split('').slice(0,word.length).join('')}. Is that correct?`}/>
        <Robot name={"Kanyebot 5000"} input={this.state.form.somethingSaid} func={(word) => `I'm gonna let you finish but Beyonce is ${word}`}/>
      </div>
    );
  }
}

export default App;
