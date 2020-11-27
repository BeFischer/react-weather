import React from "react";
import Search from "./Search";



import './App.css';

function App() {
  return (
      <div className="App">
        <div>
        <header></header>
        <div className="container-fluid">
        <Search />
               </div>
        <footer>Coded by Be Fischer & available in<a href="https://github.com/BeFischer/react-weather" >GitHub</a></footer>
      </div>
    </div>
  );
}

export default App;
