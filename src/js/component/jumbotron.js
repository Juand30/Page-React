import React from "react";
import ReactDOM from "react-dom";

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-secondary bg-gradient bg-opacity-25 rounded">
            <h1 className="display-4 ">Hello, world!</h1>
                <p>It uses utility classes for typography and spacing to space content out within the larger container. 
                    It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
        </div>
    )
}

export default Jumbotron;