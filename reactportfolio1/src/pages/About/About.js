import React from 'react';
import './About.css';
import Coderesume from '../../components/Assets/Images/2020code.pdf'
import peanut from '../../components/Assets/Images/Dave.jpeg'
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

const Portfolio = () => {
  return (
    <>
      <div className="bkgclr">
        <div color="white bg" className="App buttoncolor center resume">
          <a className="resume a" href={Coderesume} target="_blank"> See my Resume</a>
        </div>
        <h1 className="name" >Dave Trimboli</h1>
        <hr />
        <h5 className="name">davidatrimboli@gmail.com</h5>
        <h5 className="name">(914) 489-3535</h5>
        <hr />
        <img className="size" src={peanut} alt="photo of me" />
        <hr />
        <h5 className="name">
          <ul>
            <h4 className="underline">Technical Skills</h4>
          HTML
          CSS
          JavaScript
          JQuery
          SQL
          MongoDB
          React.js
          Node.js
          Express
        </ul>
        </h5>
        <hr />
        <h5 className="name">I am a Full-Stack Web Developer using a background in the Audio Visual/Entertainment industry to develop real world, intriguing applications for all types of users.  Recently, I earned a certificate in Coding and Web Development from the University of California, Irvine.  I am a productive, persistent problem solver, who is always eager to learn more about cutting edge technologies and responsive web development.  In every endeavor that I take on, my goal is to develop a product that brings the user the most optimal user experience possible.  In my most recent project, I worked as a team with three fellow developers to create a multi-page MERN app that brings those in the coding community together and allows easy and effective collaboration on web development projects. I am eager and highly enthused to use my new found skills as part of a fast-moving team with aspirations of excellence in order to build the best experiences possible for users on the web. </h5>
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
      </div>


    </>
  )
}

export default Portfolio