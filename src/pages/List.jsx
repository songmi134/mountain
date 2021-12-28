import React, { useState } from 'react';
import ListItem from './ListItem';
import 'antd/dist/antd.css';
import { Input, Switch, Radio, Slider, InputNumber, Row, Col } from 'antd';
import Map from '../components/Map';

const List = () => {
  const { Search } = Input;
  const [height, setHeight] = useState(0);

  const onSearch = v => {
    console.log(v);
  };

  const onChange = v => {
    setHeight(v);
  };

  return (
    <Row style={{ padding: '30px 100px 30px 100px' }}>
      <Col span={12}>
        <Row>
          <Col span={6}>
            <Radio.Group defaultValue="location" size="large">
              <Radio.Button value="location">지역</Radio.Button>
              <Radio.Button value="mountain-name">산</Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={18}>
            <Search
              placeholder="지역이나 산을 검색하세요"
              onSearch={onSearch}
              size="large"
            />
          </Col>
        </Row>
        <Row>
          <Map />
        </Row>
        <Row>
          내주변 산 보기 <Switch defaultChecked />
        </Row>

        <Row>
          <Col span={12}>
            <Row>
              <Row>산 높이</Row>
              <Row>
                <Slider
                  min={1}
                  max={20}
                  onChange={onChange}
                  value={typeof height === 'number' ? height : 0}
                />
              </Row>
            </Row>
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={20}
              style={{ margin: '0 16px' }}
              value={height}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <ListItem />
      </Col>
    </Row>
  );
};

export default List;
