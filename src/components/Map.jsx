/* global kakao */
import React, { useState, useEffect } from 'react';
import { Switch, Row } from 'antd';

const { kakao } = window;

const Map = () => {
  const [terrain, setTerrain] = useState(true);

  useEffect(() => {
    const container = document.getElementById('map');

    const options = {
      center: new kakao.maps.LatLng(35.85133, 127.734086),
      level: 10,
    };

    const map = new kakao.maps.Map(container, options);

    if (!terrain) {
      map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
    } else {
      map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
    }
  }, [terrain]);

  const onChange = boolean => {
    setTerrain(!boolean);
  };

  return (
    <>
      <div
        id="map"
        style={{
          width: '500px',
          height: '500px',
        }}
      ></div>
      <Row>
        지형정보 보기
        <Switch onChange={onChange}></Switch>
      </Row>
    </>
  );
};

export default Map;
