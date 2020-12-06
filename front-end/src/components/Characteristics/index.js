import React from 'react';
import './characteristics.css'
import {CameraSwitch} from '@styled-icons/remix-fill/CameraSwitch'

export default function Characteristics() {
 return (
   <div className="characteristics">
        <div className="photo">
            <div className="photo-opts">
                <CameraSwitch size={40} color="black"/>
            </div>
            
            <div className="magic-card-header">
            <div className="content-card">
               <div className="card-main">
                    <span className="header-card">Idade</span>
                    <span>Elfo</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Altura</span>
                    <span>Mago</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Peso</span>
                    <span >0</span>
               </div>
               <div className="card-main">
                    <span className="header-card">Tendência</span>
                    <span >Neutro</span>
               </div>
           </div>
       </div>

        </div>
   </div>
 );
}