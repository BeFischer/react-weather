import React from "react";
import Search from "./Search";



import './App.css';

function App() {
  return (
      <div className="App">
        <header></header>
        <div className="container-fluid">
        <Search />
        </div>
       <footer>Coded by Be Fischer & available in{" "}<a href="https://github.com/BeFischer/react-weather" >GitHub</a></footer>
      
    </div>
  );
}

export default App;
