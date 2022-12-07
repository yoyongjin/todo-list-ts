import React from "react";

import styled from "styled-components";
import TodoForm from "./components/TodoForm";

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
      <TodoForm />
    </AppContainer>
  );
}

export default App;
