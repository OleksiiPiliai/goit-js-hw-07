const globList = document.querySelector("#categories");
console.log(`Number of categories: ${globList.children.length}`);

const globItem = globList.querySelectorAll(".item");

globItem.forEach(a => {
    console.log(`Category: ${a.childNodes[1].textContent}`);
    const itemChild = a.querySelectorAll("li")
    console.log(`Elements: ${itemChild.length}`);
}
)