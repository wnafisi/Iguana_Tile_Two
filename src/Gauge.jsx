import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Gauge extends Component{
    constructor(props) {
        super(props)
        this.state={
            greenTop: this.props.top,
            greenLeft: this.props.left,
            movesArray: [],
            newTrackers: []
        }
    }

    showNewGreen(){
        const movesArray = this.state.movesArray;
       movesArray.map(function(move, index) {
           console.log(move.top, move.left)
           const newGreen = React.createElement('div', {key: index}, {style: {width: "10px", 
                                                height: "10px", 
                                                margin: move.top+"px "+"0px "+"0px "+move.left+"px",
                                                position: 'absolute',
                                                backgroundColor: "blue"}
                                })
            console.log(newGreen)
            return( newGreen )
       })
        
    }

     

    // showNewGreen(){
    //     const newGreen = React.createElement('div', {style: {width: "10px", 
    //                                         height: "10px", 
    //                                         margin: this.props.top+"px "+"0px "+"0px "+this.props.left+"px",
    //                                         position: 'absolute',
    //                                         backgroundColor: "blue"}
    //                     })
    //     return(newGreen)
    // }

    movesTracker(){
        if(this.props.newMove > 0) {
            this.state.movesArray.push({'top':this.props.top, 'left':this.props.left})
        }  

    }


    render(){
        return(
            <div>
                <div className="gauge">
                    {this.movesTracker()}
                    {this.showNewGreen()}
                        <div className="tracker">
                        </div>
                </div>
                <div className="gauge2">
                </div>
            </div>
        )
    }
}

export default Gauge;