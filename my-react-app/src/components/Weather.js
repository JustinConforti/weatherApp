import React from "react";
import { Card } from 'semantic-ui-react'
import moment from 'moment';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

const Weather = ({weatherData}) => (
    <Card>
    <Card.Content>
        <p> Today is : {moment().format('dddd')}</p>
    <div className ="main">
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
    </div>
        <p className ="temp">Temperature: {weatherData.main.temp} &deg;F</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Humdity: {weatherData.main.humidity}% </p>
    </Card.Content>
  </Card>
)


export default Weather;
