import React, { useState, useEffect } from 'react';
import { Button, Row, Layout, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Title,
  MainContainer,
  SubContainer,
  CateContainer,
  CommunityTable,
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
        <Link to={{ pathname: `/community/${record.commupostNo}` }}>
          {text}
        </Link>
      ),
    },
    {
      title: '작성자',
      dataIndex: 'writer',
      render: text => text?.name,
    },
    {
      title: '작성일',
      dataIndex: 'createdAt',
      sorter: {
        compare: (a, b) => a.date - b.date, // TODO : 백엔드 API
        multiple: 2,
      },
    },
    {
      title: '조회수',
      dataIndex: 'viewCount',
      sorter: {
        compare: (a, b) => a.views - b.views, // TODO : 백엔드 API
        multiple: 1,
      },
    },
  ];

  // 표 정렬 기능 - API
  // function onChange(filters, sorter, extra) {
  //   console.log('params', filters, sorter, extra);
  // }

  const [allPosts, setAllPosts] = useState(undefined);
  const [categories, setCategories] = useState(undefined);
  const [cateId, setCateId] = useState(undefined);

  // 검색 기능 - API 완성 후 추가
  // const [userInput, setUserInput] = useState('');

  // useEffect(() => {
  //   let completed = false;
  //   const getMountains = async () => {
  //     const response = await axios.get('/communities', {
  //       params: { title: userInput, cateId },
  //     });

  //     if (!completed) {
  //       setAllPosts(response.data.content);
  //     }
  //   };
  //   getMountains();
  //   return () => {
  //     completed = true;
  //   };
  // }, [userInput]);

  // 데이터 가져오는 것을 hook으로 만들기 (custom hook)
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('/communities', {
        params: { cateId },
      });
      if (!completed) {
        setAllPosts(response.data.content);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, [cateId]);

  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('/categories');
      if (!completed) {
        setCategories(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  const handleCateIdChange = v => {
    const selectedcateId = v.target.value;
    if (selectedcateId === 0) {
      setCateId(undefined);
    } else {
      setCateId(selectedcateId);
    }
  };

  return (
    <MainContainer>
      <Layout>
        <Title>산에 대해 자유롭게 이야기를 나눠요</Title>

        <Content>
          {categories ? (
            <CateContainer>
              <Radio.Group
                defaultValue={0}
                buttonStyle="solid"
                onChange={handleCateIdChange}
              >
                <Radio.Button value={0}>모든 글</Radio.Button>
                {categories.content.map(v => (
                  <Radio.Button key={v.cateId} value={v.cateId}>
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
                  // onSearch={setUserInput}
                />
              </Form.Item>
            </Form>
            <Link to="/community/new">
              <Button type="primary">글쓰기</Button>
            </Link>
          </SubContainer>

          <Row align="center">
            <CommunityTable
              columns={columns}
              dataSource={allPosts}
              pagination={false}
              // onChange={onChange}
            />
          </Row>
        </Content>
      </Layout>
    </MainContainer>
  );
};

export default Community;
