import React from 'react';
import styled from 'styled-components';
import Mountaininfo from './Mountaininfo';
import Comment from './Comment';
import { List } from './Detail.style';

const Showcase = styled.div`
  /* Auto Layout */
  position: flex;
  margin-top: 5%;
  margin-left: 30%;

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
  
  return (
  <>
    <Showcase>
      <List>
        <Mountaininfo />
        <hr></hr>
        <Comment />
      </List>
    </Showcase>
  </>
  );
};

export default Detail;
