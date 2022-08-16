import React from 'react'
import './Footer.css'
import Typewriter from "typewriter-effect";
import {FaTelegramPlane} from 'react-icons/fa'
import {IoLogoInstagram} from 'react-icons/io'
import {FiTwitter} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
export default function Footer() {
  return (
    <footer className='py-4'>
      <Typewriter
  className='typerwiter'
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("کلیه حقوق برای  موبو ویژن محفوظ است.")

    
  .pauseFor(1000)
  .deleteAll()
  .typeString("کلیه حقوق برای  موبو ویژن محفوظ است.")

  .pauseFor(1000)
  .deleteAll()
  .typeString("کلیه حقوق برای  موبو ویژن محفوظ است.")

  .pauseFor(1000)
  .deleteAll()
  .typeString("کلیه حقوق برای  موبو ویژن محفوظ است.")

  .pauseFor(1000)
  .deleteAll()
  .typeString("کلیه حقوق برای  موبو ویژن محفوظ است.")

  .pauseFor(1000)
  .deleteAll()
  .typeString("کلیه حقوق برای  موبو ویژن محفوظ است.")

  .pauseFor(1000)
  .deleteAll()
  .typeString("کلیه حقوق برای  موبو ویژن محفوظ است.")

  .pauseFor(1000)

  .start();
  }}
  />             

<div className="div-icons-footer">
  <a href="#"><FaTelegramPlane className='icon-footer mx-2'/></a>
<a href="#"><IoLogoInstagram className='icon-footer'/></a>


</div>
<div className="div-icons-footer-2">
  <a href="#"><BsGithub className='icon-footer mx-2'/></a>
  <a href="#"><FiTwitter className='icon-footer'/></a>


</div>
    </footer>
  )
}
