import React from "react";
import "./contain.css";

function Shapes() {
    // const styles = {
    //     fill:"blue",
    //     stroke:"pink",
    //     strokeWidth:5,
    //     fillOpacity:0.1,
    //     strokeOpacity:0.9
    // }
    return(
        <div className="container">
            <svg width="100" height="100">
                <line x1="0" y1="0" x2="200" y2="200"
                stroke="yellow" strokeWidth="4" fill="yellow"/>
                <text x="0" y="90" fill="white"> 
                Line
                </text>
                Sorry, your browser does not support inline SVG
            </svg>
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40"
                stroke="green" strokeWidth="4" fill="yellow"/>
                <text x="0" y="100" fill="white"> 
                Circle
                </text>
                Sorry, your browser does not support inline SVG
            </svg>
            <svg width="100" height="100">
                <rect width="90" height="75"
                   x="5" y="12"
                stroke="green" strokeWidth="4" fill="yellow"/>
                <text x="0" y="100" fill="white"> 
                Rectangle
                </text>
                Sorry, your browser does not support inline SVG
            </svg>
          {/* <div className="rectangle" id="grid-item">
            <svg width="40" height="20">
                <rect x="50" y="20"
                    width="50" height="30"
                    style= {styles}
                />
            </svg> 
          </div>
          <div className="circle" id="grid-item">
            <svg height="200" width= "100">
                <circle cx="50" cy="050" r="90"
                style= {styles} />
            </svg>
          </div>
          <div className="triangle" id="grid-item">
            <svg height="200" width= "100">
                <polygon points="25, 60, 100, 200, 200, 200"
                style= {styles} />
            </svg>
            </div> */}
        </div>
        
    )
}

export default Shapes;