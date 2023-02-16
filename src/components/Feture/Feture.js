import React, { useState } from 'react'
import "./Feture.css"
import dataset from "../../TempData/Data"

const Feture = () => {

  const [data,setData]= useState (dataset)
  const [filter,setFilter]= useState (true)

  const filterCat=(catItem)=>{
    console.log(catItem)
    const result = dataset.filter((currData)=>{
    return currData.cat === catItem;
   })
    setData(result);
    console.log(result)
  }

  return (
    <div className='feature-container'>
        <div className='feature-head'>
            <h3>Featured Works</h3>
        </div>
        <div className='features'>
            <div className='features-left'>
                <p>Suspendisse ligula ex pulvinar quis lorem vitae varius</p>
            </div>
            <div className={filter ? 'features-right' : 'features-right active'  }>
                {/* {data.map((cats,index) =>(
                   <li key={index} onClick={()=>filterCat(`${cats.cat}`)}>{cats.cat}</li>
                ) )
                } */}
                <li onClick={()=>setData(dataset)}>all</li>
                <li onClick={()=>filterCat(`3d`)}>3d modeling</li>
                <li onClick={()=>filterCat(`archi`)}>architecture</li>
                <li onClick={()=>filterCat(`building`)}>building</li>
                <li onClick={()=>filterCat(`Landscape`)}>landscape</li>
                <li onClick={()=>filterCat(`Living`)}>living room</li>
            </div>
            <div className='filter' onClick={()=>setFilter(!filter)}>
                <i className= "fa-solid fa-bars" ></i>
            </div>
        </div>
        <div className='feature-gal'>
            {data.map((datas,index) =>(
                <div className='gal' key={index}>
                    <div className='images'>
                        <img src={datas.image} alt="img"/>
                        <div className='image-data'>
                            <h3>{datas.head}</h3>
                            <p>{datas.cat}</p>
                        </div>
                    </div> 
                </div>
            ) )
            }
        </div>
    </div>
  )
}

export default Feture
