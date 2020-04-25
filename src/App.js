// import React, {useState} from 'react';
import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Person from './Person/Person.js';
import './Person/Person.css';

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
      { name: 'Rama', age: 28 },
      { name: 'Shyam', age: 29 },
      { name: 'Sita', age: 26 }
    ],
    otherState: "Some other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'ShyamKumar', age: 29 },
        { name: 'SitaMani', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ram', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'SitaMani', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Ramakant')}
              changed={this.nameChangedHandler}
            >
              I belong to Mathura
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            >
            </Person>
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is my first react demo application</h1>
        <p>And this is really working !</p>
        <Button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </Button> 
        {persons}
      </div>
    );
  }
}



// const App = props => {
//   const [personsState, setPersonsState]  = useState({
//     persons: [
//       { name: "Rahav", age: "28" },
//       { name: "Sunil", age: "29" },
//       { name: "Satya", age: "30" },
//       { name: "Praveen", age: "31" },
//       { name: "Seema", age: "32" }
//     ]
//   });

//   const [otherState, setOtherState]  = useState('some other value');

//   console.log('personsState1:',personsState,'otherState1:',otherState);

//   const switchNameHandler = () => {
//     //console.log("switch Name button clicked");
//     setPersonsState({ 
//       persons: [
//         { name: "Rahavendra", age: "28" },
//         { name: "Sunildude", age: "29" },
//         { name: "Satyagraha", age: "30" },
//         { name: "Praveencharya", age: "31" },
//         { name: "Seemant", age: "32" }
//       ],
//       otherState: personsState.otherState
//     }
//     );
//   }

//   console.log('personsState2:',personsState);

//   return (
//     <div className="App">
//       <hi>Hi, this is my first react demo application</hi>
//       <Person name={personsState.persons[4].name} age={personsState.persons[4].age}/>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       <Person name={personsState.persons[3].name} age={personsState.persons[3].age}>My father name: Guru Prasad</Person>
//       <Person name={personsState.persons[4].name} age={personsState.persons[4].age}/>
//     </div>
//   );
// }

export default App;
