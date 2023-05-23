import { Module } from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { RecipesController } from "./recipes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recipe } from "./entities/recipe.entity";
import { UserModule } from "../users/user.module";

@Module({
    imports: [TypeOrmModule.forFeature([Recipe]), UserModule],
    controllers: [RecipesController],
    providers: [RecipesService]
})
export class RecipesModule {
}
