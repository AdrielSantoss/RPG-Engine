import React from 'react';
import './magic.css'
import {Fire} from '@styled-icons/icomoon/Fire'

export default function Magic() {
 return (
   <div className="magic-container">
       <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card">Habilidade Chave</span>
                    <span>Habilidade chave</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Classe de dificuldade</span>
                    <span>0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Bônus de ataque</span>
                    <span >0</span>
               </div>
           </div>
       </div>
       <div className="magic-card">
            Truque 
       </div>
       <div className="magic-card">
             Nível 1 <Fire size={30} color="purple"/> 
       </div>
       <div className="magic-card">
             Nível 2 <Fire size={30} color="purple"/>
       </div>
       <div className="magic-card">
             Nível 3 <Fire size={30} color="purple"/>
       </div>
       <div className="magic-card">
             Nível 4 <Fire size={30} color="purple"/>
       </div>
       <div className="magic-card">
             Nível 5 <Fire size={30} color="purple"/>
       </div>
       <div className="magic-card">
             Nível 6 <Fire size={30} color="purple"/>
       </div>
       <div className="magic-card">
             Nível 7 <Fire size={30} color="purple"/>
       </div>
       <div className="magic-card">
             Nível 8 <Fire size={30} color="purple"/>
       </div>
       <div className="magic-card">
             Nível 9 <Fire size={30} color="purple"/>
       </div>
   </div>
 );
}