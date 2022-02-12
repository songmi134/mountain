import React, { useState, useEffect } from 'react';
import { Title, Container, GridContainer, LikedMountainImg } from './My.style';
import { Row } from 'antd';
import axios from 'axios';

const MyMountains = () => {
  const [mountainCount, setMountainCount] = useState(0);
  const [mountains, setMountains] = useState(undefined);

  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('/likes/me/mountains');
      if (!completed) {
        setMountains(response.data);
        setMountainCount(response.data.length);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  return (
    <>
      <Title>내가 찜한 산 {mountainCount}개</Title>
      <Container>
        <GridContainer>
          {mountains ? (
            mountains.map(v => (
              <LikedMountainImg src={v.imgUrl[0]} alt="mountains" />
            ))
          ) : (
            <Row>찜한 산이 없습니다.</Row>
          )}
        </GridContainer>
      </Container>
    </>
  );
};

export default MyMountains;
