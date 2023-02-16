import React from 'react'
import "./Digital.css"
import sketch from "../../assets/sketch.jpg"

const Digital = () => {
  return (
    <div className='digital-container'>
      <div className='digital-body'>
        <div className='digital-left'>
            <img src={sketch} alt='IMG '/>
        </div>
        <div className='digital-right'>
            <div className='head'>
                We Create Digital Experience
            </div>
            <p>
                Located on King’s Road in the heart of chic and high-end Chelsea, 
                we've designed the first Sticks 'N' Sushi restaurant in London.
            </p>
            <div className='counter'>
                <div>
                    <h3>17+</h3>
                    <p>years working in Canada</p>
                </div>
                <div>
                    <h3>48</h3>
                    <p>houses build in europe</p>
                </div>
                <div>
                    <h3>100*</h3>
                    <p>years guarantee</p>
                </div>
            </div>
            <button>view portfolio</button>
        </div>
      </div>
    </div>
  )
}

export default Digital
