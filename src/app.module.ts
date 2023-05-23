import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./users/user.module";
import { RecipesModule } from './recipes/recipes.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "postgres",
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
