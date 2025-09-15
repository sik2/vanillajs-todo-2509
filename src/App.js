import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
  const intialState = ["할일1", "할일2", "할일3"];

  const onSumbit = (text) => {
    const nextState = [...intialState, text];

    console.log(nextState); // state 추가 검증
  };

  new TodoForm({ $target, onSumbit });
  new TodoList({ $target, intialState });
}
