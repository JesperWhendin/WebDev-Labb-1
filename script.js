class Product {
  constructor(id, name, image, price, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}

const products = [
  new Product(
    1,
    "Bilvård Basic",
    "./images/carService1.jpg",
    790,
    "Ett grundläggande bilvårdspaket inklusive tvätt, invändig dammsugning och fönsterputs."
  ),
  new Product(
    2,
    "Bilvård Medel",
    "./images/carService2.jpg",
    1590,
    "Ett omfattande bilvårdspaket som inkluderar Bilvård Basic och även poleringstjänst som återställer glansen på lacken och ger bilen en skyddande yta."
  ),
  new Product(
    3,
    "Bilvård Premium",
    "./images/carService3.jpg",
    3490,
    "En djupgående rengöring av bilen som inkluderar Bilvård Medel inklusive städning av tyger, rengöring av instrumentbräda och behandling av läder."
  ),
  new Product(
    4,
    "Keramisk Lackskyddsbehandling",
    "./images/carService4.jpg",
    5990,
    "En högteknologisk behandling som ger ett långvarigt skydd mot smuts, vägsalt och UV-strålar."
  ),
  new Product(
    5,
    "Motorrengöring",
    "./images/carService5.jpg",
    1290,
    "En professionell rengöring av motorn för att avlägsna smuts och förlänga dess livslängd."
  ),
  new Product(
    6,
    "Turbotvätt",
    "./images/carService6.jpg",
    199,
    "En snabb och effektiv behandling för att avlägsna asfalt, insekter och andra avlagringar från bilens exteriör."
  ),
];

const productList = document.querySelector(".product-list");
function listServices() {
  if (window.location.href.indexOf("Services.html") > -1) {
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
      cost.innerText = prod.price + ":-";

      desc.innerText = prod.description;
      img.setAttribute("src", prod.image);
      img.setAttribute("alt", prod.name);
      addBtn.setAttribute("type", "button");
      addBtn.setAttribute("class", "btn btn-success");
      addBtn.innerText = "Lägg till";

      addBtn.onclick = () => {
        addToCart(prod);
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
}

let cart = [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

const cartList = document.querySelector(".cart-list");
let checkout = JSON.parse(localStorage.getItem("cart")) || [];
const checkoutSum = document.querySelector(".checkoutSum");

function listCart() {
  if (window.location.href.indexOf("Cart.html") > -1) {
    let sum = 0;
    for (const p of checkout) {
      const li = document.createElement("li");
      const product = document.createElement("div");
      const title = document.createElement("h5");
      const cost = document.createElement("p");
      const removeButton = document.createElement("button");

      li.setAttribute("class", "list-info");
      title.innerText = p.name;
      cost.innerText = p.price + " kr";
      removeButton.setAttribute("type", "button");
      removeButton.setAttribute("class", "btn btn-danger");
      removeButton.innerText = "Ta bort";

      removeButton.addEventListener("click", function () {
        removeProduct(p);
        li.remove();
      });

      cartList.appendChild(li);
      li.appendChild(product);
      product.appendChild(title);
      product.appendChild(cost);
      product.appendChild(removeButton);
      sum += p.price;
    }
    checkoutSum.innerText = sum + " kr";

    const cBtn = document.querySelector(".checkoutBtn");
    const checkoutBtn = document.createElement("button");

    checkoutBtn.setAttribute("type", "button");
    checkoutBtn.setAttribute("class", "btn btn-success");
    checkoutBtn.innerText = "Betala";

    checkoutBtn.addEventListener("click", function () {
      checkout = [];
      localStorage.setItem("cart", JSON.stringify(checkout));
      while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
      }
      checkoutSum.innerText = "Varukorgen är tom";
    });

    cBtn.appendChild(checkoutBtn);
  }
}

function removeProduct(productToRemove) {
  const index = checkout.findIndex((product) => product === productToRemove);
  if (index !== -1) {
    checkout.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(checkout));
    let newSum = 0;
    for (const p of checkout) {
      newSum += p.price;
    }
    checkoutSum.innerText = newSum + " kr";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  listServices();
});
document.addEventListener("DOMContentLoaded", function () {
  listCart();
});
