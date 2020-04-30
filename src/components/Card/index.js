import React from "react";
import "./style.css";
import Row from "../Row.js";
import Col from "../Col/index";
//import CardBtn from "../CardBtn"




function Card(props) {
  return (
    <div className="wrapper">
      <Row>
        <Col size="sm-4">
          
            <div className="card" id="gamora" onClick={props.custom}>
              <img src={"../images/gamora.jpg"} alt="gamora" />
            </div>
        
        </Col>

        <Col size="sm-4">
          <div className="card" id="black-widow">
            <img src={"../images/black-widow.jpg"} alt="black-widow" />
          </div>
        </Col>
        <Col size="sm-4">
          <div className="card">
            <img src={"../images/black-panther.jpg"} alt="black-panther" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="sm-4">
          <div className="card" id="capt-america">
            <img src={"../images/capt-america.jpg"} alt="capt-america" />
          </div>
        </Col>

        <Col size="sm-4">
          <div className="card" id="capt-marvel">
            <img src={"../images/capt-marvel.jpg"} alt="capt-marvel" />
          </div>
        </Col>

        <Col size="sm-4">
          <div className="card" id="groot">
            <img src={"../images/groot.jpg"} alt="groot" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="sm-4">
          <div className="card" id="hawkeye">
            <img src={"../images/hawkeye.jpg"} alt="hawkeye" />
          </div>
        </Col>

        <Col size="sm-4">
          <div className="card" id="hulk">
            <img src={"../images/hulk.jpg"} alt="hulk" />
          </div>
        </Col>

        <Col size="sm-4">
          <div className="card" id="iron-man">
            <img src={"../images/iron-man.jpg"} alt="iron-man" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="sm-4">
          <div className="card" id="scarlet-witch">
            <img src={"../images/scarlet-witch.jpg"} alt="scarlet" />
          </div>
        </Col>

        <Col size="sm-4">
          <div className="card" id="spiderman">
            <img src={"../images/spiderman.jpg"} alt="spiderman" />
          </div>
        </Col>
        <Col size="sm-4">
          <div className="card" id="thor">
            <img src={"../images/thor.jpg"} alt="thor" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Card;
