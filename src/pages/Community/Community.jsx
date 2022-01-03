import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <>
      <div>등산 커뮤니티</div>
      <Link to="/form">
        <Button>글쓰기</Button>
      </Link>
    </>
  );
};

export default Community;
