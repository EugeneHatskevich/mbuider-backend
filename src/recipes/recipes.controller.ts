import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { User } from '../common/decorators/user.decorator';
import { PublicUser } from '../users/entities/public-user.entity';

@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {
    }

    @Post()
    @ApiCreatedResponse({
        description: 'Create new recipe',
        type: Recipe,
    })
    public async create(
        @Body() createRecipeDto: CreateRecipeDto,
        @User() user: PublicUser,
    ): Promise<Recipe> {
        return this.recipesService.create(createRecipeDto, user.id);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get()
    public async findAll(@User() user: PublicUser): Promise<Recipe[]> {
        return this.recipesService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id') id: string) {
        return this.recipesService.findOne(+id);
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
        return this.recipesService.update(+id, updateRecipeDto);
    }

    @Delete(':id')
    public async remove(@Param('id') id: string) {
        return this.recipesService.remove(+id);
    }
}
