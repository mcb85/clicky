import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Navbar from "../components/Navbar/NavTab";
//import Card from "../components/Card";
import HeroCard from "../components/HeroCard/HeroCard";
// import images from "../images.json";
import Row from "../components/Row";
import Col from "../components/Col/index.js";
//import { render } from "@testing-library/react";




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: [
        "black-panther", "black-widow", "capt-america", "capt-marvel", "gamora", "groot",
        "hawkeye", "hulk", "iron-man", "scarlet-witch", "spiderman", "thor"
      ],
      pickedHeros: [],
      //clicked: false,
      score: 0,
      scoreMessage: "Score: 0 ",
      navMessage: "Click on an image to begin!",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  shuffleArray = (heros) => {
    for (let i = this.state.heros.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.heros[i], this.state.heros[j]] = [this.state.heros[j], this.state.heros[i]];
    }

  }



  //checkMatch = (e.currentTarget.getAttribute('attr'))) => {

  //}

  handleClick = (e) => {
    let imageClicked = (e.currentTarget.getAttribute('attr'))
    console.log("CLICKED  " + imageClicked)



    this.setState({
      //clicked: !this.state.clicked,
      score: this.state.score + 1,
      scoreMessage: "Score: " + (this.state.score + 1),
      navMessage: "You guessed correctly!",
      pickedHeros: this.state.pickedHeros + imageClicked
    });
    this.shuffleArray();
    console.log(this.state.pickedHeros);
  };

  handleAlreadyClicked = () => {
    console.log("Already Clicked")
    this.setState({
      score: 0,
      scoreMessage: "Score: " + this.state.score,
      navMessage: "Try again!"
    });
    this.shuffleArray();
  }

  render() {
    return (
      <div>
        <Navbar scoreMessage={this.state.scoreMessage} navMessage={this.state.navMessage} />
        <Hero backgroundImage="./images/double-bubble-dark.png">
          <h1>Clicky Game</h1>
          <h3 className="text-white">Click on an image to earn points. Click on each image only once!</h3>
        </Hero>

        <Container>
          <Row>


            {this.state.heros.map(hero => {
              return (
                <Col size="sm-4" key={hero}>
                  <div className="card">
                    <HeroCard hero={hero} custom={this.handleClick}
                    />
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
