export default function TodoList({ $target, intialState }) {
  const $list = document.createElement("div");

  this.state = intialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $list.innerHTML = `
    <ul>
        ${this.state.map((row) => `<li>${row.id} / ${row.text}</li>`).join("")}
    </ul>
  `;
  };

  this.render();

  $target.appendChild($list);
}
