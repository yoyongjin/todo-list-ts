import React from "react";
import styled from "styled-components";
import CheckBox from "../atoms/CheckBox";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 3px 0.5rem 0;
  /* background-color: #a3aea3; */
`;

const CheckAll = () => {
  return (
    <Container>
      <span>전체선택</span>
      <CheckBox />
    </Container>
  );
};

export default CheckAll;
