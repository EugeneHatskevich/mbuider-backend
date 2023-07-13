import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { PublicUser } from '../users/entities/public-user.entity';
import { PublicUserBuilder } from '../users/utils/builders/public-user-builder';

@Injectable()
export class TokenService {

    constructor(private jwtService: JwtService,
                private configService: ConfigService) {
    }

    public async generate(user: User): Promise<string> {
        const options: JwtSignOptions = {
            secret: this.configService.get('JWT_SECRET_KEY'),
            expiresIn: this.configService.get('JWT_EXPIRES_IN'),
        };

        const publicUser: PublicUser = new PublicUserBuilder()
            .id(user.id)
            .email(user.email)
            .firstName(user.firstName)
            .lastName(user.lastName)
            .isActive(user.isActive)
            .build();

        return this.jwtService.sign({ ...publicUser }, options);
    }
}