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
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

const Detail = () => {
  const { Footer } = Layout;

  const [isModalVisible, setIsModalVisible] = useState(false); // 빼기
  const [post, setPost] = useState(undefined);
  const history = useHistory();
  const params = useParams();
  const postNo = params.id;

  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get(`/communities/${postNo}`);
      if (!completed) {
        const createdAt = moment(response.data.createdAt).format(
          'YYYY.MM.DD HH:mm:ss'
        );
        setPost({ ...response.data, createdAt });
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  const showDeleteConfirm = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async () => {
    console.log('deleted');
    try {
      await axios.delete(`/communities/${postNo}`);
      history.push('/community');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {post ? (
        <Container>
          <Layout>
            <Row justify="center">
              <Title>{post.title}</Title>
            </Row>
            <Row justify="space-around">
              <ColoredCategory>{post.category}</ColoredCategory>
              <Row>작성일 {post.createdAt}</Row>
              <Row>작성자 {post.writer?.name}</Row>
              <Row>조회수 {post.viewCount}</Row>
            </Row>
            <Description>{post.content}</Description>

            <Row justify="end">
              <Space>
                <Button type="primary">
                  <Link
                    to={{
                      pathname: `/community/update/${postNo}`,
                      state: {
                        postNo: post.commupostNo,
                        title: post.title,
                        category: post.category,
                        content: post.content,
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
        <Row>로딩중...</Row>
      )}

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        centered
        title="이 글을 정말 삭제하시겠습니까?"
        onOk={handleDelete}
      >
        <p>삭제한 글은 복구할 수 없습니다.</p>
      </Modal>
    </>
  );
};

export default Detail;
