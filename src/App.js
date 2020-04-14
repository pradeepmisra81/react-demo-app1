import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, this is my first react demo application</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { name: "Rahav", age: "28" },
      { name: "Sunil", age: "29" },
      { name: "Satya", age: "30" },
      { name: "Praveen", age: "31" },
      { name: "Seema", age: "32" }
    ],
    otherState: 'some other value' 
  }

  switchNameHandler = () => {
    //console.log("switch Name button clicked");
    this.setState({ 
      persons: [
        { name: "Rahavendra", age: "28" },
        { name: "Sunildude", age: "29" },
        { name: "Satyagraha", age: "30" },
        { name: "Praveencharya", age: "31" },
        { name: "Seemant", age: "32" }
      ]
    }
    );
  }

  render() {
    return (
      <div className="App">
        <hi>Hi, this is my first react demo application</hi>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}>My father name: Guru Prasad</Person>
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works?'));
  }

}

export default App;
