import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./users/user.module";
import { RecipesModule } from './recipes/recipes.module';
import { ConfigModule } from "@nestjs/config";
import * as process from "process";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENVIRONMENT}.env`,
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.POSTGRESS_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRESS_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRESS_DB,
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
        }),
        UserModule,
        RecipesModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
