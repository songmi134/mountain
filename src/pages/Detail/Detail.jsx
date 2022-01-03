import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = () => {

  const [mountains, setMountains] = useState(undefined);

  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:3000/data/data.json');
      if (!completed) {
        setMountains(response.data);
        console.log("secondly: ", mountains.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  return (
  <>
    <div>${mountains.data.mountainName}</div>
    <div>Detail page</div>
    <div>Detail page</div>
    <div>Detail page</div>
    <div>Detail page</div>
  </>
  );
};

export default Detail;
