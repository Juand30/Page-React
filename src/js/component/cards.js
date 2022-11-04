import React from "react";
import ReactDOM from "react-dom";

const Cards = (props) => {
  return (
    <div className="card card2 mx-auto col-lg-4 col-md-6 col-sm-12">
      <img src={props.Img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.Title}</h5>
        <p className="card-text">{props.Text}</p>
        <a href="#" className="btn btn-primary">
         Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Cards;

