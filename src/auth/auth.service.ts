import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/services/user.service';
import { GetUserDto } from '../users/dtos/get-user.dto';
import { UserResponse } from '../users/entities/user-response.entity';
import * as bcrypt from 'bcrypt';
import { UserResponseBuilder } from '../users/utils/builders/user-response-builder';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private tokenService: TokenService) {
    }

    public async register(dto: CreateUserDto): Promise<User> {
        const existedUser: User | null = await this.userService.getByEmail(dto.email);

        if (existedUser) {
            throw new BadRequestException('User already exist');
        }

        return this.userService.create(dto);
    }

    public async login(dto: GetUserDto): Promise<UserResponse> {
        const existedUser: User | null = await this.userService.getByEmail(dto.email);

        if (!existedUser) {
            throw new BadRequestException('User does not exist');
        }

        const isValidPassword: boolean = await bcrypt.compare(dto.password, existedUser.password);

        if (!isValidPassword) {
            throw new BadRequestException('Invalid password');
        }

        const token: string = await this.tokenService.generate(existedUser);

        return new UserResponseBuilder()
            .accessToken(token)
            .build();
    }
}