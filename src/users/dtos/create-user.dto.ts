import { BaseUserDto } from './base-user.dto';

export class CreateUserDto extends BaseUserDto {
    firstName: string;
    lastName: string;
}