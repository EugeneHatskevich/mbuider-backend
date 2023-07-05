import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as process from "process";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port: number = Number(process.env.PORT) || 8000;

    const config = new DocumentBuilder()
        .setTitle("MBuilder")
        .setVersion("0.0.1")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(port);

    console.log(`Application started on ${port} port`);
}

bootstrap();
