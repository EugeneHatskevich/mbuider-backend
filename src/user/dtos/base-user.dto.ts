import { ApiProperty } from "@nestjs/swagger";

export class BaseUserDto {

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;
}