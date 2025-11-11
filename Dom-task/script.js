let cardsContainer = document.querySelector(".cards");

let title = [
    "Iron men Card",
    "Hulk Card",
    "Sonic Card",
];

let desc = [
    "Iron men",
    "Hulk green men",
    "Sonic",
];

let images = [
    "https://i.pinimg.com/736x/b9/69/f8/b969f85fb5301a23f19360480e00cd2b.jpg",
    "https://i.pinimg.com/736x/df/12/97/df1297a03380adbc1ed426ed9e3e48ea.jpg",
    "https://i.pinimg.com/736x/72/40/50/724050d1d32cb1f2fbe9dcf68cb9d858.jpg",
];


for (let i = 0; i < 3; i++) {


    let card = document.createElement("div");
    card.setAttribute("class", "card");


    let cardH2 = document.createElement("h2");
    let text = document.createTextNode(title[i]);
    cardH2.appendChild(text)

    let cardP = document.createElement("p");
    cardP.textContent = desc[i];

    let cardImg = document.createElement("img");
    cardImg.setAttribute("src", images[i]);


    card.append(cardH2, cardP, cardImg);


    cardsContainer.appendChild(card);
}


let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.style.margin = "auto";
    card.style.width = "500px";
    card.style.textAlign = "center";
    card.style.borderRadius = "10px";
    card.style.marginTop = "10px";
    card.style.padding = "20px";
    card.style.backgroundColor = "lightblue";
    card.style.border = "2px solid #333";
});

