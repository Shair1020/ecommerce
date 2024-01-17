import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_URI } from "./config";

@Module({
  imports: [ProductModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

