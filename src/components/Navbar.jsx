import React, { useState } from 'react';
import logo from '.././src_assets/mountain-logo.png';
import { Link } from 'react-router-dom';
import { Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { COLORS } from '.././constants';

const Nav = styled.div`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 50px;
`;

const AvatarWrapper = styled(Avatar)`
  background-color: ${COLORS.primary};
`;

const Navbar = () => {
  const [current, setCurrent] = useState('main');

  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <Nav>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="main">
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

        <Menu.Item key="login">
          <Link to="/my">
            <AvatarWrapper icon={<UserOutlined />} />
          </Link>
        </Menu.Item>
      </Menu>
    </Nav>
  );
};

export default Navbar;
