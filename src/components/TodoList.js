export default function TodoList({ $target, intialState }) {
  const $list = document.createElement("div");

  $list.innerHTML = `
    <ul>
        ${intialState.map((row) => `<li>${row}</li>`).join("")}
    </ul>
  `;

  $target.appendChild($list);
}
