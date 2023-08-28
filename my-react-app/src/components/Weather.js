import React from "react";
import moment from 'moment';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import icon from '../images/01d.png';


const Weather = ({weatherData}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={icon} />
    <Card.Body>
      <Card.Title>{moment().format('dddd')}'s Weather Forcast {moment().format('LL')} </Card.Title>
      <Card.Text>
       for the great city of: <div className = 'cityName'>{weatherData.name}</div>
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{weatherData.main.temp} &deg;F</ListGroup.Item>
      <ListGroup.Item>Humidity: {weatherData.main.humidity} %</ListGroup.Item>
      <ListGroup.Item>{weatherData.weather[0].main} sky</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
    </Card.Body>
  </Card>


)


export default Weather;
