import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col } from 'antd';

const Searchbar = () => {
  const [height, setHeight] = useState(50);

  const onChange = v => {
    setHeight(v);
  };

  const marks = {
    50: '50m',
    // 500: '500m',
    1000: '1000m',
    // 1500: '1500m',
    2000: '2000m',
  };

  // 패딩 반응형으로 수정
  return (
    <Row>
      <Row>
        <Row>산 높이</Row>

        <Col span={20}>
          <Slider
            min={50}
            max={2000}
            onChange={onChange}
            value={typeof height === 'number' ? height : 0}
            step={50}
            marks={marks}
          />
        </Col>

        <Col span={4}>
          <InputNumber
            min={50}
            max={2000}
            style={{ margin: '0 16px' }}
            value={height}
            onChange={onChange}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default Searchbar;
