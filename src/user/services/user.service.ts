import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { GetUserDto } from "../dtos/get-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {
    }

    public async create(userDto: CreateUserDto): Promise<GetUserDto> {
        const user: User = new User();
        user.firstName = userDto.firstName;
        user.lastName = userDto.lastName;

        const newUser: User = await this.userRepository.save(user);

        const getUserDto: GetUserDto = new GetUserDto();
        getUserDto.id = newUser.id;
        getUserDto.firstName = newUser.firstName;
        getUserDto.lastName = newUser.lastName;
        getUserDto.isActive = newUser.isActive;

        return getUserDto;
    }
}