// import { Action } from "redux";
// import { ActionType, createAction, createReducer } from "typesafe-actions";

// interface TodoData {
//   id: number;
//   title: string;
//   isComplete: boolean;
// }
// interface TodosState {
//   todoItems: TodoData[];
// }

// const ADD = "todo/ADD";
// const DEL = "todo/DEL";
// const CHECK = "todo/CHECK";
// // typesafe-actions 안쓰면 const ADD = "todo/ADD" as const;

// // createAction으로 액션 생성 함수 선언
// export const add = createAction(ADD)<TodosState>();
// export const del = createAction(DEL)<number>();
// export const check = createAction(CHECK)<number>();

// // add, delete, check : actions객체에 모든 액션생성함수 넣고 ActionType으로 감싸준다.
// const actions = { add, del, check };
// type TodoActions = ActionType<typeof actions>;

// const initialState: TodosState = { todoItems: [] };

// const todo = createReducer<TodosState, TodoActions>(initialState, {
//   [ADD]: (state, action) => ({
//     ...state,
//     todoItems: [...state.todoItems, action.payload],
//   }),
//   [DEL]: (state, action) => ({
//     // 선택된 todo의 id값을 payload로 받아 그 todo를 삭제해주는 action
//     ...state,
//     todoItems: state.todoItems.filter(
//       (todo: { id: number }) => todo.id !== action.payload
//     ),
//   }),
//   [CHECK]: (state, action) => ({
//     ...state,
//     todoItems: state.todoItems.map((todo) =>
//       todo.id === action.payload
//         ? { ...todo, isComplete: !todo.isComplete }
//         : todo
//     ),
//   }),
// });
