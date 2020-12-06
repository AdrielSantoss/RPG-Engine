import React from 'react';
import './specialization.css'
import {Dragon} from '@styled-icons/fa-solid/Dragon'
import {ShieldShaded} from '@styled-icons/bootstrap/ShieldShaded'
import {HandCoin} from '@styled-icons/remix-fill/HandCoin'
import {Language} from '@styled-icons/material-sharp/Language'
import {Sword} from '@styled-icons/remix-line/Sword'
import {UserShield} from '@styled-icons/fa-solid/UserShield'
import {Tools} from '@styled-icons/entypo/Tools'
import {AddCircle} from '@styled-icons/ionicons-solid/AddCircle'

export default function Specialization() {
 return (
   <div className="specialization">
        <div className="magic-card">
             Raça <Dragon size={30} color="purple"/>
       </div>
        <div className="magic-card">
             Classe <ShieldShaded size={30} color="purple"/>
       </div>
        <div className="magic-card">
             Talentos <HandCoin size={30} color="purple"/>
       </div>
        <div className="magic-card">
             Idiomas <Language size={30} color="purple"/>
       </div>
        <div className="magic-card">
             Proficiências em armas <Sword size={30} color="purple"/>
       </div>
        <div className="magic-card">
             Proficiências em armaduras <UserShield size={30} color="purple"/>
       </div>
        <div className="magic-card">
             Proficiências em ferramentas <Tools size={30} color="purple"/>
       </div>
        <div className="magic-card">
             Habilidades e caracteristicas extras <AddCircle size={30} color="purple"/>
       </div>
   </div>
 );
}