import { ApiProperty } from "@nestjs/swagger";

export class CreateRecipeDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    proteins: number;

    @ApiProperty()
    fats: number;

    @ApiProperty()
    carbohydrates: number;

    userId: string;
}
