import React, { useState } from "react";
import '../Styles/Main.css';
import Card from '../Components/Card';

function Main({data}) {
    const [query, setQuery] = useState("");
    console.log(query);

    return(
        <div className="mainSection">
            <h2 className="subtitle">Digimon List!</h2>
            <input type="text" placeholder="Search by name..." className="searchBar" onChange={e => setQuery(e.target.value)} />
            <div className="cardSection">
                {
                    data.filter((digimonster) => digimonster.name.toLowerCase().includes(query)).map((digimon, id) => {
                        return(
                            <Card key={id} digimon={digimon}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main;