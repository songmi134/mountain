import React, { useState, useEffect } from 'react';
import { Switch, Row } from 'antd';

const { kakao } = window;

const MapContainer = () => {
  const [terrain, setTerrain] = useState(true);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.85133, 127.734086),
      level: 7,
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
      <Row>
        지형정보 보기
        <Switch onChange={onChange}></Switch>
      </Row>
      <div
        id="map"
        style={{
          width: '40vw',
          height: '70vh',
        }}
      ></div>
    </>
  );
};

export default MapContainer;
