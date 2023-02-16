import React from 'react'
import "./Journey.css"
import blog from "../../assets/blog.jpg"
import blog1 from "../../assets/home7.jpg"
import blog2 from "../../assets/home9.jpg"
import home1 from "../../assets/home1.jpg"
import home2 from "../../assets/home2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import "swiper/css/autoplay";

const Journey = () => {
  return (
    <div className='j-container'>
        <h3>Read Our Journey</h3>
        <p className='sub'>Donec tempus risus sit amet aliquet iaculis. Integer ut pharetra lacinia</p>
        <div className='j-card'>
            <div className='j-slider'>
                <Swiper
                    freeMode={true}
                    modules={[FreeMode]}
                    breakpoints ={{
                        0:{
                            slidesPerView:1,
                            spaceBetween:20
                        },
                        480:{
                            slidesPerView:1,
                            spaceBetween:20
                        },
                        768:{
                            slidesPerView:2,
                            spaceBetween:20
                        },
                        940:{
                            slidesPerView:3,
                            spaceBetween:20
                        }
                    }}
                    >
                    <SwiperSlide className='jcard'>
                        <img src={blog} alt=""/>
                        <h2>architecture student tool kit</h2>
                        <p>aliquet iaculis. Integer ut pharetra lac
                            inia aliquet iaculis. Integer ut pharetra laciniaaliquet
                            iaculis. Integer ut pharetra lacinia </p>
                        <p>read more</p>
                    </SwiperSlide>
                    <SwiperSlide  className='jcard'>
                        <img src={blog1} alt=""/>
                        <h2>style over substance</h2>
                        <p>aliquet iaculis. Integer ut pharetra lac
                            inia aliquet iaculis. Integer ut pharetra laciniaaliquet
                            iaculis. Integer ut pharetra lacinia </p>
                        <p>read more</p>
                    </SwiperSlide>
                    <SwiperSlide  className='jcard'>
                        <img src={blog2} alt=""/>
                        <h2>culture of design</h2>
                        <p>aliquet iaculis. Integer ut pharetra lac
                            inia aliquet iaculis. Integer ut pharetra laciniaaliquet
                            iaculis. Integer ut pharetra lacinia </p>
                        <p>read more</p>
                    </SwiperSlide>
                    <SwiperSlide className='jcard'>
                        <img src={home1} alt=""/>
                        <h2>architecture student tool kit</h2>
                        <p>aliquet iaculis. Integer ut pharetra lac
                            inia aliquet iaculis. Integer ut pharetra laciniaaliquet
                            iaculis. Integer ut pharetra lacinia </p>
                        <p>read more</p>
                    </SwiperSlide>
                    <SwiperSlide className='jcard'>
                        <img src={home2} alt=""/>
                        <h2>architecture student tool kit</h2>
                        <p>aliquet iaculis. Integer ut pharetra lac
                            inia aliquet iaculis. Integer ut pharetra laciniaaliquet
                            iaculis. Integer ut pharetra lacinia </p>
                        <p>read more</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Journey
