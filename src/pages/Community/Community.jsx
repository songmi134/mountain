import React, { useState, useEffect } from 'react';
import { Button, Row, Table, Layout, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Title,
  MainContainer,
  SubContainer,
  CateContainer,
} from './Community.style';

const Community = () => {
  const { Content } = Layout;
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
      render: text => text?.name,
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
  const [categories, setCategories] = useState(undefined);
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

  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:4000/community', {
        params: { category },
      });
      if (!completed) {
        setAllPosts(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, [category]);

  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:4000/category');
      if (!completed) {
        setCategories(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  const handleCategoryChange = v => {
    const selectedCategory = v.target.value;
    if (selectedCategory === '모든 글') {
      setCategory(undefined);
    } else {
      setCategory(selectedCategory);
    }
  };

  // 표 정렬 기능 구현
  function onChange(filters, sorter, extra) {
    console.log('params', filters, sorter, extra);
  }

  return (
    <>
      <MainContainer>
        <Layout>
          <Title>산에 대해 자유롭게 이야기를 나눠요</Title>

          <Content>
            {categories ? (
              <CateContainer>
                <Radio.Group
                  defaultValue="모든 글"
                  buttonStyle="solid"
                  onChange={handleCategoryChange}
                >
                  <Radio.Button value="모든 글">모든 글</Radio.Button>
                  {categories.map(v => (
                    <Radio.Button key={v.cateId} value={v.cateName}>
                      {v.cateName}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </CateContainer>
            ) : (
              <Row>Loading...</Row>
            )}

            <SubContainer>
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
            </SubContainer>

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
