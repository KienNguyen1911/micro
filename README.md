# Food Ordering Microservices Project

This project implements a microservices architecture for a food ordering system with the following services:

1. **Auth Service & API Gateway (Node.js)**
   - Handles user authentication and authorization
   - Acts as an API gateway to route requests to other services
   - Port: 3000

2. **Restaurant Service (Laravel)**
   - Manages restaurant information, menus, and items
   - Port: 8000

3. **Order Service (Spring Boot)**
   - Handles order processing and management
   - Port: 8080

4. **Payment Service (Spring Boot)**
   - Manages payment processing and transactions
   - Port: 8081

## Project Structure
```
.
├── auth-service/        # Node.js authentication and API gateway
├── restaurant-service/  # Laravel restaurant management
├── order-service/      # Spring Boot order processing
└── payment-service/    # Spring Boot payment processing
```

## Prerequisites
- Node.js (v14 or higher)
- PHP 8.1 or higher
- Java 17 or higher
- Docker and Docker Compose (for containerization)
- MySQL/PostgreSQL

## Setup Instructions
Each service has its own setup instructions in their respective directories. 