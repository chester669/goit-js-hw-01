function getElementWidth(content, padding, border) {
  content = Number.parseInt(content);
  padding = Number.parseInt(padding);
  border = Number.parseFloat(border);
  const emptySpace = (border + padding) * 2;
  return content + emptySpace;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// const inputName = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// inputName.addEventListener("input", (evt) => {
//   const clearInput = evt.target.value.trim();
//   if (clearInput === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = clearInput;
//   }
// });
