import React, { useState } from 'react';
import logo from '.././src_assets/mountain-logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Nav, Logo, AvatarWrapper } from './Navbar.style';

const Navbar = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname.split('/').pop());

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Nav>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="">
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </Menu.Item>

        <Menu.Item key="search">
          <Link to="/mountain/search">산 검색</Link>
        </Menu.Item>

        <Menu.Item key="community">
          <Link to="/community">커뮤니티</Link>
        </Menu.Item>

        <Menu.Item key="my">
          <Link to="/my">
            <AvatarWrapper icon={<UserOutlined />} />
          </Link>
        </Menu.Item>
      </Menu>
    </Nav>
  );
};

export default Navbar;
s;
