import React from 'react';
import './App.css';


function Tile(props) {
    return(
            <img 
                onClick={()=>props.handleClick(props.tileValue, props.randomValue)}
                key={props.tileValue}
                src= {"/images/" + props.tileValue + ".png"} 
            />
    )
}


export default Tile;