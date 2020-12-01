import React from 'react';
import {User} from '@styled-icons/boxicons-solid/User'
import {HeartAdd} from '@styled-icons/remix-fill/HeartAdd'
import {Fire} from '@styled-icons/remix-fill/Fire'
import './status.css'

export default function Status() {
 return (
   <div className="status-container">
     <div class="status-main">
        <div className="magic-card">
            Nome do personagem <User size={30} color="purple"/>
       </div>
       <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card">Raça</span>
                    <span>Elfo</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Classe</span>
                    <span>Mago</span>
               </div>
               <div className="card-main">
                    <span className="header-card">XP</span>
                    <span >0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Tendência</span>
                    <span >Neutro</span>
               </div>
           </div>
       </div>
       <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card" id="life-pts-container">Pontos de vida</span>
                    <span className="life"><Fire size={40} color="purple"/> <span className="life-pts">10/10</span> <HeartAdd size={40} color="purple"/></span> 
               </div>
           </div>
       </div>
       <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card">Inspiração</span>
                    <span>
                        <input type="checkbox"/>
                    </span>
               </div>
               <div className="card-main">
                    <span className="header-card">Proficiência</span>
                    <span>0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Armadura</span>
                    <span >10</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Iniciativa</span>
                    <span >0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Deslocamento</span>
                    <span >9.0m</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Percepção passiva</span>
                    <span >0</span>
               </div>
           </div>
       </div>
       </div>
       <div className="skills">
       <div className="magic-card-header" id="small">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card" id="bg">Força</span>
                    <span className="life-pts">10</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Modificador</span>
                    <span>
                        0
                    </span>
               </div>
           </div>
       </div>
       <div className="magic-card-header" id="small">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card" id="bg">Destreza</span>
                    <span className="life-pts">10</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Modificador</span>
                    <span>
                        0
                    </span>
               </div>
           </div>
       </div>
       <div className="magic-card-header" id="small">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card" id="bg">Constiuição</span>
                    <span className="life-pts">10</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Modificador</span>
                    <span>
                        0
                    </span>
               </div>
           </div>
       </div>
       <div className="magic-card-header" id="small">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card" id="bg">Inteligência</span>
                    <span className="life-pts">10</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Modificador</span>
                    <span>
                        0
                    </span>
               </div>
           </div>
       </div>
       <div className="magic-card-header" id="small">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card" id="bg">Sabedoria</span>
                    <span className="life-pts">10</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Modificador</span>
                    <span>
                        0
                    </span>
               </div>
           </div>
       </div>
       <div className="magic-card-header" id="small">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card" id="bg">Carisma</span>
                    <span className="life-pts">10</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Modificador</span>
                    <span>
                        0
                    </span>
               </div>
           </div>
       </div>
       </div>
      
   </div>
 );
}