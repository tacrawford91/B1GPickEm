import React from 'react'; 


const GameBoard = (props) => (
    <div className="container">   
        <div className="row">
          <div className="col-md-offset-1 col-lg-offset-1"></div>
           {props.children}
          <div className="col-md-offset-1 col-lg-offset-1"></div>
        </div>
      </div>
)

export default GameBoard;
