import React from 'react';
import './equipaments.css'
import {Backpack} from '@styled-icons/boxicons-solid/Backpack'
import {Sword} from '@styled-icons/remix-fill/Sword'

export default function Equipaments() {
 return (
   <div class="equipaments">
       <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card">Cobre</span>
                    <span >0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Prata</span>
                    <span >0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Electro</span>
                    <span >0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Ouro</span>
                    <span >0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Platina</span>
                    <span >0</span>
               </div>
           </div>
       </div>
       <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                 <div class="backpack">
                 <Backpack size={30} color="purple"/> <span>Equipamentos</span>
                 </div>
               </div>
               <div className="card-main">
                    <span className="header-card">Capacidade de carga</span>
                    <span>75,0kg</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Carga atual</span>
                    <span >0 kg</span>
               </div>
           </div>
       </div>
       <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                 <div class="backpack">
                 <Sword size={30} color="purple"/> <span>Lança longa</span>
                 </div>
               </div>
               <div className="card-main">
                    <span className="header-card"> Dano</span>
                    <span>1d6</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Tipo</span>
                    <span >Perfurante</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Quantidade</span>
                    <span >1</span>
               </div>
           </div>
       </div>
   
   </div>
 );
}