import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('OpenAPI/Swagger Specification')
    .setVersion('0.0')
    .addTag('weather')
    .build();

  // await SwaggerModule.loadPluginMetadata(metadata);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs/v1', app, document);

  await app.listen(3000);
  console.info(`Application is running on: ${await app.getUrl()}`);
  console.info(`Web API is found at: ${await app.getUrl()}/api/v1`);
  console.info(`Documentation is found at: ${await app.getUrl()}/api/docs/v1`);
}
bootstrap().catch((e) => console.log(e));
