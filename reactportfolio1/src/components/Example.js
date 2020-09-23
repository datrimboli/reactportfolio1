import React from 'react';
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Image1 from './Assets/Images/bit.png';
import Image2 from './Assets/Images/burgproj.png'
import Image3 from './Assets/Images/note.png'
import Image4 from './Assets/Images/workout.png'
import Image5 from './Assets/Images/chart.png'
import Image6 from './Assets/Images/poke.png'
import './Example.css'

const Example = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image1} alt="Card image cap" />
          <CardTitle className="center font">Busks In Town (Project 2)</CardTitle>
          <CardText className="center font2">Search the Irvine area for your favorite street performer. It's Busks in Town!</CardText>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://guarded-crag-60613.herokuapp.com/';
            }}
          > See the Site!</Button>
          <br/>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/datrimboli/BusksInTown';
            }}
          > See the Repo!</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image2} alt="Card image cap" />
          <CardTitle className="center font">Handlebars Burger App</CardTitle>
          <CardText className="center font2">Create your dream burger, then devour it! The most delicious app ever.</CardText>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://rocky-hamlet-33114.herokuapp.com/';
            }}
          > See the Site!</Button>
          <br/>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/datrimboli/BurgerHandlebarsApp';
            }}
          > See the Repo!</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image3} alt="Card image cap" />
          <CardTitle className="center font">Express Note Taker</CardTitle>
          <CardText className="center font2">Keep track of your daily thoughts and chores with this convenient note taker!</CardText>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://protected-citadel-67708.herokuapp.com/';
            }}
          > See the Site!</Button>
          <br/>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/datrimboli/ExpressNoteTaker';
            }}
          > See the Repo!</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image4} alt="Card image cap" />
          <CardTitle className="center font">Fitness Tracker</CardTitle>
          <CardText className="center font2">Get buff! Track your reps and cardio with this fitness tracker app!</CardText>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://frozen-tor-52478.herokuapp.com/?id=5f5a85f199eb7200177b8652';
            }}
          > See the Site!</Button>
          <br/>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/datrimboli/workoutTracker';
            }}
          > See the Repo!</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image5} alt="Card image cap" />
          <CardTitle className="center font">PWA Online/Offline Budget</CardTitle>
          <CardText className="center font2">Become a more fiscally responsible individual and track your expenses!</CardText>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://young-shore-75074.herokuapp.com/';
            }}
          > See the Site!</Button>
          <br/>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/datrimboli/PWAOnline-OfflineBudgetTracker';
            }}
          > See the Repo!</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image6} alt="Card image cap" />
          <CardTitle className="center font">Pokemon site (Project 1)</CardTitle>
          <CardText className="center font2">Learn everything you need to know about Pokemon. Gotta catch 'em all!</CardText>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://kalynbsimms.github.io/pokeProject/';
            }}
          > See the Site!</Button>
          <br/>
          <Button className="buttoncolor" type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/Kalynbsimms/pokeProject';
            }}
          > See the Repo!</Button>
        </Card>
      </Col>
    </Row>
  );
};
export default Example;