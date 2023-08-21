import React from "react";

function App(){
    let currTime = new Date().getHours();
    let greeting = '';

    const cssStyle= {};


    if(currTime>0 && currTime<12){
        greeting = 'Good Morning';
        cssStyle.color='green';
    }
    else if(currTime>=12 && currTime<=19){
      greeting = 'Good Afternoon'
      cssStyle.color='Orange';
    }
    else{
      greeting = 'Good Night'
      cssStyle.color='Black';
    }

    return (
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    );
}

export default App;
