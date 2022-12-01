import React from "react";

import styled from "styled-components";
import TodoListTemplate from "./components/templates/TodoListTemplate";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
`;

function App() {
  return (
    <AppContainer>
      <TodoListTemplate />
    </AppContainer>
  );
}

export default App;
