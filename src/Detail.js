import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
    padding: 20px;
`;

let 제목 = styled.h4`
    font-size : 25px;
    color : ${props => props.색상}
`;

function Detail(props) {

    let [alert, setAlert] = useState(true);
    useEffect(() => {
        let timer = setTimeout(()=>{
            setAlert(false)
        }, 2000);
    });

    let history = useHistory();

    let {id} = useParams(); // parameter가 여러 개 있다면, let {id, name, id2} = useParams();
    let 찾은상품 = props.shoes.find(function(shoe){
        return shoe.id == id
    });

    return (
      <div className="container">
        <박스>
            {/* <제목 색상={'red'} className='red'>Detail</제목> */}
            <제목 className='red'>Detail</제목>
        </박스>
        {
            alert==true
            ?
            (<div className="my-alert-red">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>)
            : null
        }

        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes`+ (찾은상품.id+1)+`.jpg`} width="100%"></img>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.goBack();
            }}>뒤로가기</button>
          </div>
        </div>
    </div> 
    )
}

export default Detail;