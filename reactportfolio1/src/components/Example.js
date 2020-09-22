import React from 'react';
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Image1 from './Assets/Images/bit.png';
import Image2 from './Assets/Images/burgproj.png'
import Image3 from './Assets/Images/note.png'
import Image4 from './Assets/Images/workout.png'
import Image5 from './Assets/Images/chart.png'
import Image6 from './Assets/Images/poke.png'
// import './Example.css'
const Example = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image1} alt="Card image cap" />
          <CardTitle>Busks In Town (Project 2)</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image2} alt="Card image cap" />
          <CardTitle>Handlebars Burger App</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image3} alt="Card image cap" />
          <CardTitle>Express Note Taker</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image4} alt="Card image cap" />
          <CardTitle>Fitness Tracker</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image5} alt="Card image cap" />
          <CardTitle>PWA Online/Offline Budget</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src={Image6} alt="Card image cap" />
          <CardTitle>Pokemon site (Project 1)</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};
export default Example;