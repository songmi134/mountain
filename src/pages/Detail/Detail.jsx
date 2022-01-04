import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import data from './data'; 

const Showcase = styled.div`
  /* Auto Layout */
  position: absolute;
  width: 478px;
  height: 88px;
  left: 483px;
  top: 303px;

  div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
  }

`;

const Detail = () => {

  const [mountains, setMountains] = useState(undefined);
  /*
  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:3000/data/data.json');
      if (!completed) {
        setMountains(response.data);
        console.log("1: ", response.data);
        console.log("2: ", mountains);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);
  */
  return (
  <>
    <Showcase>
      <h1>{data.data[0].mountainName}</h1>
      <h2>설명</h2>
      <div>{data.data[0].mountainInfo}</div>
      <h2>교통정보</h2>
      <div>{data.data[0].transInfo}</div>
      <hr></hr>
      <h2>댓글</h2>
    </Showcase>
  </>
  );
};

export default Detail;
