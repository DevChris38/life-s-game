const bestMain = document.querySelector("#bests__main");

const newDiv = document.createElement("div");
newDiv.className = "figContainer";

bestMain.addEventListener("click", () => bestMain.appendChild(newDiv));

console;
