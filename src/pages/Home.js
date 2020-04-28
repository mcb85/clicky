import React, { Component }  from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Card from "../components/Card";
//import { render } from "@testing-library/react";

//function Home() {

//const unshuffledImages = [, "black-panther.jpg", "black-widow", ];

/*let shuffled = unshuffled
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);*/



class Home extends Component {
  state = {
    clicked: false,
    score: 0,
    welcomeMessage: "Click on an image to earn points. Click on each image only once!"
  };
  
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      //score
    });
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="./images/double-bubble-dark.png">
          <h1>Clicky Game</h1>
          <h3 className="text-white">{this.welcomeMessage}</h3>
        </Hero>
        <Container>
          <Card value={this.state.clicked}
            onChange={this.handleClick}>
          </Card>


        </Container>
      </div>
    );
  }
  }

export default Home;
