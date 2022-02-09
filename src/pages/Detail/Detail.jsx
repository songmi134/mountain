import React from "react";
import Mountaininfo from "./Mountaininfo";
import MtComments from "../../components/MtComments";
import { Showcase, List } from "./Detail.style";

const Detail = () => {
  return (
    <>
      <Showcase>
        <List>
          <Mountaininfo />
          <hr></hr>
          <MtComments />
        </List>
      </Showcase>
    </>
  );
};

export default Detail;
