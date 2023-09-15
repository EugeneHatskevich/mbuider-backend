import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UserService } from '../users/services/user.service';
import { User } from '../users/entities/user.entity';
import { Category } from '../category/entities/category.entity';
import { CategoryService } from '../category/category.service';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
        private userService: UserService,
        private categoryService: CategoryService,
    ) {
    }

    public async create(createProductDto: CreateProductDto): Promise<Product> {
        let category: Category | null = await this.categoryService.getByName(createProductDto.category.name);

        if (!category) {
            category = await this.categoryService.create(createProductDto.category)
        }

        const product: Product = new Product();
        product.name = createProductDto.name;
        product.fats = createProductDto.fats;
        product.proteins = createProductDto.proteins;
        product.carbohydrates = createProductDto.carbohydrates;
        product.calories = createProductDto.calories;
        product.category = category;
        product.recipes = [];

        return this.productRepository.save(product);
    }

    public async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    findOne(id: number) {
        return `This action returns a #${id} recipe`;
    }

    update(id: number, _updateRecipeDto: UpdateProductDto) {
        return `This action updates a #${id} recipe`;
    }

    remove(id: number) {
        return `This action removes a #${id} recipe`;
    }
}
