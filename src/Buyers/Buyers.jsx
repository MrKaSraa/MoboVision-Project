import React from 'react'
import './Buyers.css'
export default function Buyers(props) {
  return (
    <div >
        <div className="best-buyers">
                <div className="best-buyer">
                    <img src={props.img} className='img-buyers' alt="" />
                        <div className="text-buyer ">
                            <p className='my-1'>{props.name}</p>
                            <p style={{color:'green'}}>{props.cost}</p>
                        </div>

               </div>

        </div>
    </div>
  )
}
