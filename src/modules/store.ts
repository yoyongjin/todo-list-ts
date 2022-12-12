import { createStore } from "redux";

interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
}

const initialState: Todo[] = [];

const counterReducer = (state = initialState, action: any) => {
  if (action.type === "add") {
    return [...state, action.payload];
    // 여기서 action.payload는 새로 받는 todo객체 : Todo
  }

  if (action.type === "delete") {
    // return {
    //   counter: state.counter + action.amount,
    //   showCounter: state.showCounter,
    // };
    return state.filter((id) => action.payload.id !== id);
    // payload로 받은(선택된) todo객체의 id와 다른 id를 가지는 애들만 골라서 return
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
