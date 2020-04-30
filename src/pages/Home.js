import React, { Component }  from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Navbar from "../components/Navbar/NavTab";
//import Card from "../components/Card";
import HeroCard from "../components/HeroCard/HeroCard";
import images from "../images.json";
import Row from "../components/Row";
import Col from "../components/Col/index.js";
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
    heros: [
      "black-panther", "black-widow", "capt-america", "capt-marvel", "gamora", "groot",
      "hawkeye", "hulk", "iron-man", "scarlet-witch", "spiderman", "thor"
    ],
    clicked: false,
    score: 0,
    scoreMessage: "Score: 0",
    navMessage: "Click on an image to begin!"
  };
  
  handleClick = () => {
    console.log("CLICKED")
     this.setState({
     clicked: !this.state.clicked,
     score: this.state.score + 1,
     scoreMessage: "Score: " + this.state.score,
     navMessage: "You guessed correctly!"
     });
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="./images/double-bubble-dark.png">
          <h1>Clicky Game</h1>
          <h3 className="text-white">Click on an image to earn points. Click on each image only once!</h3>
        </Hero>
    
        <Container>
          <Row>
            {this.state.heros.map(hero => {
              return (
                <Col size="sm-4">
                  <div class="card">
                  <HeroCard hero={hero} custom={this.handleClick} />
                  </div>
                </Col>
              );
            })}


          </Row>
        </Container>
      </div>
    );
  }
  }

export default Home;
