import React from 'react';
import './dungeons.css'
import {Dice} from '@styled-icons/fa-solid/Dice'

export default function Dungeons() {
 return (
   <div className="dungeon">
       <div className="dungeon-title">
            Floresta Obscura
       </div>
        <div className="dungeon-img"></div>
        <div className="dungeon-desc">
            <span className="desc-title">Descrição</span>
            <p>
                Uma floresta negra, assutadora, com pouquissima iluminação, povoada principalmente por aqueles que vivem na escuridão e ou possuem visão noturna. Sons de coruja, passáros e estralos das arvores velhas fazem parte do ambiente. Este local possui uma escuridão profunda onde a luz do sol não surge efeito.
            </p>
        </div>
        <div className="random-btn">
           <Dice size={30} color="purple"/> <span >Sortear</span>
        </div>
   </div>
 );
}