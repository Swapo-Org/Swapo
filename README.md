# Swapo

A modern skill-swapping platform that connects people who want to exchange skills and learn from each other.

## Video Demo: https://www.youtube.com/watch?v=0o8dSW-YCPY

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Overview](#2-project-overview)
3. [Technical Requirements](#3-technical-requirements)
4. [System Architecture](#4-system-architecture)
5. [API Documentation](#5-api-documentation)
6. [Installation and Configuration](#6-installation-and-configuration)
7. [Changelog and Contributor Guidelines](#8-changelog-and-contributor-guidelines)

---

## 1. Executive Summary

### Project Mission

Swapo is a skill-exchange marketplace that enables users to trade skills with one another. Instead of paying for services, users can offer their own expertise in exchange for learning new skills from others.

### Value Proposition

- **Zero-cost learning**: Exchange skills without monetary transactions
- **Community-driven**: Build a network of skilled individuals
- **Flexible trading**: Propose and negotiate skill exchanges
- **Portfolio showcase**: Display your work to potential trade partners
- **Secure communication**: Built-in messaging system for trade discussions

### Tech Stack Overview

| Layer | Technology |
|-------|------------|
| Frontend | React 19, TypeScript, Vite, TailwindCSS |
| Backend | Django 5.2.7, Django REST Framework |
| Database | PostgreSQL (production), SQLite (development) |
| Authentication | JWT, OAuth 2.0 (Google, GitHub) |
| File Storage | Cloudinary |
| Deployment | Render.com |

---

## 2. Project Overview

### Problem Statement

Traditional skill-learning platforms often require payment for courses or services. Many skilled individuals would prefer to exchange their expertise rather than pay, but lack a dedicated platform to facilitate such exchanges safely and efficiently.

### Solution

Swapo provides a structured marketplace where users can:

1. **List skills they offer** - Showcase expertise they're willing to teach
2. **Specify skills they want** - Define what they want to learn in return
3. **Browse listings** - Discover potential trade partners
4. **Propose trades** - Send and receive trade proposals
5. **Manage active trades** - Track ongoing skill exchanges
6. **Communicate securely** - Message potential and current trade partners

### Target Users

- **Freelancers** looking to expand their skill set
- **Students** wanting to learn practical skills
- **Professionals** seeking to diversify their expertise
- **Hobbyists** interested in teaching and learning new things

### Core Features

| Feature | Description |
|---------|-------------|
| **User Authentication** | Email/password signup, Google OAuth, GitHub OAuth |
| **User Profiles** | Customizable profiles with bio, location, and portfolio |
| **Skill Management** | Add, edit, and showcase personal skills |
| **Skill Listings** | Create listings offering skills in exchange for others |
| **Trade System** | Propose, accept, reject, or withdraw trade proposals |
| **Messaging** | Direct messaging between users |
| **Notifications** | Real-time updates on trade activities |
| **Privacy Controls** | Granular privacy settings for profile visibility |
| **User Blocking** | Block unwanted users from contacting you |
| **Portfolio Images** | Upload and showcase work samples via Cloudinary |

---

## 3. Technical Requirements

### System Prerequisites

#### Backend Requirements

- Python 3.10 or higher
- pip (Python package manager)
- PostgreSQL 13+ (production) or SQLite (development)
- Virtual environment tool (venv, virtualenv, or conda)

#### Frontend Requirements

- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm)

#### External Services

| Service | Purpose | Required |
|---------|---------|----------|
| Cloudinary | Image/media storage | Yes |
| Google OAuth | Social authentication | Optional |
| GitHub OAuth | Social authentication | Optional |
| PostgreSQL Database | Production database | Production only |

### Environment Variables

#### Backend (`.env` file in `/Backend`)

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True

# Database (Production)
DATABASE_URL=postgresql://user:password@host:port/dbname

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# OAuth (Optional)
# Configure in Django admin under Social Applications
```

#### Frontend (`.env` file in `/Frontend`)

```env
VITE_API_URL=http://localhost:8000/api/v1
VITE_BACKEND_URL=http://localhost:8000
```

---

## 4. System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              React Frontend (TypeScript)                 │   │
│  │         Vite + TailwindCSS + React Query                │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS/REST API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API LAYER                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           Django REST Framework                          │   │
│  │    JWT Authentication + OAuth 2.0 (Google/GitHub)       │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ accounts │ │ listings │ │  trade   │ │ message  │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐        │
│  │  skills  │ │userSkills│ │userblocks│ │notification│        │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATA LAYER                               │
│  ┌─────────────────────┐    ┌─────────────────────┐            │
│  │    PostgreSQL       │    │     Cloudinary      │            │
│  │   (User data,       │    │   (Media storage)   │            │
│  │   trades, etc.)     │    │                     │            │
│  └─────────────────────┘    └─────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
```

### Backend Module Structure

```
Backend/
├── swapo/                  # Main Django project settings
│   ├── settings.py         # Configuration
│   ├── urls.py             # Root URL routing
│   └── wsgi.py             # WSGI entry point
├── accounts/               # User authentication & profiles
│   ├── models.py           # User, UserPrivacy models
│   ├── views.py            # Auth & profile endpoints
│   ├── serializers.py      # Data serialization
│   └── adapters.py         # OAuth adapters
├── skills/                 # Skill categories management
├── userSkills/             # User-skill associations
├── listings/               # Skill listing CRUD
│   └── models.py           # SkillListing, PortfolioImage
├── trade/                  # Trade proposal & management
│   └── models.py           # TradeProposal, Trade
├── message/                # User messaging system
├── notification/           # Notification system
├── userblocks/             # User blocking functionality
└── templates/              # HTML templates
```

### Frontend Structure

```
Frontend/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── layouts/            # Layout wrappers
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React context providers
│   ├── utils/              # Utility functions
│   ├── assets/             # Static assets
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── public/                 # Static public files
│   ├── android/            # Android PWA icons
│   ├── ios/                # iOS PWA icons
│   └── windows11/          # Windows PWA icons
└── index.html              # HTML entry
```

### Database Schema (Core Models)

#### User Model
```
User
├── user_id (PK)
├── username
├── email (unique)
├── password_hash
├── first_name
├── last_name
├── role
├── bio
├── profile_picture_url
├── location
├── registration_date
├── last_login
├── rating
├── num_reviews
├── googleId (unique, nullable)
├── githubId (unique, nullable)
├── is_active
├── is_staff
└── is_profile_complete
```

#### SkillListing Model
```
SkillListing
├── listing_id (PK)
├── user (FK → User)
├── skill_offered (FK → Skill)
├── skill_desired (FK → Skill)
├── title
├── description
├── status (active/inactive/paused/completed)
├── creation_date
├── last_updated
├── location_preference
└── portfolio_link
```

#### Trade Models
```
TradeProposal
├── proposal_id (PK)
├── listing (FK → SkillListing)
├── proposer (FK → User)
├── recipient (FK → User)
├── skill_offered_by_proposer (FK → Skill)
├── skill_desired_by_proposer (FK → Skill)
├── message
├── proposal_date
├── status (pending/accepted/rejected/withdrawn/countered)
└── last_status_update

Trade
├── trade_id (PK)
├── proposal (FK → TradeProposal)
├── user1 (FK → User)
├── user2 (FK → User)
├── skill1 (FK → Skill)
├── skill2 (FK → Skill)
├── start_date
├── expected_completion_date
├── actual_completion_date
├── status (active/in_progress/completed/disputed/cancelled)
└── terms_agreed
```

---

## 5. API Documentation

### Base URL

- **Development**: `http://localhost:8000/api/v1`
- **Production**: `https://your-domain.onrender.com/api/v1`

### Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <access_token>
```

### API Endpoints

#### Authentication (`/api/v1/auth/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup/` | Register a new user | No |
| POST | `/login/` | Login and get tokens | No |
| POST | `/token/refresh/` | Refresh access token | No |
| POST | `/password/forgot/` | Request password reset | No |
| POST | `/password/reset/<uidb64>/<token>/` | Confirm password reset | No |
| PUT | `/change-password/` | Change password | Yes |
| GET | `/me/` | Get current user info | Yes |
| PATCH/PUT | `/me/update/` | Update profile | Yes |
| GET | `/me/portfolio-images/` | Get user's portfolio images | Yes |
| POST | `/me/portfolio-images/` | Upload portfolio image | Yes |
| DELETE | `/me/portfolio-images/<id>/` | Delete portfolio image | Yes |
| GET | `/users/<user_id>/` | Get other user's profile | Yes |
| GET/PUT | `/privacy/` | Get/update privacy settings | Yes |
| DELETE | `/delete-account/` | Delete user account | Yes |
| GET | `/google/` | Initiate Google OAuth | No |
| GET | `/github/` | Initiate GitHub OAuth | No |
| GET | `/oauth/callback/` | OAuth callback handler | No |

##### Example: User Registration

**Request:**
```http
POST /api/v1/auth/signup/
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "SecurePass123!",
  "password2": "SecurePass123!"
}
```

**Response (201 Created):**
```json
{
  "user": {
    "user_id": 1,
    "email": "user@example.com",
    "username": "johndoe"
  },
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

##### Example: User Login

**Request:**
```http
POST /api/v1/auth/login/
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response (200 OK):**
```json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user": {
    "user_id": 1,
    "email": "user@example.com",
    "username": "johndoe",
    "first_name": "John",
    "last_name": "Doe",
    "bio": "Software developer",
    "profile_picture_url": "https://res.cloudinary.com/...",
    "location": "Lagos, Nigeria"
  }
}
```

---

#### Skills (`/api/v1/skills/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | List all skills | No |
| POST | `/` | Create a skill (admin) | Yes (Admin) |
| GET | `/<skill_id>/` | Get skill details | No |
| PUT | `/<skill_id>/` | Update skill (admin) | Yes (Admin) |
| DELETE | `/<skill_id>/` | Delete skill (admin) | Yes (Admin) |

---

#### User Skills (`/api/v1/user-skills/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get current user's skills | Yes |
| POST | `/` | Add skill to user | Yes |
| DELETE | `/<id>/` | Remove skill from user | Yes |

---

#### Listings (`/api/v1/listings/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | List all active listings | No |
| POST | `/` | Create a new listing | Yes |
| GET | `/<listing_id>/` | Get listing details | No |
| PUT | `/<listing_id>/` | Update listing | Yes (Owner) |
| PATCH | `/<listing_id>/` | Partial update listing | Yes (Owner) |
| DELETE | `/<listing_id>/` | Delete listing | Yes (Owner) |

##### Example: Create Listing

**Request:**
```http
POST /api/v1/listings/
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Python tutoring for UI/UX design lessons",
  "description": "I'm an experienced Python developer looking to learn UI/UX design principles...",
  "skill_offered": 1,
  "skill_desired": 5,
  "location_preference": "Remote",
  "portfolio_link": "https://github.com/username"
}
```

**Response (201 Created):**
```json
{
  "listing_id": 1,
  "user": {
    "user_id": 1,
    "username": "johndoe"
  },
  "title": "Python tutoring for UI/UX design lessons",
  "description": "I'm an experienced Python developer...",
  "skill_offered": {
    "skill_id": 1,
    "name": "Python Programming"
  },
  "skill_desired": {
    "skill_id": 5,
    "name": "UI/UX Design"
  },
  "status": "active",
  "creation_date": "2025-12-26T15:30:00Z",
  "location_preference": "Remote",
  "portfolio_link": "https://github.com/username",
  "portfolio_images": []
}
```

---

#### Trades (`/api/v1/trades/`)

##### Trade Proposals

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/proposals/` | List user's proposals | Yes |
| POST | `/proposals/` | Create a trade proposal | Yes |
| GET | `/proposals/<id>/` | Get proposal details | Yes |
| PATCH | `/proposals/<id>/` | Update proposal status | Yes |
| DELETE | `/proposals/<id>/` | Withdraw proposal | Yes (Proposer) |

##### Active Trades

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | List user's trades | Yes |
| GET | `/<trade_id>/` | Get trade details | Yes |
| PATCH | `/<trade_id>/` | Update trade status | Yes |

##### Example: Create Trade Proposal

**Request:**
```http
POST /api/v1/trades/proposals/
Authorization: Bearer <token>
Content-Type: application/json

{
  "listing": 1,
  "skill_offered_by_proposer": 5,
  "skill_desired_by_proposer": 1,
  "message": "Hi! I'm interested in your Python tutoring. I can offer UI/UX design lessons in return."
}
```

**Response (201 Created):**
```json
{
  "proposal_id": 1,
  "listing": 1,
  "proposer": {
    "user_id": 2,
    "username": "designer_jane"
  },
  "recipient": {
    "user_id": 1,
    "username": "johndoe"
  },
  "skill_offered_by_proposer": {
    "skill_id": 5,
    "name": "UI/UX Design"
  },
  "skill_desired_by_proposer": {
    "skill_id": 1,
    "name": "Python Programming"
  },
  "message": "Hi! I'm interested in your Python tutoring...",
  "status": "pending",
  "proposal_date": "2025-12-26T16:00:00Z"
}
```

##### Proposal Status Values

| Status | Description |
|--------|-------------|
| `pending` | Awaiting recipient response |
| `accepted` | Proposal accepted, trade created |
| `rejected` | Proposal declined |
| `withdrawn` | Proposer cancelled the proposal |
| `countered` | Recipient made a counter-offer |

##### Trade Status Values

| Status | Description |
|--------|-------------|
| `active` | Trade is confirmed and ongoing |
| `in_progress` | Skills exchange is in progress |
| `completed` | Trade successfully finished |
| `disputed` | Issue raised by one party |
| `cancelled` | Trade was cancelled |

---

#### Messages (`/api/v1/messages/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all conversations | Yes |
| GET | `/conversation/<user_id>/` | Get messages with user | Yes |
| POST | `/` | Send a message | Yes |
| DELETE | `/<message_id>/` | Delete a message | Yes (Sender) |

##### Example: Send Message

**Request:**
```http
POST /api/v1/messages/
Authorization: Bearer <token>
Content-Type: application/json

{
  "recipient": 2,
  "content": "Hi! I saw your listing and I'm interested in trading skills."
}
```

---

#### Notifications (`/api/v1/notifications/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all notifications | Yes |
| PATCH | `/<id>/` | Mark as read | Yes |
| DELETE | `/<id>/` | Delete notification | Yes |
| POST | `/mark-all-read/` | Mark all as read | Yes |

---

#### User Blocks (`/api/v1/userblocks/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | List blocked users | Yes |
| POST | `/` | Block a user | Yes |
| DELETE | `/<block_id>/` | Unblock a user | Yes |

---

## 6. Installation and Configuration

### Backend Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Swapo-Org/Swapo.git
cd Swapo/Backend
```

#### 2. Create Virtual Environment

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

#### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

#### 4. Configure Environment Variables

Create a `.env` file in the `Backend/` directory:

```env
SECRET_KEY=your-super-secret-key-change-in-production
DEBUG=True
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

#### 5. Run Migrations

```bash
python manage.py migrate
```

#### 6. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

#### 7. Start Development Server

```bash
python manage.py runserver
```

The backend will be available at `http://localhost:8000`

---

### Frontend Setup

#### 1. Navigate to Frontend Directory

```bash
cd ../Frontend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the `Frontend/` directory:

```env
VITE_API_URL=http://localhost:8000/api/v1
VITE_BACKEND_URL=http://localhost:8000
```

#### 4. Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`


## 7. Changelog and Contributor Guidelines

### Git Workflow

1. **Main Branch**: `main` - Production-ready code
2. **Development Branch**: `develop` - Integration branch
3. **Feature Branches**: `feature/feature-name`
4. **Bugfix Branches**: `bugfix/bug-description`

### Contributing

#### Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch from `develop`
4. Make your changes
5. Submit a Pull Request

#### Code Style Guidelines

**Backend (Python/Django):**
- Follow PEP 8 guidelines
- Use meaningful variable and function names
- Add docstrings to functions and classes
- Keep functions focused and small

**Frontend (TypeScript/React):**
- Use TypeScript strictly
- Follow React hooks best practices
- Use functional components
- Format code with Prettier (`npm run format`)
- Lint code with ESLint (`npm run lint`)

#### Pull Request Process

1. Update documentation if needed
2. Add/update tests for new functionality
3. Ensure all tests pass
4. Request review from at least one maintainer
5. Squash commits before merging

#### Commit Message Format

```
type(scope): brief description

[optional body]

[optional footer]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples:**
```
feat(auth): add GitHub OAuth integration
fix(listings): resolve pagination issue
docs(readme): update installation instructions
```

### Reporting Issues

1. Check existing issues first
2. Use the issue template if available
3. Provide clear reproduction steps
4. Include environment details (OS, browser, versions)

### Feature Requests

1. Describe the feature clearly
2. Explain the use case
3. Suggest implementation approach (optional)

