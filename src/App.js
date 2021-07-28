import logo from './logo.svg';
import React from 'react';
import {Counter} from './Components/Counter';
import {Textbox} from './Components/Textbox';
import {NavBar} from './Components/NavBar';
import {Movie} from './Components/Movie';
import { QuoteMaker } from './Components/QuoteMaker';
import './App.css';

function App() {
  

  // useEffect((props) => {
  //   setCount(count++);
  // });

  

  return (
    <div className="App">
      <header className="App-header">
        <QuoteMaker />
        {/*
        <NavBar lastHeader="memes"/>
        <img src={logo} className="App-logo" alt="logo" />
        <Movie />
        <Textbox />
        <Counter init="Press a Button"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
    </div>
  );
}

export default App;
