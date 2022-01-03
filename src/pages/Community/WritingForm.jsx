import React from 'react';
import { Form, Input, Button, Tag, Row } from 'antd';

const WritingForm = () => {
  return (
    <Row justify="center">
      <Form style={{ width: '700px', marginTop: '30px' }}>
        <Tag
          color="var(--color-dark-green)"
          style={{ borderRadius: '10px', marginBottom: '10px' }}
        >
          산후기
        </Tag>
        <Form.Item>
          <Input
            placeholder="제목을 입력하세요"
            size="large"
            style={{ height: '60px', fontSize: '2rem', fontWeight: 'bold' }}
          />
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
            <Button type="primary" size="large" style={{ marginTop: '20px' }}>
              글쓰기
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Row>
  );
};

export default WritingForm;
