const categoryItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  
  const elementCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementCount}`);
});
