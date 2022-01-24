import styled from 'styled-components';
import backImg from '../../src_assets/back.jpg';

export const Description = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-weight: 300;
  opacity: 0;
  transform: translateY(60px);
  padding-right: 5%;
  padding-left: 5%;

  img {
    width: 50%;
    margin: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.div`
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-style: italic;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(60px);

  background: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Text = styled.div`
  margin: 3rem;
  font-size: 2.5rem;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;


