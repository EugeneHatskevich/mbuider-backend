import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { User } from '../users/entities/user.entity';
import { GetUserDto } from '../users/dtos/get-user.dto';
import { UserResponse } from '../users/entities/user-response.entity';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/register')
    public async register(@Body() dto: CreateUserDto): Promise<User> {
        return this.authService.register(dto);
    }

    @Post('/login')
    public async login(@Body() dto: GetUserDto): Promise<UserResponse> {
        return this.authService.login(dto);
    }
}