import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie } from 'recharts';
const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
const Dashboard = () => {
    return (
        <>
        <h1 className='text-4xl w-full  px-4 md:px-2 text-center pl-10 pt-4 pb-4 font-bold  text-pink-700'>This is chart of sells product!!</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 pt-6 px-24'>
            
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>

            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="blue" />
                <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="red" label />
            </PieChart>
        </div>

        </>
       

    );
};

export default Dashboard;