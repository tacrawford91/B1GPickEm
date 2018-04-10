import React from "react";



// class MainHeader extends Component {

//     state = {
//         score: 0,
//         topScore: 0,
//         gameMessage: "Click an Image to begin!"
//     }


//    render() {
//        return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <p className="navbar-brand">B1GPickEm</p>
//             <div className="navbar-nav">
//             <p className="nav-item nav-link gameMessage">Game Message: {this.state.gameMessage}<span className="sr-only">(current)</span></p>
//             <p className="nav-item nav-link Score">Score:{this.state.score}</p>
//             <p className="nav-item nav-link topScore">Top Score: {this.state.topScore}</p>
//             </div>
//         </nav>   
//        )
//    };
// };


const MainHeader = (props) => {
    return (
    <nav className="navbar bg-light">
        <h1 className="navbar-brand">B1G<span className="black">PickEm</span></h1>
        <p className="instructions"> Try your best to click each image only once! If an image is selected twice, the game will reset and you must start at zero.</p>
        <div className="scoreDiv">
            <p className="headerp Score"><strong>Score:</strong> {props.score}</p>
            <p className="headerp topScore"><strong>Top Score:</strong> {props.topScore}</p>
            <div className="messageDiv text-center">
            <p className="headerp gameMessage">{props.gameMessage}</p>
            </div>
        </div>
    </nav> 
    )
};

  
export default MainHeader;
