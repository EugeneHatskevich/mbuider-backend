import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Category } from '../../category/entities/category.entity';
import { CreateCategoryDto } from '../../category/dto/create-category.dto';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    proteins: number;
    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    fats: number;
    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    carbohydrates: number;
    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    calories: number;
    @IsNotEmpty()
    @IsDefined()
    category: CreateCategoryDto;
}
