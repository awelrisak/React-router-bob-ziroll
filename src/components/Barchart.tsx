import React from 'react';

import { useTheme } from '@mui/material/styles';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  
} from 'chart.js';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

const months = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December"
}

const formatYAxisValue = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short'
  });
  
  return formatter.format(value);
};


function generateRandomArray(length, min, max) {
  let array = [];
  for (let i = 0; i < length; i++) {
    let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomValue);
  }
  return array;
}


const Barchart = ({ data }) => {

 
  const theme = useTheme()
  // Extract x labels and y values from the data array
  const labels = data.map(item => item.month);
  const values = generateRandomArray(6, 1000, 4000)
  
  
  // Define the chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Income Revenue',
        data: values,
        backgroundColor: theme.palette.primary.dark,
        barPercentage: 0.9, 
        
      },
    ],
  };

  // Define the chart options
  const chartOptions = {
  responsive: true,
    
  plugins: {
    tooltip: {
      enabled: true,
      displayColors: false, 
      callbacks: {
       title: (tooltipItems) => {
          const monthAbbreviation = tooltipItems[0].label;
          const month = months[monthAbbreviation] || monthAbbreviation;
          return month
        }, 
        label: (context) => {
          const value = context.parsed.y;
          const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
          return `Revenue: ${formatter.format(value)}`; 
        }
      }
    },
    title: {
      display: true,
      text: 'Monthly Income Revenue', 
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
      },
      barPercentage: 0, 
      categoryPercentage: 0,
    },
    y: {
      grid: {
        display: false, 
      },
      beginAtZero: true,
      ticks: {
        align: 'start', 
        callback: formatYAxisValue, 
      },
    },
  },
};




   

   return <Bar data={chartData} options={chartOptions} />;
};

export default Barchart;
