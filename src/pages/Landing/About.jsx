import React from "react";
import { Wrapper, Description, Title, Text } from "./About.styles";
import backImg from "../../src_assets/back.jpg";

const About = () => {
  return (
    <>
      <Wrapper bgColor="white" id="about">
        <div style={{ marginBottom: "6rem" }}>
          <Title id="about-text">
            <br />
            <br />
            <br />
            내 주변 산을 검색해보자!
            <br />
            <br />
            <br />
          </Title>
          <Description id="about-text">
            <img src={backImg} alt="image"></img>
            <div>
              <Text>
                하나!
                <br />
                내가 가고싶은 산 검색
              </Text>
            </div>
          </Description>
          <Description id="about-text">
            <div>
              <Text>
                둘!
                <br />
                내가 가고싶은 산 검색
              </Text>
            </div>
            <img src={backImg} alt="image"></img>
          </Description>
          <Description id="about-text">
            <img src={backImg} alt="image"></img>
            <div>
              <Text>
                셋!
                <br />
                내가 가고싶은 산 검색
              </Text>
            </div>
          </Description>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
