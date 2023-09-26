import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import './Statistics.css'



const COLORS = ['#FF444A', '#00C49F']
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

function Statistics() {
  const [totalDonation, setTotalDonation] = useState(0);
  const [myDonation, setMyDonation] = useState([]);

  useEffect(() => {
    fetch('https://ashrafulrifaz.github.io/donation-campaign-data/data.json')
      .then(res => res.json())
      .then(data => setTotalDonation(data.length))

    const getDonationFromLocal = JSON.parse(localStorage.getItem('item')) || []
    setMyDonation(getDonationFromLocal.length)
  }, [])

  const data = [
    { name: 'Total Dontaion', value: totalDonation - myDonation },
    { name: 'Your Donation', value: myDonation }
  ];

  console.log(data[0].value, data[1].value);

  return (
      <div className='max-w-100%'>
        <ResponsiveContainer width="100%" height={350} >
          <PieChart width={600} height={400} className='mx-0 md:mx-auto'>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
              className='focus:outline-none w-20'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
  );
}


export default Statistics;