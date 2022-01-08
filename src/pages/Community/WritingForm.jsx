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
      history.push('/community');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row>
      <FormContainer onFinish={onFinish}>
        <Radio.Group
          defaultValue={1}
          buttonStyle="solid"
          onChange={handleCategoryChange}
        >
          {categories ? (
            categories.map(v => (
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
