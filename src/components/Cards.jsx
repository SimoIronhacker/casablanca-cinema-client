import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, Container, } from "react-bootstrap";
import { Row, Col, Card } from 'react-bootstrap';
import fightClub from "../assets/img/fightClub.jpeg";
import OnceUponATimeInAmerica from "../assets/img/OnceUponATimeInAmerica.jpeg";
import unProphet from "../assets/img/unProphet.jpeg";
import usualSuspect from "../assets/img/usualSuspect.jpeg";
import ProfessorAndTheMadman from "../assets/img/ProfessorAndTheMadman.jpeg";




export default function Cards() {
    return (
        
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={fightClub} alt="fightClub" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Card.Img variant="top" src={OnceUponATimeInAmerica} alt="OnceUponTimeInAmerica" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>    

      <Card>
      <Card.Img variant="top" src={unProphet} alt="unProphet" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>    

      <Card>
      <Card.Img variant="top" src={usualSuspect} alt="usualSuspect" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>    

      <Card>
      <Card.Img variant="top" src={ProfessorAndTheMadman} alt="ProfessorAndTheMadman" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>    
    </Col>
  ))}
</Row>
        
    )
}







