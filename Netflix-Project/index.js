import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from './Sdata';

function ncard(val) {
  return(
    <Card imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )
}

ReactDOM.render(
  <>

    <h1 className='headingStyle'> List of top 6 Netflix Series in 2023 </h1>
    {Sdata.map(ncard)}

  </>,
  document.getElementById("root")
);
