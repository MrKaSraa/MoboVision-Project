
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import {xAxisData2} from './bardata'
import {xAxisData3} from './bardata2'
export default function App() {
  return (

    <div className="barchart-div my-5" data-aos="fade-up"> 
    <div  className='chart-res' style={{ width: '80%', height: 300 }}>
      <ResponsiveContainer  aspect={4}>
     <BarChart  barSize={20} data={xAxisData2} margin={{ top: 5, right: 30,left: 20,bottom: 5}} >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar className="mt-5 bar-title" dataKey="فروش سالانه" fill="#4747a3" background={{ fill: "#eee" }} />
    </BarChart>
    </ResponsiveContainer>
</div>
<div  className='chart-res' style={{ width: '80%', height: 300 }}>
    <ResponsiveContainer  aspect={4}>
    <BarChart data={xAxisData3} margin={{ top: 5, right: 30,left: 20,bottom: 5  }} barSize={20} >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar className="mx-5 bar-title" dataKey= "فروش سالانه" fill="#4747a3" background={{ fill: "#eee" }} />
    </BarChart>
    </ResponsiveContainer>
    </div>
    </div>
  
      
  );
}
