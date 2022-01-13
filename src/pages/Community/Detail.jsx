import React, { useState, useEffect } from 'react';
import { Row, Button, Space, Layout, Modal } from 'antd';
import Comments from '../../components/Comments';
import {
  Title,
  Description,
  Container,
  ColoredCategory,
} from './Community.style';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Detail = ({ history }) => {
  const { Footer } = Layout;

  const [community, setCommunity] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const idx = history.location.pathname.split('/').pop() - 1;
  const id = idx + 1;

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

  // 삭제 시 모달 띄우기
  const showDeleteConfirm = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async () => {
    console.log('deleted');
    try {
      await axios.delete(`http://localhost:4000/community/${id}`);
      history.push('/community');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {community ? (
        <Container>
          <Layout>
            <Row justify="center">
              <Title>{community[idx].title}</Title>
            </Row>
            <Row justify="space-around">
              <ColoredCategory>{community[idx].category}</ColoredCategory>
              <Row>작성일 {community[idx].createdAt}</Row>
              <Row>작성자 {community[idx].writer?.name}</Row>
              <Row>조회수 {community[idx].viewCount}</Row>
            </Row>
            <Description>{community[idx].content}</Description>

            <Row justify="end">
              <Space>
                <Button type="primary">
                  <Link
                    to={{
                      pathname: `/update/${id}`,
                      state: {
                        id: community[idx].id,
                        title: community[idx].title,
                        category: community[idx].category,
                        content: community[idx].content,
                      },
                    }}
                  >
                    수정
                  </Link>
                </Button>
                <Button type="primary" onClick={showDeleteConfirm}>
                  삭제
                </Button>
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
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        centered
        title="이 글을 정말 삭제하시겠습니까?"
        onOk={handleDelete}
        //  post={post}
      >
        <p>삭제한 글은 복구할 수 없습니다.</p>
      </Modal>
    </>
  );
};

export default Detail;
