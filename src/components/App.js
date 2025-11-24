// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
//         this.state.renderBall = !(this.state.renderBall);
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }

// export default App;

import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [started, setStarted] = useState(false);
  const [left, setLeft] = useState(0); // ball position

  useEffect(() => {
    function handleKey(e) {
      if (e.keyCode === 39) {
        setLeft(l => l + 5);
      }
    }

    if (started) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [started]);

  return (
    <div className="playground">
      {!started ? (
        <button className="start" onClick={() => setStarted(true)}>
          Start
        </button>
      ) : (
        <div
          className="ball"
          style={{
            position: "relative",
            left: `${left}px`
          }}
        ></div>
      )}
    </div>
  );
};

export default App;

