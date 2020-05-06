import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button label="Click me please"></Button>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  render() {
    return (<div className='App'>
    <Button label="Click me please"></Button>
    </div>
    );
  }
}


export default App;
