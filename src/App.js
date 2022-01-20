/* eslint-disable */
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import './App.css';
import Data from './data.js'

function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">

      {/* Navbar */}
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Jumbotron */}
    <div class="background">
      <div class="container p-5">
        <h1 class="display-4 fw-bold">Welcome to Admin Dashboard</h1>
          <p>Go to My Website</p>
          <a href="#" class="btn btn-primary">link</a>
      </div>
    </div>
    
    {/* 상품 */}
    <div className="container">
      <div className="row">
        <Card shoes={shoes}/>
        <Card shoes={shoes}/>
        <Card shoes={shoes}/>
      </div>
    </div>

  </div>
  );
}

function Card (props) {
  return (
      <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          <h4>{props.shoes[0].title}</h4>
          <p>{props.shoes[0].content} & {props.shoes[0].price}</p>
      </div>
  )
}

export default App;
