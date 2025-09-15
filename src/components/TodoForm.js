export default function TodoForm({ $target }) {
  const $form = document.createElement("form");
  console.log($form);

  $form.innerHTML = `
    <input />
    <button>입력</button>
  `;
  $target.appendChild($form);
}
