import React from 'react';
import Tile from './Tile';
import './App.css';

function Board(props){
    return(
        <div>{
            props.tileValues.map(tileValue => {
                return(
                    <Tile 
                        key={tileValue}
                        tileValue = { tileValue }
                        handleClick={props.handleClick}
                    />
                    )
                })
            }
        </div>
    )
}

export default Board;