import styled from 'styled-components';
import { Row } from 'antd';

export const Title = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled(Row)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`;

export const Writing = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ImgS = styled.img`
  width: 40px;
  height: 40px;  
`;

export const ImgM = styled.img`
  border-radius: 10px;
  width: 32px;
  height: 32px;  
`;

export const ImgL = styled.img`
  margin-top: 20px;
  width: 600px;
  height: 270.01px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;

`;

export const List = styled.div`
  width: 600px;

`;