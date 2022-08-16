import React from 'react'
import './Phonepage.css'
import { useParams } from 'react-router-dom'
import phonedatapage from './phonedatapage.js'
import Introicons from '../components/Iconsintro';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import Textintro from '../components/Textintros'

import { EffectCube, Pagination } from "swiper";
export default function Phonepage() {

  
    let params= useParams()
   

    let mainphonedata = phonedatapage.find(phone => phone.id == params.phoneid)
    // let mainicondata = icondatas.find(icon => icon.id == params.phoneid)


    return (
  <div className="container">
    
    <div className="introduction">
      <div className="img-intro-div">
        <img src={mainphonedata.img_header} className='img-intro' alt="" />
      </div>
      <div className="text-intro">
      <p  className='p-first-intro'>{mainphonedata.text_header1}</p>
      <p>{mainphonedata.text_header2}</p>
      </div>
    </div>

<hr />

   <Introicons />

 


<hr className='mt-4'  data-aos="fade-up" />

    

<div  data-aos="fade-up">
  <div className="title-slider-phonepage">
    <h4>برخی تصاویر گوشی</h4>
  </div>
  
  <div className="slider-phone-page"  data-aos="fade-up">
      <Swiper
        effect={"cube"}
           rewind={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mainphonedata.sliderImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainphonedata.sliderImg2}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainphonedata.sliderImg3}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainphonedata.sliderImg4}  />
        </SwiperSlide>
      </Swiper>
  
      <Swiper
        effect={"cube"}
        rewind={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mainphonedata.sliderImg5}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainphonedata.sliderImg6}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainphonedata.sliderImg7}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainphonedata.sliderImg8}  />
        </SwiperSlide>
      </Swiper>
  </div>
 
</div>
     
  <Textintro/>


  </div>
  )
}
