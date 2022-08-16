import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'
import {AiOutlineRise} from 'react-icons/ai'
import { xAxisData } from './datachart';
export default function Chart({title, grid}) {
  return (

    <div className="chart-div"  >
         <div className="chart">
          <div className='hihhh my-4'>
             <h3 className='chartTitle '>{title}</h3>
          <div className='chart-help-div'>
            <div className='chart-help mx-3'>
              <p>فروش</p> 
              <AiOutlineRise style={{color:'#9b791c'}} className='icon-chart-help' />
            </div>
            <div className='chart-help'>
              <p>خرید</p> 
              <AiOutlineRise style={{color:'white'}} className='icon-chart-help' />
            </div>
          </div>
          </div>
         
          <ResponsiveContainer className="charttt" width={'100%'} aspect={4}>
              <LineChart data={xAxisData}>
                  <XAxis dataKey="name" stroke='#fff' />
                  <Line type='monotone' dataKey='Sale' stroke='#9b791c' />
                  <Line type='monotone' dataKey='buy' stroke='#fff' />
                  <Tooltip />
                  {grid && <CartesianGrid stroke='#4747a3' strokeDasharray="3 3" />}
              </LineChart>
          </ResponsiveContainer>
      </div>
    </div>
     
  )
}
