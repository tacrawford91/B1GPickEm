import React from 'react';

const Card = (props) => {
    return (
        //use onClick function to call parent method and then pass through the id of the clicked item for funtion
    <a className="cardLink" onClick={() => props.checkSchool(props.id)}>    
        <div className="col-md-3 col-lg-3 schoolCard text-center">
            <img className="cardImg" src={props.image} alt={props.name} key={props.id}/>
        </div>
    </a>
    )
};

export default Card;
