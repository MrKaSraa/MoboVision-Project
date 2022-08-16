import React from 'react'
import './Features.css'
export default function Feateure(props) {
  return (
    <div className='feature-bg'>
        <div className="name-feature">
            <p>{props.name}</p>
            <p>{props.count}</p>
        </div>
        <div className="condition-feature">
          <p >  پایانی <span className={props.colorclass}>{props.final2}</span> {props.final1} </p>
          <p className={props.colorclass}> <span>{props.final4}</span>   {props.final3}   </p>
        </div>
    </div>
  )
}
