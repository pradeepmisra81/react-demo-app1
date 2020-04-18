// import React, {useState} from 'react';
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'
import './Person/Person.css'

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
          <h1>Hi, this is my first react demo application</h1>
          <p>And this is really working !</p>
          <Person name='Ram' age='28'></Person>
          <Person name='Shyam' age='29'></Person>
          <Person name='Sita' age='26'></Person>
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
