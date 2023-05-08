import React from "react";
import '../Styles/Card.css';

function Card({digimon}) {

    return(
        <div className="cardBody">
            <h2>{digimon.name}</h2>
            <img src={digimon.img} />
            <h3>{digimon.level}</h3>
            <a href={`https://digimon.net/reference_en/detail.php?directory_name=` + `${digimon.name}`.toLowerCase()} target="_blank" rel="Open in a new window">Read More...</a>
        </div>
    )
};

export default Card;