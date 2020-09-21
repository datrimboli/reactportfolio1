import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const Cards = () => {
  return(
    <>
      <div>
        
        <Card>
          <CardImg top width="10%" src="./bit.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardImg top width="50%" src="/assets/318x180.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      
    </>
  )
}

export default Cards