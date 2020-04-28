import React from "react";
import "./style.css";
import Row from "../Row.js";
import Col from "../Col.js";
import CardBtn from "../CardBtn"




function Card() {
  return (
    <div className="wrapper">
      <Row>
        <Col size="sm-4">
          <CardBtn>
          <div className="card" id="gamora">
            <img src={"../images/Gamora.jpg"} alt="gamora" />
          </div></CardBtn>
        </Col>

        <Col size="sm-4">
          <div className="card" id="blackWidow">
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
            <img src={"../images/cptn-america2.jpg"} alt="capt-america" />
          </div>
        </Col>

        <Col size="sm-4">
          <div className="card" id="capt-marvel">
            <img src={"../images/cptn-marvel.jpg"} alt="capt-marvel" />
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
            <img src={"../images/Scarlet-Witch.jpg"} alt="scarlet" />
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
