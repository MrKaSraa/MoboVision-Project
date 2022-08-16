import React from 'react'
import { useParams } from 'react-router-dom'
import textdata from './textdata'
import '../Phonepage/Phonepage.css'
 function Textintros() {
    let params= useParams()
   

    let maintextdata = textdata.find(text => text.id == params.phoneid)
  return (
    <div>
      {maintextdata.items.map(item=>(
        <>
    <div className="title-textintro "  data-aos="fade-up">
            <p>{item.title}</p>
        </div>
        <hr />
        <div className="p-textintro" data-aos="fade-up">
          <p>{item.text}</p>
        <p>{item.text2}</p>
        </div>
        
        <div className="img-textintro my-5" data-aos="fade-up">
         <img  src={item.img} alt="" />
        </div>
       </>
      ))}
    
     
    </div>
  )
}
export default Textintros