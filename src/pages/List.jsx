import React, { useState } from 'react';
import ListItem from './ListItem';
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col } from 'antd';
import Map from '../components/Map';

const List = () => {
  const [height, setHeight] = useState(50);

  const onChange = v => {
    console.log(v);
    setHeight(v);
  };

  const marks = {
    50: '50m',
    // 500: '500m',
    1000: '1000m',
    // 1500: '1500m',
    2000: '2000m',
  };

  return (
    <Row style={{ padding: '30px 100px 30px 100px' }}>
      <Col span={12}>
        <Row>
          <Map />
        </Row>

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
      </Col>

      <Col span={12}>
        <ListItem />
      </Col>
    </Row>
  );
};

export default List;
