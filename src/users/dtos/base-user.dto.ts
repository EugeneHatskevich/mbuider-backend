import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class BaseUserDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    public email: string;
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    public password: string;
}