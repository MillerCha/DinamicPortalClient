import { useState } from 'react'
import Courselogo from './../assets/Courselogo.svg'
import MenuItem from './MenuItem';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function DinamicMenu() {


let Items = [
    {text:'חוגים',src:Courselogo,color:'#004b93cc',path:'courses'},
    {text:'תרבות',src:Courselogo,color:'#c76857cc',path:'culture'},
    {text:'גמלאים',src:Courselogo,color:'#e5ad4bcc',path:'pensioners'},
    {text:'גיל הרך',src:Courselogo,color:'#61994dcc',path:'home'},
    {text:'פעילויות',src:Courselogo,color:'pink',path:'home'}];

  return (
   <div className='dinamic-menu' style={{display:'flex'}}>
    {Items.map((i,index )=> {
       return <div key={index}>
        <Link to={i.path}>
        <MenuItem item={i}/>
        </Link>
         </div> 
    })}
    </div>
    
);
}


