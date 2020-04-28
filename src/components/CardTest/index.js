import React from "react";
import "./style.css";
import Row from "../Row.js";
import Col from "../Col.js";
import CardBtn from "../CardBtn"

function Card(props) {
  return (
    <div className="wrapper">
      <Row>
        <Col size="sm-4">
          <CardBtn>
          <div className="card">
  <img alt={props.name} src={props.image} />
</div>
  
          </CardBtn>
              </Col>
          </Row>
          </div>
)
}


export default Card;