const element = document.querySelector("p"); 
element.style.display = "none";

const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);


categories.forEach((category) => {
  const b = category.querySelector("h2").textContent;
    const c = category.querySelectorAll("ul li").length;
    
  console.log(`Category: ${b}`);
  console.log(`Elements: ${c}`);
});