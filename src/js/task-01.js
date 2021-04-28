const liItem = document.querySelectorAll('li.item');

console.log(`В списке ${liItem.length} категории.`);

liItem.forEach(el => {
    const h2 = el.querySelector('h2').textContent;
    const list = el.querySelectorAll('li').length;
    console.log(`Категория: ${h2}`);
    console.log(`Количество элементов: ${list}`);
})
