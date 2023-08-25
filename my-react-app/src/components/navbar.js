import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catimg from '../images/cats_and_dogs.jpg';
import whiteGlobe from '../images/whiteGlobe.png';
import cartoonCloud from '../images/birdCloud.svg'

function NavBar({weatherData}) {
    console.log(weatherData.main.temp)
    const temp = Math.round(weatherData.main.temp)
    return (
    <div className ="navBar">
    <Container className="firstNavBarContainer" fluid>
        <Row class="firstNavBarRow">
          <Col><img class="" src={ Catimg } /></Col>
          <Col><h3 class="">A Cat and Dog Business</h3></Col>
          <Col className="whiteGlobe">{weatherData.name}<img src={ whiteGlobe } /></Col>
        </Row>
    </Container>

    <Container className="secondNavBarContainer">
        <Row>
            <Col className="secondNavBarContent"><img src = {cartoonCloud } /><span>{temp}°</span><span classname="secondNavBarCity"> {weatherData.name}, NC</span></Col>
        </Row>

    </Container>

    </div>
    );
  }

export default NavBar;