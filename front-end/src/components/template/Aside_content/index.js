import React from 'react';
import Header from '../Header';
import './aside-content.css'

export default function Aside_content() {
 return (
   <div className="aside-content-container">
       <Header/>
       <div className="options">
           <div className="card" id="magic">
               <div className="black">
                  Magia
               </div>
           </div>
           <div className="card" id="status">
              <div className="black">
                  Status
               </div>
           </div>
           <div className="card" id="equipaments">
              <div className="black" >
                 Equipamentos
              </div>
           </div>
       </div>
       <div className="options-2">
           <div className="card" id="especialization">
              <div className="black" >
                  Especialização
               </div>
           </div>
           <div className="card" id="characteristics">
              <div className="black">
                  Caracteristicas
               </div>
           </div>
           <div className="card" id="dices">
              <div className="black">
                  Dados
               </div>
           </div>
       </div>
   </div>
 );
}