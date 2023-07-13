import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {

    constructor() {
    }

    // @Get(':id')
    // public async getById(@Param('id') id: string): Promise<GetUserDto> {
    //     return this.userService.getById(id);
    // }
}
