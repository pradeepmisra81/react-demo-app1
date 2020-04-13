import React, {Component} from 'react';
import './App.css';
import Person1 from './Person/Person.js'

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
        <Person1 />
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works?'));
  }

}

export default App;
