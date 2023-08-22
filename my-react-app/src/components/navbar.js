import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catimg from '../images/cats_and_dogs.jpg';

function NavBar({weatherData}) {
    return (
    <div className ="navbarColor">
    <Container className ="LeftSideNavBarContainer" fluid>
        <Row>
          <Col><img className ="dogcatimg" src={ Catimg } /></Col>
          <Col className ="NavBarTitleText">Its Raining Cats</Col>
          <Col className ="NavBarCityInfo">{weatherData.name} </Col>
        </Row>
    </Container>

    </div>
    );
  }

export default NavBar;