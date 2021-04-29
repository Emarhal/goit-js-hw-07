// function sizePic() {
//   size = document.getElementById("size").value;
//   img = document.getElementById("pic");
//   img.width = 60 + 20 * size;
// }

// const inputRef = document.querySelector("#font-size-control").value;

const inputRef = document.getElementById("font-size-control");

const text = document.querySelector("#text");

inputRef.addEventListener("input", () => {
  const size = inputRef.value;
  text.style.fontSize = size + "%";
});
