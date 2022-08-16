import React, { useEffect } from 'react'
import Feateure from './Features/Feateure'
import { useState } from 'react'
import {BsCircleFill}from 'react-icons/bs'
import Chart from './Chart/Chart'
import Table from 'react-bootstrap/Table';
import './Home.css'
import Buyers from '../Buyers/Buyers';  
import ProgressBar from 'react-bootstrap/ProgressBar';
import Chart2 from './Chart2/Chart2'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

export default function Home() {
  
  const datas = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  
  ];
  
const COLORS = ['#ffa500', '#255e66',];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

 

const [featuress,setfeature]=useState( [ 
    {name:'سهام های شرکت',count:'2,852',colorclass:'red',final1:'2,887',final2:'(0.14%)',final3:'31',final4:'(1.08%)'},
    {name:' فروش محصولات',count:'8,240',colorclass:'green',final1:'8,260 ',final2:'(0.49%)',final3:'20',final4:'(0.24%)'},
    {name:'صادرات محصولات',count:'1,175' ,colorclass:'green',final1:'1,172',final2:'(0.59%)',final3:'23',final4:'(1.36%)'},
]
)


const [buyers,setbuyers] =useState([
  {name:'Kambiz Eslami',cost:'$122,000',img:'images/tree1.jpg'},
  {name:'Donya Jahanbakht',cost:'$87,000',img:'images/flowers.jpg'},
  {name:'Hossein Rahmati',cost:'$222,000',img:'images/sea.jpg'},
  {name:'Ahmad Zoghi ',cost:'$99,000',img:'images/takhthjamshid.jpg'},
  {name:'Alireza Ahmadzade',cost:'$107,000',img:'images/moon.jpg'},
  {name:'Fariba Lashkari',cost:'$82,000',img:'images/wolf.jpg'}
])

  return (
    <>
    
     <div className='feature-div '>
        
        <Feateure {...featuress[2]} />
        <Feateure {...featuress[0]} />
        <Feateure {...featuress[1]} />
       
    </div>


    <div className='mt-5'>
      <Chart grid  title="نمودار اطلاعات"   />
  
    </div>
    

    <div className="buyers-div" data-aos="fade-up">
<div className="buyers-title">

<h4>برترین خریداران</h4>
</div>

    <div className="buyers-state py-4">
        <Buyers {...buyers[0]} />
        <Buyers {...buyers[1]} />
        <Buyers {...buyers[2]} />
    </div>
    
    <div className="buyers-state py-4">
        <Buyers {...buyers[3]} />
        <Buyers {...buyers[4]} />
        <Buyers {...buyers[5]} />
    </div>
    </div>

    <div className="sales" data-aos="fade-up">
<div className="title-soles">
  <h4>آخرین خرید و فروش ها</h4>
</div>
    <Table dir='rtl' variant="light" className='tablee ' striped bordered hover>
      <thead>
        <tr className='tr-hed'>
          <th><p className='td-hed'>#</p></th>
          <th colSpan={2}><p className='td-hed'>نام کاربری</p></th>
          <th><p className='td-hed'>تاریخ</p></th>
          <th><p className='td-hed'>مقدار</p></th>
          <td><p className='td-hed'>وضعیت</p></td>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td><img src="images/flowers.jpg" className='img-sales' alt="" /></td>
          <td><p className='p-soles'>Zare</p></td>
          <td><p className='p-soles'>Reza</p></td>
          <td><p dir='ltr' className='p-soles'>1401/4/25</p></td>
          <td><p className='p-soles'>$129 </p></td>
          <td><p className='p-soles'>خرید</p></td>
        </tr>
        <tr>
        <td><img src="images/sea.jpg" className='img-sales' alt="" /></td>
        <td><p className='p-soles'>Abedi</p></td>
        <td><p className='p-soles'>Ahmad</p></td>
        <td><p dir='ltr' className='p-soles'>1401/4/29</p></td>
        <td><p className='p-soles'>$300</p></td>
        <td><p className='p-soles'>قروش</p></td>
        </tr>
        <tr>
        <td><img src="images/moon.jpg" className='img-sales' alt="" /></td>
        <td><p className='p-soles'>Bahrami</p></td>
        <td><p className='p-soles'>Maryam</p></td>
        <td><p dir='ltr' className='p-soles'>1401/5/04</p></td>
        <td><p className='p-soles'>$250</p></td>
        <td><p className='p-soles'>خرید</p></td>

        </tr>
      </tbody>
    </Table>

    </div>


<Chart2/>

<div className="piechart-div my-3" data-aos="fade-up">
<div className='pro-div' dir='rtl'>
  <p className='mt-5'>فروش این ماه</p>
  <ProgressBar className='progres my-4' animated now={45} />
  <p>خرید این ماه</p>
<ProgressBar className='progres my-4'  animated now={80} />
<p>صادرات این ماه</p>
<ProgressBar className='progres my-4'  animated now={20} />
<p>دستمزد این ماه</p>
<ProgressBar className='progres my-4'  animated now={60} />
</div>


<div className='piechart'>
   <div  style={{ width: '310px', height:'350px'} }>
    <h4 className='h4-pichart'>  صادرات و واردات</h4>
<ResponsiveContainer >
        <PieChart >
          <Pie
            data={datas}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {datas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        
      </ResponsiveContainer>

      
      </div>
              <div className="help-pichart">
              <div className="help-pichart-text">
                 <p style={{color:'#000'}}>صادرات</p>
                <BsCircleFill  style={{color:'ffa500'}} className='my-1 mx-2'/>
              </div>
               
              <div className="help-pichart-text">
                 <p >واردات</p>
                <BsCircleFill style={{color:'#255e66'}} className='my-1 mx-2'/>
              </div>

              </div>
</div>
 




</div>


 


    </>
   
  )
}
