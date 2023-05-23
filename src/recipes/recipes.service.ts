import { Injectable } from "@nestjs/common";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { Recipe } from "./entities/recipe.entity";
import { GetRecipeDto } from "./dto/get-recipe.dto";
import { UserService } from "../users/services/user.service";

@Injectable()
export class RecipesService {

    constructor(
        @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
        private userService: UserService,
    ) {
    }

    public async create(createRecipeDto: CreateRecipeDto): Promise<GetRecipeDto> {
        const user: User = await this.userService.getById(createRecipeDto.userId);

        const recipe: Recipe = new Recipe();
        recipe.name = createRecipeDto.name;
        recipe.fats = createRecipeDto.fats;
        recipe.proteins = createRecipeDto.proteins;
        recipe.carbohydrates = createRecipeDto.carbohydrates;
        recipe.user = user;

        const newRecipe: Recipe = await this.recipeRepository.save(recipe);

        const getRecipeDto: GetRecipeDto = new GetRecipeDto();
        getRecipeDto.id = newRecipe.id;
        getRecipeDto.name = newRecipe.name;
        getRecipeDto.proteins = newRecipe.proteins;
        getRecipeDto.fats = newRecipe.fats;
        getRecipeDto.carbohydrates = newRecipe.carbohydrates;
        getRecipeDto.user = newRecipe.user;

        return getRecipeDto;
    }

    findAll() {
        return `This action returns all recipes`;
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
