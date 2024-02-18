class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}

const services = [
    new Product("Test", "ServiceExample.jpg", 10, "A delightful service."),
    new Product("Service 1", "ServiceExample.jpg", 26, "Example service description 1."),
    new Product("Service 2", "ServiceExample.jpg", 39, "Example service description 2."),
    new Product("Service 3", "ServiceExample.jpg", 74, "Example service description 3."),
    new Product("Service 4", "ServiceExample.jpg", 119, "Example service description 4."),
    new Product("Service 5", "ServiceExample.jpg", 189, "Example service description 5.")
];

const serviceList = document.querySelector(".service-list");
    let i = 1;
function listServices() {
  for (const prod of services) {
    console.log(prod.name);
    console.log(prod.image);
    console.log(prod.price);
    console.log(prod.description);


    console.log(i)
    i+++1;
    const col = document.createElement("div");
    const card = document.createElement("div");
    const body = document.createElement("div");
    const title = document.createElement("h4");
    const img = document.createElement("img");
    const cost = document.createElement("p");
    const desc = document.createElement("p");

    title.innerText = prod.name;
    cost.innerText = prod.price;
    desc.innerText = prod.description;
    img.setAttribute("src", prod.image);
    img.setAttribute("alt", prod.name);

    serviceList.appendChild(col);
    col.appendChild(card);
    card.appendChild(body);
    body.appendChild(title);
    body.appendChild(cost);
    body.appendChild(desc);
    card.appendChild(img);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    listServices();
});



let cart = [];


// listServices();