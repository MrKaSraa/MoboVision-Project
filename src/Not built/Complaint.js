import React from 'react'
import Eror404 from '../Eror 404/Eror404'
import { useState } from 'react'
export default function Complaint() {
    const [eror,seteror] =useState(
        {eror1:'شکایتی ',eror2:'یافت ',eror3:'نشد '}
    )
  return (
    <div><Eror404 {...eror}/></div>
  )
}
