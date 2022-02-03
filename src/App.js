/* eslint-disable */
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import './App.css';
import Data from './data.js'
import Detail from './Detail';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom';

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
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/detail'>Detail</Link>
              </Nav.Link>
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

      {/* Routing */}
      <Switch>
      <Route exact path="/">
        {/* Jumbotron */}
        <div className="background">
          <div className="container p-5">
            <h1 className="display-4 fw-bold">Welcome to Admin Dashboard</h1>
              <p>Go to My Website</p>
              <a href="#" className="btn btn-primary">link</a>
          </div>
        </div>

        {/* 상품 */}
        <div className="container">
          <div className="row">
            {
              shoes.map((element, i) => {
                return (
                  <Card shoes={shoes[i]} i={i} key={i}/>
                )
              })
            }
          </div>
          {/* 더보기 버튼 */}
          <button className="btn btn-primary" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json') // 브라우저 url 창에 url 입력하면 요청하는 데이터 확인 가능
            .then((result)=>{
              setShoes([...shoes, ...result.data]);
            }) 
            .catch(()=>{
              console.log('fail');
            }); // ajax 요청이 실패했을 경우 실행할 코드
          }}>
            더보기
          </button>
        </div>
    </Route>

    <Route path="/detail/:id">
      <Detail shoes={shoes}></Detail>
    </Route>
    </Switch>
  </div>
  );
}

function Card (props) {
  return (
      <div className="col-md-4">
          <img src={`https://codingapple1.github.io/shop/shoes`+(props.i + 1)+`.jpg`} 
          width="100%" />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
  )
}

export default App;
