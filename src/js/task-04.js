const ref = {
  btnDec: document.querySelector('button[data-action="decrement"]'),
  btnInc: document.querySelector('button[data-action="increment"]'),
  spanValue: document.querySelector('span[id="value"]'),
};

// let counter = Number(ref.spanValue.textContent);

// ref.btnDec.addEventListener('click', (event) => {
//   // counter -= 1;
//   // ref.spanValue.textContent = counter;
//   ref.spanValue.textContent -= 1;

// })

// ref.btnInc.addEventListener('click', (event) => {
//   // counter += 1;
//   // ref.spanValue.textContent = counter;
//   ref.spanValue.textContent = +ref.spanValue.textContent + 1;

// })

// const buttons = {
//   increm: document.querySelector("[data-action='increment']"),
//   decrem: document.querySelector("[data-action='decrement']"),
// };
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  ref.spanValue.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  ref.spanValue.textContent = counterValue;
};
ref.btnInc.addEventListener("click", increment);
ref.btnDec.addEventListener("click", decrement);
