import React from "react";
import { useState } from "react";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router-dom";
import minionImage from "/Users/junior/Desktop/randos/web102_unit7lab-main/client/src/components/assets/minions.png";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={minionImage} />
      <Link to={"edit/" + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="title">{props.title}</h2>
      <h3 className="author">{"by " + props.author}</h3>
      <p className="description">{props.description}</p>
      <p className="description">I'm {props.beauty}</p>
      <button className="betButton">Learn About Me!</button>
    </div>
  );
};

export default Card;
