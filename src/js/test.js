const ingredientsRef = document.querySelector('#ingredients');
const listItem = ingredients.map(ingredient => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    return liItem;
})

ingredientsRef.append(...listItem);