import React, { useState, useEffect } from 'react';
import heart1 from '../../src_assets/heart3.png';
import heart2 from '../../src_assets/heart2.png';
import axios from 'axios';
import { Header, Title, Description, ImgL, ImgS } from './Detail.style';

const Mountaininfo = () => {
  const [mountainName, setMountainName] = useState(undefined); //산이름
  const [mountainInfo, setMountainInfo] = useState(undefined); //산정보
  const [transInfo, setTransInfo] = useState(undefined);       //교통정보
  const [imgUrl, setImgUrl] = useState(undefined);             //이미지
  const [likeYn, setLikeYn] = useState(0);                     //좋아요
  
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

  const imgChange = () => {
    
    if(likeYn === 0) {
      document.getElementById("imgS").src = heart2;
      setLikeYn(1);
    }else {
      document.getElementById("imgS").src = heart1;
      setLikeYn(0);
    }
  };

  return (
    <>
      <Header>
        <Title>{mountainName}</Title>
        <ImgS id="imgS" alt="empty" src={heart1} onClick={imgChange}/>
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
