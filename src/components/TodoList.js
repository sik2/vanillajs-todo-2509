export default function TodoList({ $target }) {
  const $list = document.createElement("div");

  $list.innerHTML = `
    <ul>
        <li>할일 1</li>
        <li>할일 2</li>
        <li>할일 3</li>
    </ul>
  `;

  $target.appendChild($list);
}
