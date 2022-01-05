import React from 'react';
import styled from 'styled-components';
import Mountaininfo from './Mountaininfo';
import { Form, Input, Button, Tag, Row } from 'antd';
import { Title, Description, Container, ColoredTag } from './Detail.style';

const Showcase = styled.div`
  /* Auto Layout */
  position: absolute;
  width: 478px;
  height: 88px;
  left: 483px;
  top: 103px;

  img {
    margin-top: 20px;
    width: 480px;
    height: 270.01px;
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
  
  return (
  <>
    <Showcase>
      <Mountaininfo />
      <hr></hr>
      <h2>댓글</h2>
      <Row justify="center">
        <Form style={{ width: '700px', marginTop: '30px' }}>
          <Form.Item>
            <Input.TextArea
              rows={4}
              placeholder="내용을 입력하세요"
              size="large"
              showCount
              maxLength={1000}
            />
            <Button type="primary" size="large" style={{ marginTop: '20px' }}>
              작성
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Showcase>
  </>
  );
};

export default Detail;
