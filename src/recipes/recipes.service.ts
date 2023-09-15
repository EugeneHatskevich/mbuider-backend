import { Injectable } from '@nestjs/common';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UserService } from '../users/services/user.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class RecipesService {

    constructor(
        @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
        private userService: UserService,
    ) {
    }

    public async create(createRecipeDto: CreateRecipeDto, userId: number): Promise<Recipe> {
        const user: User = await this.userService.getById(userId);

        const recipe: Recipe = new Recipe();
        recipe.name = createRecipeDto.name;
        recipe.fats = createRecipeDto.fats;
        recipe.proteins = createRecipeDto.proteins;
        recipe.carbohydrates = createRecipeDto.carbohydrates;
        recipe.user = user;

        return  this.recipeRepository.save(recipe);
    }

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
