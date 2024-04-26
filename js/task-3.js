function getElementWidth(content, padding, border) {
  const borderWidth = border * 4;
  return content + padding + borderWidth;
}
console.log(
  getElementWidth(
    Number.parseInt("50px"),
    Number.parseInt("8px"),
    Number.parseInt("4px")
  )
); // 74
console.log(
  getElementWidth(
    Number.parseFloat("60px"),
    Number.parseFloat("12px"),
    Number.parseFloat("8.5px")
  )
); // 101
console.log(
  getElementWidth(
    Number.parseFloat("200px"),
    Number.parseFloat("0px"),
    Number.parseFloat("0px")
  )
); // 200
