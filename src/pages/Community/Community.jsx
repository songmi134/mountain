import React from 'react';
import { Button, Row, Table, Tag, Layout } from 'antd';
import { Link } from 'react-router-dom';

const Community = () => {
  const { Header, Footer, Content } = Layout;

  const columns = [
    { title: 'No', dataIndex: 'key' },
    { title: '제목', dataIndex: 'title' },
    {
      title: '작성자',
      dataIndex: 'writer',
      sorter: {
        compare: (a, b) => a.writer - b.writer,
        multiple: 3,
      },
    },
    {
      title: '작성일',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 2,
      },
    },
    {
      title: '조회수',
      dataIndex: 'views',
      sorter: {
        compare: (a, b) => a.views - b.views,
        multiple: 1,
      },
    },
  ];

  const data = [
    {
      key: '1',
      title: '저희 집 뒷산을 소개합니다.',
      writer: '홍길동',
      date: '2022.1.3',
      views: 701,
    },
    {
      key: '2',
      title: '저희 집 뒷산을 소개합니다.',
      writer: '홍길동',
      date: '2022.1.3',
      views: 701,
    },
    {
      key: '3',
      title: '저희 집 뒷산을 소개합니다.',
      writer: '홍길동',
      date: '2022.1.3',
      views: 701,
    },
  ];

  function onChange(filters, sorter, extra) {
    console.log('params', filters, sorter, extra);
  }

  return (
    <Row justify="center" aline="center">
      <Row style={{ width: '1200px' }}>
        <Layout style={{ backgroundColor: '#FFFFFF' }}>
          <Header
            style={{
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            산에 대해 자유롭게 이야기를 나눠요
          </Header>

          <Content>
            <Row>
              <Tag
                color="var(--color-dark-green)"
                style={{ borderRadius: '10px' }}
              >
                산후기
              </Tag>
              <Tag>산후기</Tag>
              <Tag>산후기</Tag>
              <Tag>산후기</Tag>
              <Tag>산후기</Tag>
            </Row>

            <Row align="end">
              <Link to="/form">
                <Button type="primary">글쓰기</Button>
              </Link>
            </Row>

            <Row align="center">
              <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                pagination={false}
                style={{ width: '100%' }}
              ></Table>
            </Row>
          </Content>
        </Layout>
      </Row>
    </Row>
  );
};

export default Community;
