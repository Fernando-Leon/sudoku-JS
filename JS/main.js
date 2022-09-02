const table = document.getElementById("table-player-game");

const fragment = document.createDocumentFragment();

const createTable = () => {    

    for(let i = 0; i < 81; i++) {
        let item = document.createElement("div");
        item.innerHTML = Math.floor(Math.random() * (9 - 1) + 1);
        item.setAttribute("class", "items");
        fragment.appendChild(item);
    }

    table.appendChild(fragment);
    table.style.gridTemplateColumns = "repeat(9, 1fr)";
    table.style.gridTemplateRows = "repeat(9, 1fr)";
}

const start = () => { createTable(); }

start();