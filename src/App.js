import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
  new TodoForm({ $target });
  new TodoList({ $target });
}
