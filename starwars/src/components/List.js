import React from 'react';
import Character from './Character';

const List = props => {
   return (
       <div className = 'List'>
           {props.characters.map(char => (
               <Character
                   character = {char}
                   key = {char.created}
               />
           ))}
       </div> 
   )
}


export default List; 