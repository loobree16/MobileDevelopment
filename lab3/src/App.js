import React from 'react';
import './App.css';
import Card from "./components/card/index.js";

class App extends React.Component {
  render() {
  return (
    <div className="App">
    <header>

      </header>

      <Card content="This is a Card!" />

    </div>

  );
}
}

export default App;
