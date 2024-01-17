import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./create-product.dto";

@Controller("store/product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post("/")
  async addProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    try {
      const product = await this.productService.addProduct(createProductDTO);
      return res.status(HttpStatus.CREATED).json({
        message: "Product has been created successfully",
        data: product,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: Porduct not created!",
        error: "Bad Request",
      });
    }
  }

  @Get("/:id")
  async getProduct(@Res() res, @Param() id: string) {
    try {
      const product = await this.productService.getProduct(id);
      if (!product) {
        throw new NotFoundException("Product does not exist!");
      }
      return res.status(HttpStatus.OK).json({
        message: "fetch specific product",
        data: product,
      });
    } catch (error) {
      console.log(error, "error");
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 500,
        message: "Srever Error",
        error: "Server",
      });
    }
  }
}
