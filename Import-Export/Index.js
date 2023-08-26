
// learning export and import modules 
import React from 'react';
import ReactDOM from 'react-dom';
// import youtuber,{favprog,myName} from './App';
// we can also write the above thing in simple manner
import * as mehar from './App';

ReactDOM.render(
    <>
        <ol>
            <li> Mehar </li>
            <li> {mehar.favprog} </li>
            <li> {mehar.default} </li>
            <li> {mehar.myName()} </li>
        </ol>
    </>,
    document.getElementById("root")
)
