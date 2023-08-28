import React, { Component, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catimg from '../images/cats_and_dogs.jpg';
import whiteGlobe from '../images/whiteGlobe.png';
import cartoonCloud from '../images/birdCloud.svg'

function NavBar({weatherData}) {
const [show, setShow] = useState(false);

    console.log(weatherData.main.temp)
    const temp = Math.round(weatherData.main.temp)

    return (
    <div className ="navBar">
    <Container className="firstNavBarContainer" fluid>
        <Row className="firstNavBarRow">
          <Col><img className="" src={ Catimg } /></Col>
          <Col><h3 className="">A Cat and Dog Business</h3></Col>
          <Col className="whiteGlobe">{weatherData.name}<img src={ whiteGlobe } /></Col>
        </Row>
    </Container>

    <Container className="secondNavBarContainer">
        <Row className="secondNavBarRow">
            <Col className="secondNavBarContent"><img src = {cartoonCloud } /><span>{temp}°</span><span classname="secondNavBarCity"> {weatherData.name}</span></Col>
            <Col>
              <button onClick={() => {setShow(show => !show)}} class="dropbtn">Hourly</button>              
              { show ? (
              <div id="myDropdown" class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              </div>
            ) : 
            (<div></div>)}
            </Col>
        </Row>

    </Container>

    </div>
    );
  }

export default NavBar;