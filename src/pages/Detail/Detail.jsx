import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Showcase = styled.div`
  /* Auto Layout */
  position: absolute;
  width: 478px;
  height: 88px;
  left: 483px;
  top: 103px;

  div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
  }
  img {
    width: 480px;
    height: 270.01px;
  }
  h1 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
  }
  h2 {
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
  }
  hr {
    border: 1px solid #D9D9D9;
    margin-top: 40px;
    margin-bottom: 40px;
  }

`;

const Detail = () => {

  const [mountainName, setMountainName] = useState(undefined); //산이름
  const [mountainInfo, setMountainInfo] = useState(undefined); //산정보
  const [transInfo, setTransInfo] = useState(undefined);       //교통정보
  const [imgUrl, setImgUrl] = useState(undefined);             //이미지
  
  
  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:3000/data/data.json');
      if (!completed) {
        setMountainName(response.data.mountains[0].mountainName);
        setMountainInfo(response.data.mountains[0].mountainInfo);
        setTransInfo(response.data.mountains[0].addressDetail);
        setImgUrl(response.data.mountains[0].imgUrl);
        //console.log("1: "+ response.data.mountains[0].addressDetail);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);
  
  return (
  <>
    <Showcase>
      <h1>{mountainName}</h1>
      <img alt="empty" src={imgUrl} />
      <h2>설명</h2>
      <div>{mountainInfo}</div>
      <h2>교통정보</h2>
      <div>{transInfo}</div>
      <hr></hr>
      <h2>댓글</h2>
    </Showcase>
  </>
  );
};

export default Detail;
