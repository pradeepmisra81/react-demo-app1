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

  render() {
    return (
      <div className="App">
        <hi>Hi, this is my first react demo application</hi>
        <p>This is really working</p>
        <Person name="Rahav" age="28"/>
        <Person name="Sunil" age="29"/>
        <Person name="Satya" age="30"/>
        <Person name="Praveen" age="31"/>
        <Person name="Seema" age="32"/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works?'));
  }

}

export default App;
