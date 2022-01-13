import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Radio } from 'antd';
import { FormContainer, FormInput, FormButton } from './Community.style';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const WritingForm = () => {
  const [categories, setCategories] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const history = useHistory();
  const state = history.location.state;

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
    const createdAt = moment().format('YYYY.MM.DD HH:mm:ss');
    const newPost = {
      ...values,
      createdAt,
      category,
      viewCount: 0,
      writer: { name: '닉네임' },
    };
    try {
      await axios.post('http://localhost:4000/community', newPost);
      history.push('/community'); // 현재 생성된 포스트의 id를 알아내서 해당 detail 페이지로 이동시키기
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async values => {
    const id = state.id;
    const updatedAt = moment().format('YYYY.MM.DD HH:mm:ss');
    const updatedPost = { ...values, updatedAt, category };
    try {
      await axios.patch(`http://localhost:4000/community/${id}`, updatedPost);
      history.push(`/community/detail/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row>
      <FormContainer
        onFinish={state ? handleEdit : onFinish}
        fields={[
          { name: ['title'], value: state?.title },
          { name: ['content'], value: state?.content },
        ]}
      >
        <Radio.Group
          defaultValue={state ? state.category : '산 후기'}
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
