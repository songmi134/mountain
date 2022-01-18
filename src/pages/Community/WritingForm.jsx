import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Radio } from 'antd';
import { FormContainer, FormInput, FormButton } from './Community.style';
import axios from 'axios';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';

const WritingForm = () => {
  const [categories, setCategories] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const history = useHistory();

  const params = useParams();
  const postId = params.id;
  const [post, setPost] = useState(undefined);

  // TODO : 1/18 8:00PM
  // post를 비동기로 가져오게 되면서 생긴 문제 - 글 수정 시 카테고리 정보를 늦게 가져오게 됨
  // post가 있을 때와 없을 때의 차이를 어떻게 반영할 것인가?
  useEffect(() => {
    let completed = false;
    const getPost = async () => {
      const response = await axios.get(`/communities/${postId}`);
      if (!completed) {
        setPost(response.data);
        console.log(response.data);
      }
    };
    getPost();
    return () => {
      completed = true;
    };
  }, []);

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

  const handleCategoryChange = v => setCategory(v.target.value);

  const onFinish = async values => {
    // TODO: 로그인 붙인 이후, createAt 제거한 후 잘 되는지 확인
    const createdAt = moment().format('YYYY.MM.DD HH:mm:ss'); //백엔드 DB 저장시 - 백엔드에서 할지 or 프론트에서 한다면 어떤 format으로 할지
    const newPost = {
      ...values,
      createdAt,
      category,
      viewCount: 0,
      writer: { name: '닉네임' },
    };
    try {
      await axios.post('/communities', newPost);
      history.push('/community'); // 현재 생성된 포스트의 id를 알아내서 해당 detail 페이지로 이동시키기
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async values => {
    const updatedAt = moment().format('YYYY.MM.DD HH:mm:ss');
    const updatedPost = { ...values, updatedAt, category };
    try {
      await axios.patch(
        `http://localhost:4000/community/${postId}`,
        updatedPost
      );
      history.push(`/community/detail/${postId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row>
      <FormContainer
        onFinish={post ? handleEdit : onFinish}
        fields={[
          { name: ['title'], value: post?.title },
          { name: ['content'], value: post?.content },
        ]}
      >
        <Radio.Group
          defaultValue={post ? post.category : '산 후기'}
          buttonStyle="solid"
          onChange={handleCategoryChange}
        >
          {categories ? (
            categories.content.map(v => (
              <Radio.Button key={v.cateId} value={v.cateName}>
                {v.cateName}
              </Radio.Button>
            ))
          ) : (
            <Row>Loading...</Row>
          )}
        </Radio.Group>
        <Form.Item
          name="title"
          rules={[{ required: true, message: '제목을 입력하세요!' }]}
        >
          <FormInput placeholder="제목을 입력하세요" />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[{ required: true, message: '내용을 입력하세요!' }]}
        >
          <Input.TextArea
            rows={15}
            placeholder="내용을 입력하세요"
            size="large"
            showCount
            maxLength={1000}
          />
        </Form.Item>
        <Row align="end">
          <Form.Item>
            <FormButton type="primary" size="large" htmlType="submit">
              글쓰기
            </FormButton>
          </Form.Item>
        </Row>
      </FormContainer>
    </Row>
  );
};

export default WritingForm;
