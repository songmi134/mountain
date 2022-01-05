import { COLORS } from '../.././constants';
import styled from 'styled-components';
import { Row, Tag } from 'antd';

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 20px;
`;

export const Description = styled(Row)`
  border: 1px solid ${COLORS.primary};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  line-height: 1.8;
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
