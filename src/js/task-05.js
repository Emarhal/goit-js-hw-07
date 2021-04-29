const ref = {
  inputText: document.querySelector("#name-input"),
  spanChage: document.querySelector("#name-output"),
};

console.log(ref);

// ref.inputText.oninput = function () {
//     if (ref.inputText.value === '') {
//         ref.spanChage.textContent = 'незнакомец';
//     } else {
//         ref.spanChage.textContent = ref.inputText.value;
//     }

// }

ref.inputText.addEventListener("input", (event) => {
  if (ref.inputText.value === "") {
    ref.spanChage.textContent = "незнакомец";
  } else {
    ref.spanChage.textContent = ref.inputText.value;
  }
});
console.log(ref.inputText);

// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = 'незнакомец';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }
