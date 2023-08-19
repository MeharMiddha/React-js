import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    // we used react fragment instead of div because it does not create a div inside root div
    // it directly appends the element in root div
    <React.Fragment>
        <h1> Mehar Middha </h1>
        <p> Chitkara University </p>
        <h2> Btech </h2>
    </React.Fragment>,


    // we can also do this it will give the same output as react fragment
    // <>
    //     <h1> Mehar Middha </h1>
    //     <p> Chitkara University </p>
    //     <h2> Btech </h2>
    // </>,
    document.getElementById("root")
);
