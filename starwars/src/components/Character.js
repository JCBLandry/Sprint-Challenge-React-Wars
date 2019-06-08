import React from 'react';
import './StarWars.css';

const character = props => {
   return (
       <div className = 'characterCard'>
           <h1>{props.character.name}</h1>
           <div className = 'details'>
               <div>Hair Color: {props.character.hair_color}</div>
               <div>Skin Color: {props.character.skin_color}</div>
               <div>Gender: {props.character.gender}</div>
               <div>Birthday: {props.character.birth_year}</div>

           </div>
       </div>
   )
}


export default character; 