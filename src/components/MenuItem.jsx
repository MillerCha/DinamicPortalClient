import { useState } from 'react'
import Courselogo from './../assets/Courselogo.svg'
import '../Css/MenuItem.css'

export default function MenuItem({item}) {

  return (
    <div className="container-menu-item" style={{backgroundColor:item.color}}>
        <div className="circle">
            <img src={item.src} alt={item.text} className="animatedImage" />
            <p className="text">{item.text}</p>
        </div>
    </div>
);
}


