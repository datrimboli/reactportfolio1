import React from 'react';
import './About.css';
import resumecurrent from '../../components/Assets/Images/resumecurrent.pdf'
import peanut from '../../components/Assets/Images/Dave.jpeg'
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

const Portfolio = () => {
  return (
    <>
      <div color="white" className="App buttoncolor center resume">
        <a className="resume a" href={resumecurrent} target="_blank"> See my Resume</a>
      </div>
      <h1 className="name" >Dave Trimboli</h1>
      <hr />
      <h5 className="name">davidatrimboli@gmail.com</h5>
      <h5 className="name">(914) 489-3535</h5>
      <hr />
      <img className="size" src={peanut} alt="photo of me" />
      <hr />
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