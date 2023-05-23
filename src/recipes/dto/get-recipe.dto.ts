import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/entities/user.entity";

export class GetRecipeDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    proteins: number;

    @ApiProperty()
    fats: number;

    @ApiProperty()
    carbohydrates: number;

    @ApiProperty()
    user: User;
}
