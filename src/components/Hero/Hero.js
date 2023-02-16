import React from 'react'
import "./Hero.css"
import box from "../../assets/box.svg"
import box2 from "../../assets/layers-1.svg"
import box3 from "../../assets/layout2.svg"
import hero2 from "../../assets/blog.jpg"
import hero from "../../assets/6.jpg"
import hero3 from "../../assets/3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination ,Navigation,Scrollbar} from 'swiper';
import 'swiper/css';
import "swiper/css/autoplay";

const Hero = () => {

  return (
    <div className='hero-container'>
      <div className='hero-body'>
        <div className='slider'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar,Autoplay]}
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            autoplay={{delay:5000}}
            >
            <SwiperSlide className='slides'>
                <img src={hero} alt=""/>
                <div className='hero-txt'>
                <h3>design for business transformation</h3>
                <button>view project</button>
                </div>
            </SwiperSlide>
            <SwiperSlide  className='slides'>
                
                <img src={hero2} alt=""/>
                <div className='hero-txt'>
                <h3>Build With Nature</h3>
                <button>view project</button>
                </div>
            </SwiperSlide>
            <SwiperSlide  className='slides'>
               
                <img src={hero3} alt=""/>
                <div className='hero-txt'>
                <h3>Modern Designs</h3>
                <button>view project</button>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
      
        {/* <div className='hero-txt'>
            <h3>design for business transformation</h3>
            <button>view project</button>
        </div> */}
        <div className='cards'>
            <div className='card'>
                <div className='card-img'>
                    <img src={box2} alt=""/>
                </div>
                <div className='card-head'>
                    Brainstorm
                </div>
                <div className='card-content'>
                    <p>
                        Sed lobortis, risus a ultricies condimentum, neque augue ultrices lacus.
                    </p>
                </div>
                <div className='card-go'>
                    read more <i className='fas-fa arrow-right'/>
                </div>
            </div>
            <div className='card'>
                <div className='card-img'>
                    <img src={box3} alt=""/>
                </div>
                <div className='card-head'>
                Solution
                </div>
                <div className='card-content'>
                    <p>
                        Sed lobortis, risus a ultricies condimentum, neque augue ultrices lacus.
                    </p>
                </div>
                <div className='card-go'>
                    read more <i className='fas-fa arrow-right'/>
                </div>
            </div>
            <div className='card'>
                <div className='card-img'>
                    <img src={box} alt=""/>
                </div>
                <div className='card-head'>
                Modify & Refine
                </div>
                <div className='card-content'>
                    <p>
                        Sed lobortis, risus a ultricies condimentum, neque augue ultrices lacus.
                    </p>
                </div>
                <div className='card-go'>
                    read more <i className='fas-fa arrow-right'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
