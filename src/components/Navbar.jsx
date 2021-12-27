import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HeatMapOutlined } from '@ant-design/icons';

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
        marginBottom: '30px',
        padding: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
      }}
    >
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
    </Menu>
  );
};

export default Navbar;
