import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRecipeDto {
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
}
