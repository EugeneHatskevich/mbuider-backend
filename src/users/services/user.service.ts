import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {
    }

    public async create(dto: CreateUserDto): Promise<User> {
        dto.password = await this.hashPassword(dto.password);

        return this.userRepository.save(dto);
    }

    public async getByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email: email } });
    }

    public async getById(id: number): Promise<User> {
        return this.userRepository.findOne({where: {id: id}});
    }

    private async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, await bcrypt.genSalt(10));
    }
}