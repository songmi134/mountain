import React, { useState, useEffect } from 'react';
import { Button, Row, Table, Tag, Layout, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { COLORS } from '../.././constants';
import axios from 'axios';
import {
  Title,
  ColoredTag,
  MainContainer,
  SubContainer,
} from './Community.style';

const Community = () => {
  const { Header, Content } = Layout;
  const { Search } = Input;

  const columns = [
    { title: 'No', dataIndex: 'id' },
    {
      title: '제목',
      dataIndex: 'title',
      render: (text, record) => (
        <Link to={{ pathname: `/community/detail/${record.id}` }}>{text}</Link>
      ),
    },
    {
      title: '작성자',
      dataIndex: 'writer',
      render: text => text.name,
      sorter: {
        compare: (a, b) => a.writer - b.writer,
        multiple: 3,
      },
    },
    {
      title: '작성일',
      dataIndex: 'createdAt',
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 2,
      },
    },
    {
      title: '조회수',
      dataIndex: 'viewCount',
      sorter: {
        compare: (a, b) => a.views - b.views,
        multiple: 1,
      },
    },
  ];

  const [allPosts, setAllPosts] = useState(undefined);
  const [category, setCategory] = useState(undefined);

  // 검색 기능 구현
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (allPosts) {
      const filterTitle = allPosts.filter(post =>
        post.title.includes(userInput)
      );
      setAllPosts(filterTitle);
    }
  }, [userInput]);

  // 임시 데이터 - 커뮤니티
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:4000/community');
      if (!completed) {
        setAllPosts(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  // 태그 필터링 기능 구현

  // 표 필터링 기능 구현
  function onChange(filters, sorter, extra) {
    console.log('params', filters, sorter, extra);
  }

  // 임시 데이터 - 카테고리
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:4000/category');
      if (!completed) {
        setCategory(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  return (
    <>
      <MainContainer>
        <Layout>
          <Title>산에 대해 자유롭게 이야기를 나눠요</Title>

          <Content>
            {category ? (
              <Row justify="center" style={{ margin: '20px' }}>
                {category.map(v => {
                  return <ColoredTag key={v.cateId}>{v.cateName}</ColoredTag>;
                })}
              </Row>
            ) : (
              <Row>Loading...</Row>
            )}

            <Row justify="center" align="space-between">
              <Form>
                <Form.Item name="search">
                  <Search
                    placeholder="글 제목을 검색하세요"
                    onSearch={setUserInput}
                  />
                </Form.Item>
              </Form>
              <Link to="/form">
                <Button type="primary">글쓰기</Button>
              </Link>
            </Row>

            <Row align="center">
              <Table
                columns={columns}
                dataSource={allPosts}
                onChange={onChange}
                pagination={false}
                style={{ width: '100%' }}
              ></Table>
            </Row>
          </Content>
        </Layout>
      </MainContainer>
    </>
  );
};

export default Community;
