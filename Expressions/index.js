import React from 'react';
import ReactDOM from 'react-dom';

const flname = "Mehar Middha";

ReactDOM.render(
  <>
    <h1> my name is {flname} </h1>
    <p> my lucky number is 2+3 </p>
    <p>my lucky number is {2+3} </p>
    <p>my lucky number is {2-3} </p>
    <p>my lucky number is {2*3} </p>
    <p>my lucky number is {2/3} </p>
    <p>my lucky number is {2%3} </p>
  </>,
  document.getElementById("root")
);
