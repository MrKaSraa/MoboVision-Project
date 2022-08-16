import React from 'react'
import icondatas from '../components/iconsdata'
import { useParams } from 'react-router-dom'
export default function Introicons(props) {
  let params= useParams()
   

  let mainicondata = icondatas.find(icon => icon.id == params.phoneid)

  return (
    <div>


    
<div className="icons-intros my-5">
  <div className="div-icon-intro">
{mainicondata.icon_intro}
<div className="p-icon-intro pt-2">
    <p>{mainicondata.p1_intro_icon}</p>
    <p>{mainicondata.p2_intro_icon}</p>
</div>

</div>

<div className="div-icon-intro">
{mainicondata.icon_intro1}
<div className="p-icon-intro pt-2">
    <p>{mainicondata.p21_intro_icon}</p>
    <p>{mainicondata.p22_intro_icon}</p>
</div>

</div>

<div className="div-icon-intro">
{mainicondata.icon_intro2}
<div className="p-icon-intro pt-2">
    <p>{mainicondata.p3_intro_icon}</p>
    <p>{mainicondata.p31_intro_icon}</p>
</div>

</div>
</div>










<div className="icons-intros">
  <div className="div-icon-intro">
{mainicondata.icon_intro3}
<div className="p-icon-intro pt-2">
    <p>{mainicondata.p4_intro_icon}</p>
    <p>{mainicondata.p41_intro_icon}</p>
</div>

</div>

<div className="div-icon-intro">
{mainicondata.icon_intro4}
<div className="p-icon-intro pt-2">
    <p>{mainicondata.p5_intro_icon}</p>
    <p>{mainicondata.p51_intro_icon}</p>
</div>

</div>

<div className="div-icon-intro">
{mainicondata.icon_intro5}
<div className="p-icon-intro pt-2">
    <p>{mainicondata.p6_intro_icon}</p>
    <p>{mainicondata.p61_intro_icon}</p>
</div>

</div>

</div>




    </div>
  )
}
