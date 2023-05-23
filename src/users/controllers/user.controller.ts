import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { GetUserDto } from "../dtos/get-user.dto";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ApiBody, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UserController {

    @Inject() private userService: UserService;

    constructor() {
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created',
        type: GetUserDto,
    })
    @ApiBody({type: CreateUserDto})
    public async create(@Body() createUserDto: CreateUserDto): Promise<GetUserDto> {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    public async getById(@Param('id') id: string): Promise<GetUserDto> {
        return this.userService.getById(id);
    }
}
