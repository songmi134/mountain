import React, { useState, useEffect } from 'react';
import heart from '../../src_assets/heart3.png';
import axios from 'axios';
import { Header, Title, Description, ImgL, ImgS } from './Detail.style';

const Mountaininfo = () => {
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
      <Header>
        <Title>{mountainName}</Title>
        <ImgS alt="empty" src={heart} />
      </Header>
      <ImgL alt="empty" src={imgUrl} />
      <h2>설명</h2>
      <Description>{mountainInfo}</Description>
      <h2>교통정보</h2>
      <Description>{transInfo}</Description>
    </>
  );
};

export default Mountaininfo;
