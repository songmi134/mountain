import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Radio } from 'antd';
import { FormContainer, FormInput, FormButton } from './Community.style';
import axios from 'axios';

const WritingForm = () => {
  const [category, setCategory] = useState(undefined);

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
    <Row>
      <FormContainer>
        <Radio.Group defaultValue={1} buttonStyle="solid">
          {category ? (
            category.map(v => (
              <Radio.Button key={v.cateId} value={v.cateId}>
                {v.cateName}
              </Radio.Button>
            ))
          ) : (
            <Row>Loading...</Row>
          )}
        </Radio.Group>
        <Form.Item>
          <FormInput placeholder="제목을 입력하세요" />
        </Form.Item>
        <Form.Item>
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
            <FormButton type="primary" size="large">
              글쓰기
            </FormButton>
          </Form.Item>
        </Row>
      </FormContainer>
    </Row>
  );
};

export default WritingForm;
