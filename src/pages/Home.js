import React, { Component }  from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Card from "../components/Card";
import images from "../images.json";
//import { render } from "@testing-library/react";

function Shuffle() {
  var unshuffled = images;
  var shuffled = unshuffled
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}
/*function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}*/

class Home extends Component {
  state = {
    clicked: false,
    score: 0,
    welcomeMessage: "Click on an image to earn points. Click on each image only once!"
  };
  
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      score: this.state.score + 1
    });
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="./images/double-bubble-dark.png">
          <h1>Clicky Game</h1>
          <h3 className="text-white">{this.state.welcomeMessage}</h3>
        </Hero>
        <Container>
      <Card
            //name={images[0].name}
            //image={images[0].image}
            onClick={this.handleClick}
          />
        </Container>
      </div>
    );
  }
  }

export default Home;
