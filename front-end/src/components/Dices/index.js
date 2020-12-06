import React from 'react';
import './dices.css'
import {DiceD20} from '@styled-icons/fa-solid/DiceD20'
import {Dungeon} from '@styled-icons/fa-solid/Dungeon'
import {TreasureMap} from '@styled-icons/remix-fill/TreasureMap'
import {Dragon} from '@styled-icons/fa-solid/Dragon'
import Dungeons from '../Dices_content/Dungeons';

export default function Dices() {
 return (
   <div className="dices">
        <div className="magic-card">
            <span> <DiceD20 size={25} color="purple"/> Dices </span> 
            <span> <Dungeon size={25} color="purple"/> Dungeons </span>
            <span><TreasureMap size={25} color="purple"/> Maps </span>
            <span><Dragon size={25} color="purple"/> Mobs </span>
       </div>

        <Dungeons/>
   </div>
 );
}