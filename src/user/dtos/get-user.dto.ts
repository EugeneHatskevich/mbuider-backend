import { BaseUserDto } from "./base-user.dto";
import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto extends BaseUserDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    isActive: boolean;
}