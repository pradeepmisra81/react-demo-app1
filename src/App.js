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
      { id: 'identity1', name: 'Rama', age: 28 },
      { id: 'identity2', name: 'Shyam', age: 29 },
      { id: 'identity3', name: 'Sita', age: 26 }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex] 
    };
    //const person = Object.assign({}, this.state.person[personIndex]);
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, this is a react demo application</h1>
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
