import React from "react";
import Search from "./Search";
import "./index.css";


import './App.css';

function App() {
  return (
      <div className="App">
        <div className="container-fluid">
        <Search city="New York" />
        </div>
       <footer>Coded by <a href ="mailto:be_fischer@yahoo.com">Be Fischer </a> & open-sourced in{" "}<a href="https://github.com/BeFischer/react-weather" >GitHub</a></footer>
      
    </div>
  );
}

export default App;
