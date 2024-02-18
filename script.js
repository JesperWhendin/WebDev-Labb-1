class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}

const products = [
  new Product("Bilvård Basic", "ServiceExample.jpg", 790, "Ett grundläggande bilvårdspaket inklusive tvätt, invändig dammsugning och fönsterputs."),
  new Product("Bilvård Medel", "ServiceExample.jpg", 1590, "Ett omfattande bilvårdspaket som inkluderar Bilvård Basic och även poleringstjänst som återställer glansen på lacken och ger bilen en skyddande yta."),
  new Product("Bilvård Premium", "ServiceExample.jpg", 3490, "En djupgående rengöring av bilen som inkluderar Bilvård Medel inklusive städning av tyger, rengöring av instrumentbräda och behandling av läder."),
  new Product("Keramisk Lackskyddsbehandling", "ServiceExample.jpg", 5990, "En högteknologisk behandling som ger ett långvarigt skydd mot smuts, vägsalt och UV-strålar."),
  new Product("Motorrengöring", "ServiceExample.jpg", 1290, "En professionell rengöring av motorn för att avlägsna smuts och förlänga dess livslängd."),
  new Product("Turbotvätt", "ServiceExample.jpg", 199, "En snabb och effektiv behandling för att avlägsna asfalt, insekter och andra rester från bilens lack, vindruta och fälgar.")
];

const productList = document.querySelector(".product-list");
    let i = 1;
function listServices() {
  for (const prod of products) {
    const col = document.createElement("div");
    const card = document.createElement("div");
    const body = document.createElement("div");
    const title = document.createElement("h4");
    const img = document.createElement("img");
    const cost = document.createElement("p");
    const desc = document.createElement("p");
    const addBtn = document.createElement("button");

    card.setAttribute("class", "card product");
    title.innerText = prod.name;
    title.setAttribute("class", "title text-center");
    cost.innerText = prod.price+++":-";
    
    desc.innerText = prod.description;
    img.setAttribute("src", prod.image);
    img.setAttribute("alt", prod.name);
    img.setAttribute("class", "product-image");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("class", "btn btn-secondary");
    addBtn.innerText = ("Lägg till");

    addBtn.onclick = () => {
      addToCart(prod)
    };

    productList.appendChild(col);
    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(body);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(cost);
    card.appendChild(addBtn);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    listServices();
});

let cart = [];

function addToCart(product){
  cart.push(product);
}