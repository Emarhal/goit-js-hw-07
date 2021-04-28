const liItems = document.querySelectorAll('li.item');
 console.log(`В ${liItems.length} категории.`)


liItems.forEach(liItem => {
    const h2 = liItem.querySelector('h2').textContent;
    const ul = liItem.querySelectorAll('li').length;
    console.log(`Категория: ${h2}`);
    console.log(`Количество элементов: ${ul}`);

});
