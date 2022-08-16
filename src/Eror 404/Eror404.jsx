import React from 'react'
import './Eror404.css'
export default function Eror404(props) {
  return (
   
    <div className='eror-404'>
        <p id="error">E<span>r</span>ror</p>
        <p id="code">{props.eror1}<span>{props.eror2}</span><span>{props.eror3}</span></p>
    </div>
  )
}
