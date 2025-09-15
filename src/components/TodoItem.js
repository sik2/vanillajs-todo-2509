export default function TodoItem(row) {
  return `
    <li style="text-decoration:${row.checked ? "line-through" : "none"}">
      <input 
        type="checkbox"
        ${row.checked ? "checked" : ""}
        data-id="${row.id}"
        class="toggle_btn" 
      />
      <span>[${row.id}]</span>
      <span>${row.text}</span>
      <button data-id="${row.id}" class="del_btn">🗑️</button>
    </li>
  `;
}
