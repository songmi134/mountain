import { COLORS } from '../.././constants';
import styled from 'styled-components';
import { Row, Tag } from 'antd';

export const Title = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
`;

export const Description = styled(Row)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`;

export const Container = styled(Row)`
  width: 700px;
  margin: auto;
  align: center;
  justify: center;
`;

export const ColoredTag = styled(Tag)`
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 10px;
`;
