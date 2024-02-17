class Service {
    constructor(name, img, price, description){
        this.name = name;
        this.img = img;
        this.price = price;
        this.description = description;
    }
}

const services = [
    new Service({name: "Service 1", img: "ServiceExample.jpg", price: 26, description: "Example service description 1."}),
    new Service({name: "Service 2", img: "ServiceExample.jpg", price: 39, description: "Example service description 2."}),
    new Service({name: "Service 3", img: "ServiceExample.jpg", price: 74, description: "Example service description 3."}),
    new Service({name: "Service 4", img: "ServiceExample.jpg", price: 119, description: "Example service description 4."}),
    new Service({name: "Service 5", img: "ServiceExample.jpg", price: 189, description: "Example service description 5."}),
];





















let cart = [];