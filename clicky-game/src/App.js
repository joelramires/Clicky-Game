import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import characters from "./characters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";



class App extends Component {

  state = {
    characters: characters.map(character => ({ ...character })),
    yourScore: 0,
    highScore: 0,
    yourGuess: "",
  };



  handleClick = id => {

    const chosenPokemon = this.state.characters.find(name => name.id === id);
    console.log(chosenPokemon);

    if (chosenPokemon.clicked === false) {
      chosenPokemon.clicked = true;
      console.log(chosenPokemon);
      const shuffledCharacters = this.state.characters.sort((a, b) => 0.5 - Math.random());
      this.setState({ character: shuffledCharacters })
      this.handleIncrement();
      console.log(this.state.yourScore);
    }

    else {

      if (this.state.yourScore === 21) {
        alert("Congratulations! You won the game!");
        this.setState({
          highScore: this.state.yourScore,
          yourScore: 0,
          characters: characters.map(character => ({ ...character }))
        });
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
    return (
      <div>
        <Nav
          yourScore={this.state.yourScore}
          highScore={this.state.highScore}
          yourGuess={this.state.yourGuess}
        />
        <Wrapper>
          <Title>Click each character Pokemon once to earn points.
    <br></br>
            Click the same Pokemon twice and it's game over.
    </Title>
          {this.state.characters.map(character => (
            <ImageCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              clicked={character.clicked} //
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default App;