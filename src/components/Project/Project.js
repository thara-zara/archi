import React from 'react'
import Progress from './Progress'
import "./Project.css"

const Project = () => {
  return (
    <div className='p-container'>
      <div className='p-body'>
        <div className='p-left'>
            <div className='left'>
                <div className='top'>
                   <h3>Illustration</h3>
                   <h3>70%</h3>
                </div>
                <div className='btm'>
                    <Progress done="70" />
                </div>
            </div>
            <div className='left'>
                <div className='top'>
                   <h3>Interior Design</h3>
                   <h3>90%</h3>
                </div>
                <div className='btm'>
                  <Progress done="90" />
                </div>
            </div>
            <div className='left'>
                <div className='top'>
                   <h3>Architecture</h3>
                   <h3>50%</h3>
                </div>
                <div className='btm'>
                  <Progress done="50" />
                </div>
            </div>
        </div>
        <div className='p-right'>
            <h3>120+ Project</h3>
            <h3>All Over The World</h3>
            <p>Curabitur commodo, felis nec eleifend fringilla, ex lectus iaculis</p>
            <p>Proin gravida nibh vel velit auctor aliquet. 
                Aenean sollicitudin, lorem quis bibendum auctor, 
                nisi elit consequat psum, nec sagittis sem nibh id elit.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Project
