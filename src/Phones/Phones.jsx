import React, { useState, useRef, useEffect } from 'react'

import { Link } from 'react-router-dom';
import {AiFillApple} from 'react-icons/ai'
import Offtimer from './Offtimer'
import {SiSamsung}from 'react-icons/si'
import { Swiper, SwiperSlide } from "swiper/react";
import Cardd from './Cardd'
import "swiper/css";
import "swiper/css/pagination";
import Swipercard from './components/Swipercard'
import './Phones.css'
import { Pagination } from "swiper";
import { swiperdata } from './Phonepage/phonedata';
import { samsungdata } from './Phonepage/phonedata';
import {appledata} from './Phonepage/phonedata'
export default function Phones() {
  const [samsungdatas, setsamsungdata] = useState(samsungdata)
  const [applecard, setapplecard] = useState(appledata)
  const [swiperdatas, setswiperdata] = useState(swiperdata)


  const scrolltoup= ()=>{
    window.scrollTo(0,0)
  }
  return (
<>
<div className="header-phone">
  <div className="img-header-phone">
      <img src="images/undraw_Home_screen_re_640d-removebg-preview.png" width={300} alt="" />
  </div>

  <div className="text-header mt-3">
    <p className='p1-text-header'>قصد خرید گوشی داری؟</p>
<p className='mt-3'>با بودجه و امکانات مورد نیازت، ما بهترین گوشی ها رو بهت پیشنهاد میدیم.</p>
<p className='btn btn-header mt-3  '  >با ما همراه باشید</p>
  </div>

</div>

<div className="card-titles"  data-aos="fade-up">

  <class className="timer">
    <Offtimer className='' />
  </class>
<p className='pt-3 p-card-title'>  محصولات <span className='span-shadow'>تخفیف</span> خورده</p>

</div>
 <hr />
 

    <Swiper
       
        breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween:20,
          },
          768:{
            slidesPerView:3,
            spaceBetween:20,
          },
          1024:{
            slidesPerView:4,
            spaceBetween:20,
          }
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Swipercard {...swiperdatas[0]} />
    </SwiperSlide>


        <SwiperSlide>
        <Swipercard {...swiperdatas[1]} />
    </SwiperSlide>
    <SwiperSlide>
    <Swipercard {...swiperdatas[2]} />
    </SwiperSlide>
    <SwiperSlide>
    <Swipercard {...swiperdatas[3]} />
    </SwiperSlide>

    <SwiperSlide>
    <Swipercard {...swiperdatas[4]} />
    </SwiperSlide>
    <SwiperSlide>
    <Swipercard {...swiperdatas[5]} />
    </SwiperSlide>
        
      </Swiper>
   
        
<div className="card-titles card-title-iphone"  data-aos="fade-up">

<class className="icons-div">
  <AiFillApple className='apple-title-icon ' />
</class>
<p className='pt-3 p-card-title'>  آخرین <span className='span-shadow'>محصولات</span> آیفون</p>

</div>
<hr />
      <div className='cards my-5'  data-aos="fade-up">
        
    { applecard.map( apple =>(
      <Cardd key={apple.id} {...apple}/>
    )) }
      
      
        
      
      
          </div> 

     


          <div className="card-titles card-title-iphone"  data-aos="fade-up">

<class className="icons-div-samsung">
  <SiSamsung className='samsung-title-icon ' />
</class>
<p className='pt-3 p-card-title'>  آخرین <span className='span-shadow'>محصولات</span> سامسونگ</p>

</div>
<hr />
      <div className='cards my-5'  data-aos="fade-up">
        

      {samsungdatas.map(samsung=>(
        <Cardd key={samsung.id} {...samsung} />
      ))}
      
      
      
          </div> 


          <div className="footer-phone"  data-aos="fade-up">
            <div className="text-footer-phone">
               <p className='p1-text-footer-phone'>درباره موبو ویژن</p>
            <p className='p2-text-footer-phone'>، اگه قصد خرید گوشی دارید ما توی موبو ویژن   گوشی‌ های مختلف رو بررسی میکنیم<br/> .که میتونه راهنمای خرید گوشی خوبی براتون باشه</p>
            </div>
           <div className="buttons-footer">
            <div className="button-footer">
                <button onClick={scrolltoup} className='btn btn-outline-light mx-2'>رفتن به بالای صفحه</button>
                <Link to='/Dashboard' className='btn btn-outline-light mx-2'>داشبورد ادمین</Link>
            </div>
            <div className="textfooter2 my-4">
              <p>با ما بروز باشید</p>
            </div>
            <div className="textfooter3">
              <p >0933-246-4029</p>
              <p>0904-641-7084</p>
            </div>
           </div>
          </div>
  </>
  )

        }


















