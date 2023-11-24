import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number
        ): any {
        return this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
    }

}