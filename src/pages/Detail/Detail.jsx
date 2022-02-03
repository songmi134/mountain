import React from "react";
import styled from "styled-components";
import Mountaininfo from "./Mountaininfo";
import Comment from "./Comment";
import { Showcase, List } from "./Detail.style";

const Detail = () => {
  return (
    <>
      <Showcase>
        <List>
          <Mountaininfo />
          <hr></hr>
          <Comment />
        </List>
      </Showcase>
    </>
  );
};

export default Detail;
