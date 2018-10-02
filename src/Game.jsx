import React, { Component } from 'react';
import Board from './Board';
import WinnerPopUp from './WinnerPopUp';
import Gauge from "./Gauge";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state={
            tileValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            randomizedValues: [],
            clickedTile: [],
            isWinnner: false,
            greenTop: 530,
            greenLeft: 100,
            newMove: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(tileId){
        this.setState({ clickedTile: tileId, newMove: (this.state.newMove + 1) });
        this.basicCheck(tileId);
        this.checkForWinner();
    }
    //function that restricts which tiles can move depending on location of empty(zero) tile
    basicCheck(tileId) {
        const random = this.state.randomizedValues
        if (random[0] === 0) {
            const zeroTile = 0;
            const indexOne = 1;
            const indexTwo = 3;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        } else if (random[1] === 0) {
            const zeroTile = 1;
            const indexOne = 0;
            const indexTwo = 2;
            const indexThree = 4;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[2] === 0) {
            const zeroTile = 2;
            const indexOne = 1;
            const indexTwo = 5;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        } else if (random[3] === 0) {
            const zeroTile = 3;
            const indexOne = 0;
            const indexTwo = 4;
            const indexThree = 6;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[4] === 0) {
            const zeroTile = 4;
            const indexOne = 1;
            const indexTwo = 3;
            const indexThree = 5;
            const indexFour = 7;
            this.checkForFour(zeroTile, tileId, indexOne, indexTwo, indexThree, indexFour);
        } else if (random[5] === 0) {
            const zeroTile = 5;
            const indexOne = 2;
            const indexTwo = 4;
            const indexThree = 8;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[6] === 0) {
            const zeroTile = 6;
            const indexOne = 3;
            const indexTwo = 7;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        } else if (random[7] === 0) {
            const zeroTile = 7;
            const indexOne = 6;
            const indexTwo = 4;
            const indexThree = 8;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[8] === 0) {
            const zeroTile = 8;
            const indexOne = 5;
            const indexTwo = 7;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        }
    }
    //function that restricts which tiles can move depending on location of empty(zero) tile
    checkForTwo(zeroTile, tileId, indexOne, indexTwo){
        const random = this.state.randomizedValues
        const clickedTileIndex = random.indexOf(tileId);
        const zeroIndex = random.indexOf(0);
        if (zeroIndex === zeroTile && clickedTileIndex === indexOne) {
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexTwo){
            this.swapEmptyTileWithTileId(tileId)
        }
    }
    //function that restricts which tiles can move depending on location of empty(zero) tile
    checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree){
        const random = this.state.randomizedValues
        const clickedTileIndex = random.indexOf(tileId);
        const zeroIndex = random.indexOf(0);
        if (zeroIndex === zeroTile && clickedTileIndex === indexOne) {
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexTwo){
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexThree){
            this.swapEmptyTileWithTileId(tileId)
        }
    }
    //function that restricts which tiles can move depending on location of empty(zero) tile
    checkForFour(zeroTile, tileId, indexOne, indexTwo, indexThree, indexFour){
        const random = this.state.randomizedValues
        const clickedTileIndex = random.indexOf(tileId);
        const zeroIndex = random.indexOf(0);
        if (zeroIndex === zeroTile && clickedTileIndex === indexOne) {
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexTwo){
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexThree){
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexFour){
            this.swapEmptyTileWithTileId(tileId)
        }
    }

    swapEmptyTileWithTileId(tileId) {
        const random = this.state.randomizedValues
        const index = random.indexOf(tileId);
        const zero = random.indexOf(0);
        const imgTiles = document.querySelectorAll(".board img")
        const indexImg = imgTiles[index]
        const self = this

        indexImg.addEventListener('animationend', function() {
            self.removeClasses(tileId);
        });
        
        if (zero === 0 && index === 1 
            || zero === 1 && index === 2
            || zero === 3 && index === 4
            || zero === 4 && index === 5
            || zero === 6 && index === 7
            || zero === 7 && index === 8) {
            indexImg.className = "move-left";
            this.setState({greenLeft: (this.state.greenLeft -= 10) })
            console.log(indexImg)
        } else if (zero === 1 && index === 0 
            || zero === 2 && index === 1 
            || zero === 4 && index === 3
            || zero === 5 && index === 4
            || zero === 7 && index === 6
            || zero === 8 && index === 7) {
            indexImg.className = "move-right";
            this.setState({greenRight: (this.state.greenLeft += 10) })
            console.log(indexImg)
        } else if (zero === 0 && index === 3 
            || zero === 1 && index === 4 
            || zero === 2 && index === 5
            || zero === 3 && index === 6
            || zero === 4 && index === 7
            || zero === 5 && index === 8) {
            indexImg.className += "slideInUp";
            this.setState({greenTop: (this.state.greenTop -= 10) })
        } else if (zero === 6 && index === 3 
            || zero === 7 && index === 4 
            || zero === 8 && index === 5
            || zero === 3 && index === 0
            || zero === 4 && index === 1
            || zero === 5 && index === 2) {
            indexImg.className += "slideDown";
            this.setState({greenBottom: (this.state.greenTop += 10) })
        }
        if (index !== -1) {
            random[index] = 0;
        }
        if (zero !== -1) {
            random[zero] = tileId
        }
    }  
    //removes slide transition from tile once transition completes
    removeClasses(tileId) {
        const random = this.state.randomizedValues
        const index = random.indexOf(tileId);
        const imgTiles = document.querySelectorAll(".board img")
        const indexImg = imgTiles[index]
        indexImg.classList.remove("move-right")
        indexImg.classList.remove("move-left")
        indexImg.classList.remove("slideInUp")
        indexImg.classList.remove("slideDown")
    }
    //function that checks for winner
    checkForWinner(){
        const random = this.state.randomizedValues
        let score = 0;
        random.map(eachNum => {
            if (eachNum === random.indexOf(eachNum)) {
                score += 1;
                if (score === 9) {
                    this.setState({isWinnner: true})
                    console.log("winner")
                }
            } 
        })
    }
    //renders pop-up window for winner
    showWinner(){
        if(this.state.isWinnner===true) {
            return(
                <WinnerPopUp />
            )
        }
    }
    componentDidMount() {
        this.shuffleArray()
    }
    shuffleArray() {
        const newArr = [0, 5, 1, 8, 7, 6, 3, 4, 2]
        this.setState({ randomizedValues: newArr})
    }
    render() {
    return(
        <div>
            {this.showWinner()}
        <Gauge 
            top={this.state.greenTop}
            left={this.state.greenLeft}
            newMove={this.state.newMove}
            tileValues={this.state.randomizedValues}
        />
        <Board 
            tileValues={this.state.randomizedValues}
            handleClick={this.handleClick}
        />

        </div>
    )
    }
}

export default Game;