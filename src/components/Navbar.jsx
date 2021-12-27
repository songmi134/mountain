import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Avatar, Row, Col } from 'antd';
import { HeatMapOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [current, setCurrent] = useState('main');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{
        padding: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '30px',
      }}
    >
      {/* <Col> */}
      <Menu.Item key="main">
        <Link to="/">
          <HeatMapOutlined />
        </Link>
      </Menu.Item>

      <Menu.Item key="list">
        <Link to="/list">산 검색</Link>
      </Menu.Item>

      <Menu.Item key="community">
        <Link to="/community">커뮤니티</Link>
      </Menu.Item>
      {/* </Col> */}

      {/* <Col
        // span={2}
        // offset={14}
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        // }}
        > */}
      <Menu.Item key="login">
        {/* <Avatar
          style={{
            backgroundColor: '#87d068',
            cursor: 'pointer',
          }}
          icon={<UserOutlined />}
        /> */}
        Login
      </Menu.Item>
      {/* </Col> */}
    </Menu>
  );
};

export default Navbar;
