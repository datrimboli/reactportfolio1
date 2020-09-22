import React from 'react'
import './About.css'
import Image1 from '../../components/Assets/Images/Dave.jpeg'
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

const Portfolio = () => {
  return (
    <>
      <h1 className="name" >Dave Trimboli</h1>
      <hr/>
      <h5 className="name">datrimboli@gmail.com</h5>
      <h5 className="name">(914) 489-1516</h5>
      <hr/>
        <img className="size" src={Image1} alt=""/>
        <hr/>
      <div className="name">
        <Button className="buttoncolor bottom" type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://github.com/datrimboli';
        }}
      > Visit my Github!</Button>
      
      <Button className="buttoncolor bottom" type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.linkedin.com/in/dave-trimboli-158a16a4/';
        }}
      > Visit my LinkedIn!</Button>
      
      </div>
        
     
    </>
  )
}

export default Portfolio