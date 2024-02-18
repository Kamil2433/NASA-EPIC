import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const apiKey = 'pI8PQVXLfJGf7QUbLWgImeGacphgfLuDrK9JaVOq';







export default function Cardnasa() {
  
  async function fetchdata(){
    const apiUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;
  
      const res=await fetch(apiUrl)
  
      const data=await res.json();

      setdata(data)

          console.log(data)
    
  
  }
 const [idx,setidx]=useState(0)
 const [data,setdata]=useState()
   

useEffect(() => {
  
  fetchdata()
  

 }, [])

 const getdate=(input)=>{
  const dateObj = new Date(input);
    
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // Months are zero-indexed, so we add 1
    const year = dateObj.getFullYear();

    const newDate = year + "/" + month + "/" + day;
return newDate


 }

 const previous=()=>{


  if(idx>0){


    setidx(idx-1)
  }




 }

 const next=()=>{


  setidx(idx+1)



}



  return (


    <div  className="d-flex justify-content-center">
   
    {/* <container> */}

    {/* <Row> */}

{data ?

   
       <Card style={{ width: '18rem' }} >
       <Col xs={6} md={4}>

      

      <Image variant="top" src={`https://api.nasa.gov/EPIC/archive/natural/${getdate(data[idx].date)}/png/${data[idx].image}.png?api_key=${apiKey}`} thumbnail  />

       





      </Col>
      <Card.Body>
        <Card.Text>
       {data[idx].caption}
       {data[idx].date}
       {data[idx].identifier}
        </Card.Text>
        <Button  className="float-left" size='sm' onClick={()=>previous()} >Prev</Button>

        <Button className="float-right" size='sm' onClick={()=>next()}>Next</Button>

      </Card.Body>
    </Card>  : " "


}


    
     </div>


  )
}
