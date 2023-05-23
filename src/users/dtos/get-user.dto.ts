import { BaseUserDto } from "./base-user.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Recipe } from "../../recipes/entities/recipe.entity";

export class GetUserDto extends BaseUserDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    recipes: Recipe[];
}