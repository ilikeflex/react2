import React from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./components/CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <CoursesPage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;

/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleComponent from "./owncomponent/ExampleComponent.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React UI
          <ExampleComponent/>
        </a>
      </header>
    </div>
  );
}

export default App;
*/