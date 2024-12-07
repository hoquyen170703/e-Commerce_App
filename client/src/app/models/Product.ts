export class Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    date: string;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;

    constructor(
        id: string,
        code: string,
        name: string,
        description: string,
        image: string,
        price: number,
        date: string,
        category: string,
        quantity: number,
        inventoryStatus: string,
        rating: number
    ) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.date = date;
        this.category = category;
        this.quantity = quantity;
        this.inventoryStatus = inventoryStatus;
        this.rating = rating;
    }
}
