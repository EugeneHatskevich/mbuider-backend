import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
    ) {
    }

    public async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category: Category = new Category();
        category.name = createCategoryDto.name
        category.description = createCategoryDto.description;

        return this.categoryRepository.save(category);
    }

    findAll() {
        return `This action returns all category`;
    }

    findOne(id: number) {
        return `This action returns a #${id} category`;
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return `This action updates a #${id} category`;
    }

    remove(id: number) {
        return `This action removes a #${id} category`;
    }

    public async getById(id: number): Promise<Category | null> {
        return this.categoryRepository.findOne({
            where: {
                id: id,
            },
        });
    }

    public async getByName(name: string): Promise<Category | null> {
        return this.categoryRepository.findOne({
            where: {
                name: name,
            },
        });
    }
}
