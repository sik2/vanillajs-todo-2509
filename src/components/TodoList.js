// ./src/components/TodoList.js
import TodoItem from "./TodoItem.js";

export default function TodoList({
  $target,
  initialState,
  onDelete,
  onToggle,
}) {
  const $list = document.createElement("div");

  // 오타 수정: intialState -> initialState
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  // 부모에서 이벤트 위임 (그대로 유지)
  $list.addEventListener("click", (e) => {
    const idAttr = e.target.getAttribute("data-id");
    if (!idAttr) return;
    const id = parseInt(idAttr, 10);

    if (e.target.classList.contains("del_btn")) {
      onDelete(id);
    } else if (e.target.classList.contains("toggle_btn")) {
      onToggle(id);
    }
  });

  this.render = () => {
    $list.innerHTML = `
      <ul>
        ${this.state.map(TodoItem).join("")}
      </ul>
    `;
  };

  this.render();
  $target.appendChild($list);
}
