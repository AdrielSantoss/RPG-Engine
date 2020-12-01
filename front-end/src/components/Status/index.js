import React from 'react';
import {User} from '@styled-icons/boxicons-solid/User'
import {HeartAdd} from '@styled-icons/remix-fill/HeartAdd'
import {Fire} from '@styled-icons/remix-fill/Fire'
import {Dice} from '@styled-icons/fa-solid/Dice'
import {Run} from '@styled-icons/boxicons-regular/Run'
import {ShieldUser} from '@styled-icons/remix-line/ShieldUser'
import {Brain} from '@styled-icons/fa-solid/Brain'
import {Book} from '@styled-icons/icomoon/Book'
import {Happy} from '@styled-icons/boxicons-regular/Happy'
import {HandRock} from '@styled-icons/fa-solid/HandRock'
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
      <div className="skills-2">
      <div className="magic-card" id="skill-card-header">
            Força <HandRock size={30} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>ATLETISMO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>MUSCULAÇÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>LEVANTAMENTO DE PESO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>RESISTENCIA MUSCULAR</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card-header">
            Destreza <Run size={30} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>ACROBACIA</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>FURTIVIDADE</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>PRESTIDIGITAÇÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>INICIATIVA</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>LADINAGEM</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card-header">
            Constituição <ShieldUser size={30} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>FORTITUDE</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>FOLEGO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>ENERGIA CORPORAL</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card-header">
            Inteligência <Brain size={30} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>ARCANISMO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>HISTÓRIA</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>INVESTIGAÇÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>NATUREZA</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>RELIGIÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card-header">
            Sabedoria <Book size={30} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>INTUIÇÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>LIDAR COM ANIMAIS</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>MEDICINA</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>PERCEPÇÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>SOBREVIÊNCIA</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card-header">
            Carisma <Happy size={30} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>ATUAÇÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>BLEFAR</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>INTIMIDAÇÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
       <div className="magic-card" id="skill-card-last"> 
          <div className="skill-itens">
              <input type="checkbox"/> <span className="skill-value">0</span> <span>PERSUASÃO</span>
          </div>
          <Dice size={20} color="purple"/>
       </div>
      </div>  
   </div>
 );
}