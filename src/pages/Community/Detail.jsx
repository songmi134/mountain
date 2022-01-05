import React from 'react';
import { Row, Button, Space, Layout, Tag } from 'antd';
import Comments from '../../components/Comments';
import { Title, Description, Container, ColoredTag } from './Detail.style';

const Detail = () => {
  const { Footer } = Layout;

  const data = [
    {
      id: 1,
      title: '저희 집 뒷산을 소개합니다',
      writer: {
        id: 'adasd',
        userImg: 'https://imageurl',
        name: '안지인',
      },
      category: '뒷산 자랑',
      content: `강원도 태백시와 경상북도 봉화군에 걸쳐 있는 산. 태백시 일대 17.440 km2만 도립공원으로 지정되어 있었으나 2016년 4월 1일 환경부 국립공원위원회에서 태백산 국립공원 지정안이 확정되면서 동년 8월 22일부터 영월, 정선, 삼척, 봉화 방면으로 확장, 총 면적 70.052km2의 대한민국의 22번째 국립공원이 된다. 주봉인 장군봉은 해발 1,566.7m. 태백산맥에서 소백산맥이 갈라져 나오는 지역에 위치한다. 아래 단군신화에 나오는 산은 아닌 것으로 보이지만, 이름이 같아서 그런지 정상 부근에 단군성전을 짓고(1987년), 천제단을 개수하여[3] 매년 단군에 제사를 지내는 의식을 치른다. 본래 이곳에는 태백천왕당(태백신사[4])이 있었으나 지금은 천제단만 남았다. 천제단 외에도 장군단, 부소단(구을단)이 있지만 크기도 작고 천제단보다 덜 유명하다.
    삼국사기의 기록에 의하면 신라시대의 오악 중 북악이라 신라 왕실이 제사 올리는 대상이었다.
    해발 1,470m 지점에 위치한 망경사는 대한민국(북한 제외) 사찰 중 해발고도가 가장 높다. 봉화군 쪽에는 조선왕조실록을 보관하는 사고가 있었다. 늦봄과 초여름에 걸쳐 철쭉이 아름답게 피어 철쭉제가 열리고 겨울철 설경이 아름다워 눈축제가 열린다.
    등산로는 북쪽 태백시 쪽 접근성이 훨씬 좋아서 태백시 쪽으로 오가는 등산객이 많다. 해발 1,566.7m로 꽤 높지만 오르기 쉬운 산으로 알려졌다.[5] 등산로 출발점이 해발 800m 이상 지점에 있으므로[6] 산 정상이 1,500m를 넘는다 한들 고도 700m 정도만 오르면 되는 데다가 산세도 그리 험하지 않으니 등산이 쉬울 수밖에 없다. 서울에서 북한산이나 관악산 오르기보다도 쉽다. 그래서 태백시에서는 학생들의 소풍 장소로도 이용된다. 태백시에서는 학교 소풍을 해발 1,500m가 넘는 산으로 가는 것. 태백산이 얼마나 오르기 쉬운지 알 수 있다. 중국 산둥성에 있는 태산과 높이가 비슷하다.
    `,
      viewCount: 710,
      createdAt: '2022.1.4',
      updatedAt: '',
    },
  ];

  return (
    <Container>
      <Layout>
        <Row justify="center">
          <Title>{data[0].title}</Title>
        </Row>
        <Row justify="space-around">
          <ColoredTag>{data[0].category}</ColoredTag>
          <Row>작성일 {data[0].createdAt}</Row>
          <Row>작성자 {data[0].writer.name}</Row>
          <Row>조회수 {data[0].viewCount}</Row>
        </Row>
        <Description>{data[0].content}</Description>

        <Row justify="end">
          <Space>
            <Button type="primary">수정</Button>
            <Button type="primary">삭제</Button>
          </Space>
        </Row>

        <Footer>
          <Comments />
        </Footer>
      </Layout>
    </Container>
  );
};

export default Detail;
