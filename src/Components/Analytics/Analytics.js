import React from 'react';
import LeftSection from '../../Section/LeftSection/LeftSection';
import Header from '../../Section/Header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Chip from '@mui/material/Chip';
// import Check from '@mui/icons-material/Check';

// const finalTheme = createTheme({
//   components: {
//     MuiChip: {
//       styleOverrides: {
//         root: ({ theme }) =>
//           theme.unstable_sx({
//             // https://mui.com/system/getting-started/the-sx-prop/#spacing
//             px: 1,
//             py: 0.25,
//             // https://mui.com/system/borders/#border-radius
//             borderRadius: 1, // 4px as default.
//           }),
//         label: {
//           padding: 'initial',
//         },
//         icon: ({ theme }) =>
//           theme.unstable_sx({
//             mr: 0.5,
//             ml: '-2px',
//           }),
//       },
//     },
//   },
// });

const columns = [
  { field: 'id', headerName: '#', width: 90 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => (
      <img src={params.value} style={{ width: 50, height: 50, borderRadius: '50%' }} alt="Avatar" />
    ),
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'company',
    headerName: 'Company Name',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 160,
  },
  {
    field: 'dueDate',
    headerName: 'Due Date',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'target',
    headerName: 'Target Achievement',
    type: 'string',
    width: 180,
    editable: true,
  },
  
];

const rows = [
  { id: "#54", avatar: "https://example.com/avatar1.png", name: 'Juan C. Cargill', company: "Micro Electronics", status: "Canceled", dueDate: "12 Dec",target:"71%" },
  { id: "#55", avatar: "https://example.com/avatar1.png", name: 'Johnathan Phelan', company: "Hatchworks", status: "On Hold", dueDate: "12 Dec",target:"54%" },
  { id: "#56", avatar: "https://example.com/avatar1.png", name: 'Darelle Lowe', company: "Riddle Electronics", status: "In Progress", dueDate: "12 Dec",target:"97%" },
  { id: "#57", avatar: "https://example.com/avatar1.png", name: 'George T. Cottrell', company: "Pixelcloud", status: "Completed", dueDate: "12 Dec" ,target:"88%"},
];

const Analytics = () => {
//     const getChipColor = (status) => {
       
//       };
  return (
    <div className="main">

      <div className='left-section'><LeftSection /></div>

      <div className='right-section'>
        <div className='right-header'><Header /></div>
        <h2>Company Agent Status</h2>
          <DataGrid
            rows={rows}
             columns={columns}/>
         
          
          
      </div>
    </div>
  );
};

export default Analytics;
