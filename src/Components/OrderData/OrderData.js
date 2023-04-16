import React from 'react';
import './OrderData.css';

const OrderData = () => {
  return (
    <div className='box'>
      <div className='table'>
        <table className='tabledata'>
          <tbody>
          <tr className='row1'>
            <td className='table1'>
              <div className='content1'>
              <h5  >Total Order</h5>
              <p>Last year expenses</p></div>
              <h1>1896</h1>
            </td>
            <td className='table2'>
            <div className='content1'>
              <h5>Clients</h5>
              <p>Total Clients Profit</p></div>
              <h1>$12.6k</h1>
            </td>
          </tr>
          <tr className='row2'>
            <td className='table1'>
             <div className='content2'>
              <h5>Followers</h5>
              <p>People Interested</p></div>
              <h1>45,9%</h1>
            </td>
            <td className='table2'>
            <div className='content2'>
              <h5>Product Sold</h5>
              <p>Total revenue streams</p></div>
              <h1>$3M</h1>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderData;
