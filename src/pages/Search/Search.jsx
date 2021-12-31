import React from 'react';
import { Row, Col } from 'antd';
import Searchbar from './Searchbar';
import MapContainer from '../.././components/MapContainer';
import MountainList from './MountainList';

const Search = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Searchbar />
          <MapContainer />
        </Col>
        <Col span={12}>
          <MountainList />
        </Col>
      </Row>
    </>
  );
};

export default Search;
