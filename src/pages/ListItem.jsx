import React from 'react';
import { List, Space } from 'antd';
import { HeartTwoTone, MessageOutlined, LikeOutlined } from '@ant-design/icons';

const ListItem = () => {
  const listData = [];
  for (let i = 0; i < 10; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `태백산 ${i}`,
      description: '강원도 태백시 태백산로 4778',
      content:
        '태백산은 1989년 5월 13일 도립공원으로 지정되었으며, 2016년 우리나라 22번째 국립공원으로 지정되었다. 전체면적은 70.052㎢이며 천제단이 있는 영봉(1,560m)을 중심으로 북쪽에 장군봉(1,567m) 동쪽에 문수봉(1,517m), 영봉과 문수봉 사이의 부쇠봉(1,546m) 등으로 이뤄져 있으며, 최고봉은 함백산(1,572m)이다.',
    });
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={HeartTwoTone}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="mountain"
                src="https://tour.taebaek.go.kr/page/tour/images/sub/bg-always-taebaek-park-02.jpg"
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};

export default ListItem;
