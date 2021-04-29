const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientRef = document.querySelector('#ingredients');

console.log(ingredientRef);

const mapBest = ingredients.map(elem => {

  const li = document.createElement('li');

  // li.appendChild(elem);
  li.textContent = elem;

  return li;

  console.log(li);
  
});

ingredientRef.append(...mapBest);

// const ingredientsRef = document.querySelector('#ingredients');
// const listItem = ingredients.map(ingredient => {
//     const liItem = document.createElement('li');
//     liItem.textContent = ingredient;
//     return liItem;
// })

// ingredientsRef.append(...listItem);