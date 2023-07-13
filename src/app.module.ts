import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { RecipesModule } from './recipes/recipes.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { JwtAuthStrategy } from './strategy/jwt-auth-strategy';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENVIRONMENT}.env`,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRESS_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRESS_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRESS_DB,
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
            ssl: true,
        }),
        UserModule,
        RecipesModule,
        AuthModule,
        TokenModule,
    ],
    controllers: [AppController],
    providers: [AppService, JwtAuthStrategy],
})
export class AppModule {
}
