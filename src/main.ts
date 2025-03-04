import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix for all API endpoints
  app.setGlobalPrefix('api');

  // Enable CORS for your frontend origin
  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true, // If you need to pass credentials (cookies, etc.)
  });

  // Global ValidationPipe configuration
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Global Exception Filter
  app.useGlobalFilters(new AllExceptionsFilter());

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API for managing tasks with CRUD operations.')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger at /docs and exclude it from the global prefix:
  SwaggerModule.setup('api/docs', app, document, { useGlobalPrefix: false });

  await app.listen(3001);
}
void bootstrap();
