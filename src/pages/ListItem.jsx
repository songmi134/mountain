import React, { useState, useEffect } from 'react';
import { List, Space } from 'antd';
import { HeartTwoTone, MessageOutlined, LikeOutlined } from '@ant-design/icons';
import axios from 'axios';

const ListItem = () => {
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const [mountains, setMountains] = useState(undefined);

  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:4000/mountains');
      if (!completed) {
        setMountains(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

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
        dataSource={mountains}
        renderItem={item => (
          <List.Item
            key={item.mountainNo}
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
            extra={<img width={272} alt="mountain" src={item.imgUrl[0]} />}
          >
            <List.Item.Meta
              title={<a href={item.orgUrl}>{item.mountainName}</a>}
              description={item.addressDetail}
            />
            {item.mountainInfo}
          </List.Item>
        )}
      />
    </>
  );
};

export default ListItem;
