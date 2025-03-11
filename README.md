# NestJS Task Manager Backend

## Overview

This is the backend API for the Task Manager application built with NestJS and Prisma using PostgreSQL. The API provides full CRUD functionality for tasks along with a search endpoint to find tasks by title. It features thorough input validation using **class-validator** and **class-transformer**, robust error handling with global exception filters, and interactive API documentation powered by Swagger.

## Features

- **CRUD Operations:** Create, read, update, and delete tasks.
- **Search Endpoint:** Search for tasks by title (case-insensitive).
- **Input Validation:** Uses `class-validator` and `class-transformer` to ensure only valid data is processed.
- **Robust Error Handling:** Global exception filters provide consistent error responses.
- **Swagger Documentation:** Interactive API docs available at `/docs`.
- **CORS Enabled:** Allows requests from the frontend (e.g., `http://localhost:3000`).

## Tech Stack

- **NestJS** – A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Prisma ORM** – Type-safe database client for PostgreSQL.
- **PostgreSQL** – Robust and scalable relational database.
- **TypeScript** – Enhances code quality and maintainability.
- **Swagger** – For auto-generated API documentation.
- **class-validator & class-transformer** – For input validation and transformation.

## Installation & Setup

1. **Clone the Repository:**
  ```bash
  git clone https://github.com/yourusername/my-task-app.git
  cd my-task-app-backend
  ```

2. **Install Dependencies:**
  ```bash
  npm install
  ```

3. **Configure Environment Variables:** Create a `.env` file in the root of the backend folder with your PostgreSQL connection string:
  ```env
  DATABASE_URL="postgresql://username:password@host:5432/taskdb?sslmode=require"
  ```
  Adjust the connection string values (username, password, host, database) as needed.

4. **Setup Prisma:**
  - Update the Prisma schema in `prisma/schema.prisma` if necessary.
  - Run the migration to set up the database:
    ```bash
    npx prisma migrate dev --name init
    ```

5. **Run the Application:**
  ```bash
  npm run start:dev
  ```
  The API will be available at `http://localhost:3001`.

## API Endpoints

- **GET /api/tasks:** Retrieve all tasks.
- **GET /api/tasks/search?title={title}:** Search for tasks by title.
- **GET /api/tasks/:id:** Retrieve a single task by ID.
- **POST /api/tasks:** Create a new task.
- **PUT /api/tasks/:id:** Update an existing task.
- **DELETE /api/tasks/:id:** Delete a task.

## Swagger Documentation

Access interactive API docs at:
```bash
http://localhost:3001/api/docs
```

## Folder Structure

```plaintext
backend/
├── prisma/
│   └── schema.prisma         // Prisma schema definition
├── src/
│   ├── common/
│   │   └── filters/
│   │       └── http-exception.filter.ts   // Global exception filter
│   ├── tasks/
│   │   ├── dto/
│   │   │   ├── create-task.dto.ts           // DTO for creating tasks
│   │   │   └── update-task.dto.ts           // DTO for updating tasks
│   │   ├── tasks.controller.ts              // Tasks controller with endpoints
│   │   └── tasks.service.ts                 // Business logic for tasks
│   ├── prisma/
│   │   └── prisma.service.ts                // Prisma service for DB connection
│   ├── app.module.ts                        // Main application module
│   └── main.ts                              // Entry point (with CORS, global pipes, Swagger)
├── package.json
└── README.md
```

## Contributing

Contributions to improve functionality, documentation, or testing are welcome. Please fork the repository and open a pull request with your changes.

## License

This project is licensed under the MIT License.
