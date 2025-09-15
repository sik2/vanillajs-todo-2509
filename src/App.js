import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
  const intialState = [
    { id: 1, text: "할일1", checked: true },
    { id: 2, text: "할일2", checked: false },
    { id: 3, text: "할일3", checked: false },
  ];

  let lastId = 4;

  const onSumbit = (text) => {
    const nextState = [...todoList.state, { id: lastId, text, checked: false }];
    todoList.setState(nextState);
    console.log(nextState);
    lastId++;
  };

  const onDelete = (id) => {
    const nextState = todoList.state.filter((todo) => todo.id !== id);
    todoList.setState(nextState);
    console.log(nextState);
  };

  new TodoForm({ $target, onSumbit });
  const todoList = new TodoList({ $target, intialState, onDelete });
}
