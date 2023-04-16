import React ,{useEffect, useState}from 'react'
import './RightSection.css'
import Footer from '../Footer/Footer';
const RightSection = () => {
  const [data, setData] = useState(null);

  async function getData() {
    const result = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=e616395c34ce42d3982817abcc89e6b2")
    const res = await result.json()
    console.log(res.articles);
    setData(res.articles)
  } 
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div className='right'>
    
     
      
     {data?.map((item,index) => {
      return (
        <div key ={index}className='right-card'>
          <h2>{item.author}</h2>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <img style ={{width: "auto", height:"350px"}} className='img' src={item.urlToImage} alt='img'/>
          <p>{item.content}</p>
        </div>
      )
     })}
      
     </div>
   
  )
}

export default RightSection
