import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_URI } from "./config";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot(MONGO_URI), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

