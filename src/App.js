import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js'

// class App extends Component {
const App = props => {
  const [personsState, setPersonsState]  = useState({
    persons: [
      { name: "Rahav", age: "28" },
      { name: "Sunil", age: "29" },
      { name: "Satya", age: "30" },
      { name: "Praveen", age: "31" },
      { name: "Seema", age: "32" }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    //console.log("switch Name button clicked");
    setPersonsState({ 
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

  return (
    <div className="App">
      <hi>Hi, this is react hooks and redux demo application</hi>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age}>My father name: Guru Prasad</Person>
      <Person name={personsState.persons[4].name} age={personsState.persons[4].age}/>
    </div>
  );
}

export default App;
