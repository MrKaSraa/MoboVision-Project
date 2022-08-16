import React from 'react'
import './Header.css'
import { useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import {IoMdNotifications} from 'react-icons/io'
import {MdLanguage} from 'react-icons/md'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiFillSetting} from 'react-icons/ai'
import {FaMobileAlt} from 'react-icons/fa'
import {MdAttachMoney} from 'react-icons/md'
import {ImManWoman} from 'react-icons/im'
import {CgLogIn} from 'react-icons/cg'
import {TbSend} from 'react-icons/tb'
import {GoReport} from 'react-icons/go'
import { Link } from 'react-router-dom';
export default function Header() {
   const [show, setShow] = useState(false); 



  
   return (
  <header>
   <p className='brand-header'>موبو ویژن</p>
    <div className="icons-header-div">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcyXXN-sROO3JRprYEylY29JxvO74o8gjwQ&usqp=CAU" className='img-header' alt="" />
      <div className="icons-header">
        <AiFillSetting onClick={()=>setShow(true)} className='icon-header' />
        
      </div>
     
      <div className="icons-header">
      <Link style={{color:'black'}} to='/Register'><CgLogIn className='icon-header' /></Link> 
        
      </div>
       <div className="icons-header">
       <Link style={{color:'black'}} to='/Notif'><IoMdNotifications className='icon-header' /></Link> 
        <span className='badgee'>0</span>
      </div>
    </div>
     
    

 


     <Offcanvas   className='Offcanvas   'placement='end' show={show} >
        <Offcanvas.Header className='offcanvas-header'>
         <AiOutlineCloseCircle className='icon-header mt-1' onClick={()=>setShow(false)} />
          <Offcanvas.Title className='OffcanvasTitle '> منو</Offcanvas.Title> 
          
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className="offcanvas-body">

            <div className="div-icons-offcanvas">
              <p className='mt-1 mb-1'>داشبورد</p>
              <div className="icon-offcanvas my-3" >
                <FaMobileAlt className='icons-offcanvas' />
                <Link to='/' onClick={ ()=> setShow(false)} className='link-off'>صفحه اصلی</Link>
              </div>
              <div className="icon-offcanvas my-3" >
                <MdLanguage className='icons-offcanvas' />
                <Link to='/Dashboard' onClick={ ()=> setShow(false)} className='link-off'>داشبورد ادمین</Link>
              </div>
             
              <div className="icon-offcanvas my-3" >
                <MdAttachMoney className='icons-offcanvas' />
                <Link to='/Users' onClick={ ()=> setShow(false)} className='link-off'> خریداران</Link>
              </div>
              <hr />
              <p  className='my-3 '>دسترسی سریع</p>

              <div className="icon-offcanvas my-3" >
                <ImManWoman className='icons-offcanvas' />
                <Link to='/Notif' onClick={ ()=> setShow(false)} className='link-off'> اعلان ها</Link>
              </div>
              <div className="icon-offcanvas my-3" >
                <CgLogIn className='icons-offcanvas' />
                <Link to='/Register' onClick={ ()=> setShow(false)} className='link-off'> ورود / ثبت نام</Link>
              </div>
              <div className="icon-offcanvas my-3" >
                <TbSend className='icons-offcanvas' />
                <Link to='/Emailbox' onClick={ ()=> setShow(false)} className='link-off'> ارتباط با ما</Link>
              </div>
              <hr />
              <div className="icon-offcanvas mt-5" >
                <GoReport className='icons-offcanvas' />
                <Link to='/Complaint' onClick={ ()=> setShow(false)} className='link-off'> شکایات</Link>
              </div>
            </div>

         </div>
        </Offcanvas.Body>
      </Offcanvas>




   
  </header>
  )
}
