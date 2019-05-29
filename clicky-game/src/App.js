import React, { Component } from 'react';
import Nav from "./components/Nav";
import ImageCard from "./components/ImageCard";


class App extends Component {
  state = {
    characters: characters.map(character => ({ ...character })),
    yourScore: 0,
    highScore: 0,
    yourGuess: "",
  }

  handleClick = id => {
    const chosenCharacter = this.state.characters.find(name => name.id === id);
    console.log(chosenCharacter);

    if (chosenCharacter.clicked === false) {
      chosenCharacter.clicked = true;
      console.log(chosenCharacter);
      const shuffledcharacters = this.state.characters.sort((a, b) => 0.5 - Math.random());
      this.setState({ characters: shuffledCharacters })
      this.handleIncrement();
      console.log(this.state.yourScore)
    }

    else {

      if (this.state.yourScore === 21) {
        alert("Congratulations! You won the game of thrones clicky game!");
        this.setState(({
          highScore: this.state.yourScore,
          yourScore: 0,
          characters: characters.map(character => ({ ...character }))
        }));
      }

      else if (this.state.yourScore > this.state.highScore) {
        alert("Game Over! Congrats on your new high score!")
        this.setState({
          highScore: this.state.yourScore,
          yourScore: 0,
          characters: characters.map(character => ({ ...character }))
        });
      }

      else {
        alert("Oops, you already clicked that one! That's game over!");
        this.setState({
          yourScore: 0,
          characters: characters.map(character => ({ ...character }))
        });
      }
    }
  };

  handleIncrement = () => {
  this.setState({ yourScore: this.state.yourScore + 1 });
  console.log(this.state.yourScore);
  };


  render() {
    return (<React.Fragment>
      <Nav />
      <ImageCard />
    </React.Fragment>
    )
  }
}

export default App;
