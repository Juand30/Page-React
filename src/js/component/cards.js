import React from "react";
import ReactDOM from "react-dom";

const Cards = () => {
  return (
    <div className="card card2">
      <img src="https://picsum.photos/id/1069/367/267" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
         Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Cards;

