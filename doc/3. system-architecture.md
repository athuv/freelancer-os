# System Architecture – FreelancerOS

## 1. Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Convex React Hooks

### Backend

- Convex (Server Functions + Database)
- Real-time data synchronization

### Authentication

- Convex Auth

### Deployment

- Vercel – Frontend
- Convex Cloud – Backend

---

## 2. Architecture Overview

FreelancerOS follows a full-stack TypeScript architecture using Convex as the backend service.

User → Next.js UI → Convex Query/Mutation → Convex Database → Real-time update → UI

### Flow Explanation

1. User performs an action in the UI (create client, update task, etc.)
2. Frontend calls a Convex mutation
3. Convex updates the database
4. Any subscribed queries automatically receive updated data
5. UI re-renders with the latest state

---

## 3. Key Architectural Concepts

### Real-time Data

Convex provides automatic real-time subscriptions. The UI stays in sync with the database without manual refetching.

### Server Functions

Business logic is handled in Convex functions:

- Queries → Read data
- Mutations → Create / Update / Delete data

### Full-stack TypeScript

Both frontend and backend share types, improving type safety and developer experience.

---

## 4. Data Ownership Model

Each user only accesses their own data.

All main records include:

- userId

This ensures:

- Data isolation
- Multi-tenant architecture
- Security for a SaaS environment

---

## 5. Benefits of This Architecture

- No REST API setup required
- Built-in real-time updates
- Scalable multi-tenant structure
- Full-stack TypeScript
- Simplified state management
- Production-ready SaaS architecture
