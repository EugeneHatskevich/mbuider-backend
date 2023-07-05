import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { Recipe } from "./entities/recipe.entity";
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('recipes')
@Controller("recipes")
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {
    }

    @Post()
    @ApiCreatedResponse({
        description: 'Create new recipe',
        type: Recipe,
    })
    public async create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
        return this.recipesService.create(createRecipeDto);
    }

    @Get()
    public async findAll(): Promise<Recipe[]> {
        return this.recipesService.findAll();
    }

    @Get(":id")
    public async findOne(@Param("id") id: string) {
        return this.recipesService.findOne(+id);
    }

    @Patch(":id")
    public async update(@Param("id") id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
        return this.recipesService.update(+id, updateRecipeDto);
    }

    @Delete(":id")
    public async remove(@Param("id") id: string) {
        return this.recipesService.remove(+id);
    }
}
