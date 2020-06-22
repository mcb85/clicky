import React, { Component }  from "react";
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
  state = {
    heros: [
      "black-panther", "black-widow", "capt-america", "capt-marvel", "gamora", "groot",
      "hawkeye", "hulk", "iron-man", "scarlet-witch", "spiderman", "thor"
    ],
    clicked: false,
    score: 0,
    scoreMessage: "Score: 0 ",
    navMessage: "Click on an image to begin!",
  };
  

  shuffleArray = (heros) => {
    for (let i = this.state.heros.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.heros[i], this.state.heros[j]] = [this.state.heros[j], this.state.heros[i]];
    }
  
}

  handleClick = () => {
    console.log("CLICKED " + this.state.hero)
    this.setState({
      clicked: !this.state.clicked,
      score: this.state.score + 1,
      scoreMessage: "Score: " + (this.state.score + 1),
      navMessage: "You guessed correctly!"
    });
   
    this.shuffleArray();
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
        <Navbar scoreMessage={this.state.scoreMessage} navMessage={this.state.navMessage}/>
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
                    {/* {this.state.clicked ===false ? ( */}
                      <HeroCard hero={hero} custom={this.handleClick} />
                    {/* ) */}
                      {/* : ( */}
                    {/* <HeroCard hero={hero} custom={this.handleAlreadyClicked} /> */}
                        {/* ) */}
                    {/* } */}
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
