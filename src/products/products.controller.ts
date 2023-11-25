import { Body, Controller, Post, Get, Patch, Delete, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number
        ) {
        return this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
    }

    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number) {
            this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
            return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string) {
        this.productService.deleteProduct(prodId);
        return null;
    }

}