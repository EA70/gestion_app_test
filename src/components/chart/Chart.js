import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import "./chart.scss" ;


const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

const Chart = ( { title, aspect}) => {
    return (
        <div className='chart' >
            <div className="title"> {title} </div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top:10, right:30, left:0, bottom:0 }}
                >
                    <defs>
                        <linearGradient>
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <  XAxis dataKey="name" stroke='gray' />
                    < CartesianGrid strokeDasharray="3 3" className='chartGrid'  />
                    < Tooltip />
                    < Area 
                        type="monotone"
                        dataKey="Total"
                        stroke="#FF6699"
                        fillOpacity={0.5}
                        fill="#FF6699"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;