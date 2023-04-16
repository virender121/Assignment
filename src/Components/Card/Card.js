import React from 'react'
import "./Card.css"
const Cards = () => {

    const amount = [
       { id: 1,
         doller:"$874",
         title: "sales last month"
       },
       { id: 2,
        doller:"$1283",
        title: "Sales Income"
      },
      { id: 3,
        doller:"$1286",
        title: "last month sales"
      },
      { id: 4,
        doller:"$564",
        title: "total Revenue"
      },
      { id: 5,
        doller:"$1283",
        title: "Sales Income"
      },
      { id: 6,
        doller:"$874",
        title: "sales last month"
      },
    ]
  return (
    <div className="card">
        {amount.map((item,id) => {
      return (
        <div key ={id}className='card-item'>
          <h2>{item.doller}</h2>
          <h4>{item.title}</h4>
        </div>
      )
     })}
    </div>
  )
}

export default Cards