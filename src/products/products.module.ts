import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { UserModule } from '../users/user.module';
import { CategoryModule } from '../category/category.module';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), UserModule, CategoryModule],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {
}
