import React from "react";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imglink} style={{height: "300px"}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <a className="btn btn-primary shadow w-100" >Go somewhere</a>
      </Card.Body>
    </Card>
  );
}

export default Cards;
