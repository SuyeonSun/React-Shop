import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { Nav, } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';

let 박스 = styled.div`
    padding: 20px;
`;

let 제목 = styled.h4`
    font-size : 25px;
    color : ${props => props.색상}
`;

function Detail(props) {
    let [inputData, setInputData] = useState('');

    let [alert, setAlert] = useState(true);
    useEffect(() => {
        let timer = setTimeout(()=>{
            setAlert(false)
        }, 2000);
        return () => {clearTimeout(timer)}; // Detail 페이지 사라질 때 타이머 종료하기
    }, []); // Detail 페이지 로딩시 출현 후 끝

    let history = useHistory();

    let {id} = useParams(); // parameter가 여러 개 있다면, let {id, name, id2} = useParams();
    let 찾은상품 = props.shoes.find(function(shoe){
        return shoe.id == id
    });

    let [tab, setTab] = useState(0);
    let [tabswitch, setTabswitch] = useState(false);

    return (
      <div className="container">
        <박스>
            {/* <제목 색상={'red'} className='red'>Detail</제목> */}
            <제목 className='red'>Detail</제목>
        </박스>

        {/* input */}
        <input onChange={(e)=>{setInputData(e.target.value)}}/>
        {inputData}

        {/* alert */}
        {
            alert==true
            ?
            (<div className="my-alert-red">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>)
            : null
        }

        {/* shoes */}
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes`+ (찾은상품.id+1)+`.jpg`} width="100%"></img>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>

            <Info stock={props.stock}></Info>

            <button className="btn btn-danger" onClick={()=>{props.setStock([props.stock[0]-1, props.stock[1], props.stock[2]])}}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.goBack();
            }}>뒤로가기</button>
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={() => {setTabswitch(false); setTab(0)}}>Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={() => {setTabswitch(false); setTab(1)}}>Disabled</Nav.Link>
            </Nav.Item>
        </Nav>

        {/* tab css */}
        <CSSTransition in={tabswitch} classNames="slow" timeout={500}>
            <TabContent tab={tab} setTabswitch={setTabswitch}></TabContent>
        </CSSTransition>
    </div> 
    )
}

function TabContent(props) {
    useEffect(() => {
        props.setTabswitch(true);
    });

    if (props.tab === 0) {
        return <div>0번째 내용입니다.</div>
    }
    else if (props.tab === 1) {
        return <div>1번째 내용입니다.</div>
    }
}

function Info(props) {
    return (
        <p> 재고 : {props.stock[0]} </p>
    )
}

export default Detail;