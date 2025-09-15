export default function TodoForm({ $target, onSumbit }) {
  const $form = document.createElement("form");

  this.render = () => {
    $form.innerHTML = `
    <input type="text" />
    <button type="submit">입력</button>
  `;
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $input = $form.querySelector("input");

    const text = $input.value;

    if (text.length > 1) {
      onSumbit(text);
      $input.value = "";
    }
  });

  $target.appendChild($form);

  this.render();
}
