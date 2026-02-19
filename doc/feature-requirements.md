# Feature Requirements – FreelancerOS (MVP)

This document defines the Minimum Viable Product (MVP) features for the FreelancerOS platform.

Only the features listed here will be implemented in the initial version.

---

## 1. Authentication

### User Stories

- User can sign up using email and password
- User can log in
- User can log out
- User sessions persist after refresh
- Protected routes (dashboard requires login)

---

## 2. Client Management

### Client User Stories

- User can create a new client
- User can view list of clients
- User can edit client details
- User can delete a client

### Client Fields

- Name
- Email
- Phone (optional)
- Company (optional)
- Notes (optional)
- Created date

---

## 3. Project Management

### Project User Stories

- User can create a project
- User can assign a client to a project
- User can view all projects
- User can edit project details
- User can delete a project
- User can update project status

### Project Fields

- Title
- Description
- Client
- Status (Active / Completed / On Hold)
- Start date
- Deadline

---

## 4. Task Management

### Task User Stories

- User can create tasks inside a project
- User can view project tasks
- User can mark task as completed
- User can edit task
- User can delete task

### Task Fields

- Title
- Description (optional)
- Priority (Low / Medium / High)
- Status (Pending / Completed)
- Due date (optional)

---

## 5. Invoice / Payment Tracking

### Invoice User Stories

- User can create an invoice for a project
- User can view invoices
- User can update invoice status
- User can delete invoice

### Invoice Fields

- Project
- Amount
- Status (Paid / Unpaid)
- Issue date
- Paid date (optional)

---

## 6. Dashboard

### User Can View

- Total clients count
- Total active projects
- Total pending invoices amount
- Total revenue (paid invoices)

---

## Out of Scope (Not in MVP)

The following features will NOT be built in the MVP:

- Team collaboration
- Role permissions
- File uploads
- Email notifications
- PDF invoice generation
- Calendar integration
- Real-time updates
