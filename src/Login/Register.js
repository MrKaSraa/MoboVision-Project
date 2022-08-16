import React from 'react'
import './Login.css'
import {CgLogIn} from 'react-icons/cg'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='login-bg'>
    <br/>
     <form className='formLogin' action="#">
  <div className="login-title">
  <h4 className='mx-2 register-title'>ساخت اکانت</h4>
  <CgLogIn className='icon-login' />
 </div>
  <input placeholder='نام کاربری' className='inputform' type="text" name="" id="" />
  <input placeholder='رمز عبور' className='inputform' type="text" name="" id="" />
  <input placeholder='ایمیل' className='inputform' type="email" name="" id="" />
  <button className='btn btn-log  mt-3'>ورود</button>

  <div className="p-footer-login ">
      <p>اکانت دارید؟</p>
      <Link to='/Login' className='text-footer-login   px-1'>ورود </Link>
  </div>

 </form>

 <div className="warning-login">
  <p className='p1-warning-footer'> کاربر محترم:</p>
  <p>لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید.</p>
  <p>ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.</p>
  <p>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.</p>
 </div>
 <br/>
  </div>
  )
}
