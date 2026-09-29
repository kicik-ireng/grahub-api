# GRahub API

GRahub is a centralized backend system designed for residential and community management. The system facilitates the administration of hierarchical community structures from the Kelurahan level down to RW, RT, Families, and individual Residents. It provides a comprehensive suite of features including reporting, financial management, community activities, and automated letter generation with PDF and QR code conversion.

## Technology Stack

- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL / MySQL
- **ORM**: Prisma ORM v6
- **Authentication**: JWT, Role-Based Access Control (RBAC), Scope-Based Filtering
- **Documentation**: Swagger / OpenAPI
- **Validation**: class-validator, class-transformer
- **Background Jobs**: BullMQ & Redis

## System Architecture

The system is designed utilizing a modular NestJS architecture with strict authorization isolation at the service layer (Scope-Based Authorization). This ensures data security and prevents unauthorized cross-regional data access (Row-Level Security).

```mermaid
graph TD;
    Client[Web/Mobile Client] -->|REST API / JWT| AuthGuard(Authentication Guard);
    AuthGuard --> PermGuard(Permission Guard);
    PermGuard --> Controller(Controllers);
    Controller --> ScopeUtil(Scope Authorization);
    ScopeUtil --> Service(Service Layer);
    Service -->|Prisma| DB[(MySQL/PostgreSQL)];
    
    Service --> PDF[PDF Generator / QR Code];
    Service --> Queue[BullMQ / Background Jobs];
    Queue --> WA[WhatsApp Notification];
```

## Entity Hierarchy

Data relationships are strictly enforced sequentially to maintain regional order and data integrity.

```mermaid
erDiagram
    KELURAHAN ||--o{ RW : "manages"
    RW ||--o{ RT : "manages"
    RT ||--o{ FAMILY : "manages"
    FAMILY ||--o{ RESIDENT : "has members"
    
    RESIDENT ||--o{ USER : "has account"
    RESIDENT ||--o{ DUES : "pays"
    RESIDENT ||--o{ COMPLAINTS : "reports"
    RESIDENT ||--o{ LETTERS : "requests"
```

## Scope-Based Authorization

The system implements dynamic data filtering (appending targeted `where` clauses in Prisma) based on the authenticated user's Resident entity:
- **KELURAHAN**: Unrestricted access to all data (RW, RT, Residents, Finance) within the Kelurahan.
- **RW**: Restricted to viewing RT, Residents, and Reports specific to their RW.
- **RT**: Restricted to data concerning residents, families, and finances within their own RT.
- **HEAD_OF_FAMILY**: Authorized to access bills or requests pertaining only to their family members.
- **RESIDENT**: Isolated access strictly limited to personal profile data and relevant notifications.

## System Modules

The backend architecture is segmented into more than 37 specific modules, categorized into core business domains:
1. **Core & Identity**: Auth, Users, Roles, Permissions, Master Regions (Kelurahan, RW, RT).
2. **Demographics**: Residents, Families, Resident-Mutations, Births, Deaths.
3. **Finance**: Dues, Payments, Finance.
4. **Community**: Patrol, Activities, Complaints, Announcements, Polls, Emergency Contacts, Volunteers, Facilities.
5. **Administration**: Letters (PDF Generation), Documents, Notifications.

## Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- MySQL or PostgreSQL Server

### 2. Installation
```bash
git clone <repository_url>
cd grahub-api
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and configure the following variables:
```env
DATABASE_URL="mysql://username:password@localhost:3306/grahub"
JWT_SECRET="your_secure_jwt_secret_key"
PORT=3000
```

### 4. Database Setup
```bash
# Synchronize schema with the database
npx prisma db push

# Execute Seeder (Generates SUPER_ADMIN role and base permissions)
npx prisma db seed
```

### 5. Running the Application
```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

## API Documentation

The application utilizes Swagger for interactive API documentation. Once the server is running, the documentation can be accessed at:

**http://localhost:3000/docs**

## Default Credentials
Following the initial database seeding, use the credentials below to authenticate and obtain a JWT Token:
- **Email**: admin@grahub.local
- **Password**: password123
