import React, { useState } from 'react';
import logo from '.././src_assets/mountain-logo.png';
import { Link } from 'react-router-dom';
import { Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
        backgroundColor: '#B5D2B9',
      }}
    >
      <Menu.Item key="main">
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: '50px' }} />
        </Link>
      </Menu.Item>

      <Menu.Item key="list">
        <Link to="/list">산 검색</Link>
      </Menu.Item>

      <Menu.Item key="community">
        <Link to="/community">커뮤니티</Link>
      </Menu.Item>

      <Menu.Item key="login">
        <Link to="/login">
          <Avatar
            style={{
              backgroundColor: '#305136',
              cursor: 'pointer',
            }}
            icon={<UserOutlined />}
          />
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
