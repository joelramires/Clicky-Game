import React, { Component } from 'react';
import Nav from "./components/Nav";
import ImageCard from "./components/ImageCard";

class App extends Component {
  render() {
    return (<React.Fragment>
      <Nav />
      <ImageCard />
    </React.Fragment>
    )
  }
}

export default  App;
