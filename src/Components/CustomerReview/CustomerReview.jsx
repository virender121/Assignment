import React from "react";
import Chart from "react-apexcharts";
import './CustomerReview.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));
const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return (
    <div className="CustomerReview">
    <div className="header">
      <h4>Technical Support</h4>
    </div>
    <div className="chart">
      <Chart options={data.options} series={data.series} type="area" />
      <h3>SALES PROGRESS</h3>
    </div>
    <div className="content">
      <div>
        <h5>Total Orders</h5>
        <p>Last Year Expenses</p>
      </div>
      <div>
        <h1>$1896</h1>
      </div>
      <Box sx={{ flexGrow: 1, height: "8px" }}>
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>
    </div>
  </div>
  );
  
  }
export default CustomerReview;
