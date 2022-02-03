import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Writing, ImgM } from './Detail.style';
import { Form, Input, Button, Row } from 'antd';

const Comment = () => {
  const [mountainInfo, setMountainInfo] = useState(undefined); //산정보
  const [imgUrl, setImgUrl] = useState(undefined);             //이미지
  
  
  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:3000/data/data.json');
      if (!completed) {
        setMountainInfo(response.data.mountains[0].mountainInfo);
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
      <h2>댓글</h2>
      <Container>
        <ImgM alt="empty" src={imgUrl} />
        <Writing>{mountainInfo}</Writing>
        <Button>수정</Button>
        <Button>삭제</Button>
      </Container>
      <Container>
        <Row justify="center">
          <Form style={{ width: '600px', marginTop: '30px' }}>
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
      </Container>
    </>
  );
};

export default Comment;
