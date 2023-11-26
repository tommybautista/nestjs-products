import { Body, Controller, Post, Get, Patch, Delete, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Post()
    async addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number
        ) {
        const generatedId = await this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id: generatedId };
    }

    @Get()
    async getAllProducts() {
        const products = await this.productService.getProducts();
        return products;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number) {
            await this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
            return null;
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: string) {
        await this.productService.deleteProduct(prodId);
        return null;
    }

}