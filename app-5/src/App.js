import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'http://static1.1.sqspcdn.com/static/f/1097330/26864675/1455763238823/unnamed+2.jpg?token=aCIQ%2FzIJQFTh47oSu%2FExpXa1hV0%3D'} />
      </div>
    );
  }
}

export default App;