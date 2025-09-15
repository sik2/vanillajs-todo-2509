export default function TodoList({ $target, intialState, onDelete, onToggle }) {
  const $list = document.createElement("div");

  this.state = intialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  $list.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onDelete(id);
    } else if (e.target.classList.contains("toggle_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onToggle(id);
    }
  });

  this.render = () => {
    $list.innerHTML = `
    <ul>
        ${this.state
          .map(
            (row) => `
            <li style="text-decoration: ${
              row.checked ? "line-through" : "none"
            }">
                <input 
                    type="checkbox" 
                    ${row.checked ? "checked" : ""}
                    data-id="${row.id}"
                    class="toggle_btn" 
                 />
                <span>[${row.id}]</span>
                <span>${row.text}</span>
                <button data-id="${row.id}" class="del_btn">🗑️</button>
            </li>`
          )
          .join("")}
    </ul>
  `;
  };

  this.render();

  $target.appendChild($list);
}
