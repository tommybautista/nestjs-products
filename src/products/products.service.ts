import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {

    products: Product[] = [];

    constructor() {}

    insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts () {
        return [...this.products]
    }

    getSingleProduct(productId: string) {
        const product = this.products.find((item) => item.id === productId);
        if (!product) {
            throw new NotFoundException();
        }
        return product;
    }

}