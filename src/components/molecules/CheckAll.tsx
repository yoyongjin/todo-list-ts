import React from "react";
import styled from "styled-components";
import CheckBox from "../atoms/CheckBox";

const Container = styled.div`
  display: flex;
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
