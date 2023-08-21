
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Mehar';
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://github.com/MeharMiddha/React-js/tree/main";

ReactDOM.render(
  <>
  <h1 contentEditable="true"> My Name Is {name} </h1>
  <img src={img1} alt='randomImages'/>
  <img src={img2} alt='randomImages'/>
  <a href={links} target='_githubProfile'>
  <img src={img3} alt='randomImages'/>
  </a>
  </>,
  document.getElementById("root")
);
