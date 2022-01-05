import React, { useState, useEffect } from 'react';
import { Row, Button, Space, Layout } from 'antd';
import Comments from '../../components/Comments';
import { Title, Description, Container, ColoredTag } from './Detail.style';
import axios from 'axios';

const Detail = () => {
  const { Footer } = Layout;

  const [community, setCommunity] = useState(undefined);

  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:4000/community');
      if (!completed) {
        setCommunity(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  return (
    <>
      {community ? (
        <Container>
          <Layout>
            <Row justify="center">
              <Title>{community[0].title}</Title>
            </Row>
            <Row justify="space-around">
              <ColoredTag>{community[0].category}</ColoredTag>
              <Row>작성일 {community[0].createdAt}</Row>
              <Row>작성자 {community[0].writer.name}</Row>
              <Row>조회수 {community[0].viewCount}</Row>
            </Row>
            <Description>{community[0].content}</Description>

            <Row justify="end">
              <Space>
                <Button type="primary">수정</Button>
                <Button type="primary">삭제</Button>
              </Space>
            </Row>

            <Footer>
              <Comments />
            </Footer>
          </Layout>
        </Container>
      ) : (
        <Row>Loading...</Row>
      )}
    </>
  );
};

export default Detail;
