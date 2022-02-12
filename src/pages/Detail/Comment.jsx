import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { FormContainer, Container, Writing, ImgM } from './Detail.style';
import { Form, Input, Button, Row } from 'antd';

const Comment = () => {
  const [mountainInfo, setMountainInfo] = useState(undefined); //산정보
  const [imgUrl, setImgUrl] = useState(undefined);             //이미지

  const [tagValue, setTagValue] = useState([]);
  const history = useHistory();
  const [form] = Form.useForm();

  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:3000/data/data.json');
      if (!completed) {
        setMountainInfo(response.data.mountains[0].mountainInfo);
        setImgUrl(response.data.mountains[0].imgUrl);
        //console.log("1: "+ response.data.mountains[0].addressDetail);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  const onFinish = async values => { alert(1);
    const createdAt = moment().format('YYYY.MM.DD HH:mm:ss');
    const newComment = {
      ...values,
      createdAt,
      viewCount: 0,
      writer: { id: '123', name: '닉네임', userImg: 'https://tour.taebaek.go.kr/page/tour/images/sub/bg-always-taebaek-park-02.jpg' },
    };
    try {
      await axios.post('http://localhost:3000/data/data.json', newComment);
      history.push('/detail'); // 현재 생성된 포스트의 id를 알아내서 해당 detail 페이지로 이동시키기
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>댓글</h2>
      <Container>
        <ImgM alt="empty" src={imgUrl} />
        <Writing>{mountainInfo}</Writing>
        <Button>수정</Button>
        <Button>삭제</Button>
      </Container>
      <Container onFinish={onFinish}>
        <Row justify="center">
          <Form form={form} style={{ width: '600px', marginTop: '30px' }} onFinish={onFinish}>
            <Form.Item>
              <Input.TextArea name="content"
                rows={4}
                placeholder="내용을 입력하세요"
                size="large"
                showCount
                maxLength={1000}
              />
              <Button htmlType="submit" type="primary" size="large" style={{ marginTop: '20px' }}>
                작성
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Comment;
