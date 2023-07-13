import { Injectable } from '@nestjs/common';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {

    constructor(
        @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
    ) {
    }

    // public async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    //     const user: User = await this.userService.getById(createRecipeDto.userId);
    //
    //     const recipe: Recipe = new Recipe();
    //     recipe.name = createRecipeDto.name;
    //     recipe.fats = createRecipeDto.fats;
    //     recipe.proteins = createRecipeDto.proteins;
    //     recipe.carbohydrates = createRecipeDto.carbohydrates;
    //     recipe.user = user;
    //
    //     return  this.recipeRepository.save(recipe);
    // }

    public async findAll(): Promise<Recipe[]> {
        return this.recipeRepository.find();
    }

    findOne(id: number) {
        return `This action returns a #${id} recipe`;
    }

    update(id: number, _updateRecipeDto: UpdateRecipeDto) {
        return `This action updates a #${id} recipe`;
    }

    remove(id: number) {
        return `This action removes a #${id} recipe`;
    }
}
