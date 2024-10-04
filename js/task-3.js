const newName = document.querySelector("#name-input");
let spanTitle = document.querySelector("#name-output");

newName.addEventListener("input", event => {
    const trimName = newName.value.trim();
    
    if (trimName !== "") {
       return spanTitle.textContent = trimName;
    }
    return spanTitle.textContent = "Anonymous"
}
)
