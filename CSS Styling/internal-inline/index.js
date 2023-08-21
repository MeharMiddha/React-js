
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name = 'Mehar';
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://github.com/MeharMiddha/React-js/tree/main";

const heading = {
  color : "#fa9191",
  textTransform : "capitalize", // in React we dont have to use kebab case we have to use camelcase 
  textAlign : 'center',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '70px 0',
  fontFamily: "'Poppins', sans-serif"
}

ReactDOM.render(
  <>
  <h1 className="heading" style={heading}> My Name Is {name} </h1>
  <div className='img_div'>
    <img src={img1} alt='randomImages'/>
    <img src={img2} alt='randomImages'/>
    <a href={links} target='_githubProfile'>
    <img src={img3} alt='randomImages'/>
    </a>
  </div>
  </>,
  document.getElementById("root")
);
