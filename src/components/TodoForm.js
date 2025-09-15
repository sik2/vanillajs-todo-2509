export default function TodoForm({ $target, onSumbit }) {
  const $form = document.createElement("form");

  $form.innerHTML = `
    <input />
    <button type="submit">입력</button>
  `;

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $input = $form.querySelector("input");

    const text = $input.value;

    onSumbit(text);
  });

  $target.appendChild($form);
}
