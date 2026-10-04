# React Node AI Platform

> 🚧 Work in Progress
# Full-Stack AI Web Application

A full-stack web application built with React and Node.js, featuring Supabase authentication, reusable React components, Styled Components, GSAP animations, pagination, stepper components, and a functional AI assistant powered by the OpenAI Responses API.

I decided to publish this project early instead of waiting until it is fully completed, so the development process, improvements, architectural changes, and new features can be followed over time.

The project is actively being developed and updated regularly.

---

## Current Status

The application is currently functional on desktop and laptop screens.

Responsive design for mobile devices is not yet completed.

> **Important:**  
> The current version is intended primarily for desktop and laptop use.  
> Mobile layouts may not display correctly yet.

---

## Current Features

- React-based frontend
- Supabase Authentication
- User registration
- Sign in
- Login
- Logout
- Password reset
- Session handling
- Protected application areas
- Header navigation
- Footer architecture
- Pagination
- Stepper components
- Dynamic React components
- Reusable components
- Styled Components
- GSAP animations
- Interactive AI chat interface
- OpenAI Responses API integration
- AI-generated chatbot responses
- Node.js backend communication
- Dynamic message rendering
- Automatic chat scrolling
- Message timestamps
- Message deletion
- Input validation
- AI response loading state
- LinkedIn integration
- GitHub integration

---

## Authentication

Authentication is implemented with Supabase.

Current authentication features include:

- User registration
- Sign in
- Login
- Logout
- Password reset
- Session handling
- Protected application areas

Supabase Authentication is used to manage users and authentication state.

The authentication logic is already functional, while the visual design of the login, registration, and password recovery interfaces is still being improved.

A more polished authentication interface and additional animations are planned.

---

## User Interface

The user interface is built primarily with reusable React components and Styled Components.

The project includes:

- Component-based UI architecture
- Reusable UI components
- Dynamic rendering
- Styled Components
- Custom CSS
- React Icons
- Interactive elements
- Animated UI sections

---

## AI Assistant

The AI assistant is now integrated into the application and connected to the backend.

The current assistant includes a custom text-based chat interface connected to a Node.js backend and the OpenAI Responses API.

Current chat functionality includes:

- User message input
- Dynamic message objects
- AI-generated responses
- Message history
- Automatic scrolling
- Message timestamps
- Empty-message validation
- Message deletion
- Loading state while waiting for AI responses
- Custom chat UI
- User and assistant message structure
- Backend communication with Node.js
- OpenAI Responses API integration

The AI assistant can be accessed from the footer area of the application.

The next major development step is adding voice interaction and expanding the assistant into a more advanced AI-powered experience.

---

## AI Architecture

Current architecture:

React Frontend  
↓  
Node.js Backend  
↓  
OpenAI Responses API  
↓  
Node.js  
↓  
React Chat Interface

The frontend sends user messages to the Node.js backend.

The backend securely communicates with the OpenAI Responses API using environment variables and returns AI-generated responses to the React application.

API credentials are kept on the server side and are not exposed to the client.

---

## AI Development Roadmap

The text-based AI chatbot is now functional and connected to the backend and the OpenAI Responses API.

The next development phase will focus on improving the assistant with:

- Conversation history improvements
- Persistent chat storage
- Supabase integration
- User-specific conversations
- Improved error handling
- Streaming responses
- Voice interaction
- Voice-enabled AI assistant
- More advanced AI-agent functionality

The long-term goal is to evolve the current text-based chatbot into a voice-enabled AI assistant with more advanced capabilities.

---

## Backend

The backend is implemented with Node.js and Express.

It currently handles:

- API requests from the React frontend
- Communication with the OpenAI Responses API
- Protection of API credentials through environment variables
- Chat request processing
- Returning AI-generated responses to the frontend
- Communication between the frontend and external services

The backend acts as the communication layer between the React frontend and external APIs.

Additional backend functionality will continue to be added as the project grows.

---

## Supabase

Supabase is already used in the project for authentication and will also be used for additional backend functionality.

Current and planned Supabase usage includes:

- Authentication
- User management
- Session handling
- Protected application areas
- Database functionality
- PostgreSQL
- Persistent application data
- Future chat history storage

---

## Footer

The footer is currently under active development.

It includes multiple sections and reusable components.

Current and planned footer areas include:

- Navigation sections
- Company information
- Product links
- Solution links
- Social links
- GitHub
- LinkedIn
- AI assistant access

Additional footer pages, routes, and UI improvements are still being implemented.

---

## Header

The main header is already implemented.

It includes navigation and authentication-related functionality.

Additional styling and responsive improvements may still be added in future updates.

---

## Animations

The application uses GSAP for interactive animations and UI transitions.

Current and planned animation work includes:

- Entrance animations
- Component transitions
- Scroll-related effects
- Interactive UI animations
- Authentication animations
- Animated sections
- UI transitions

---

## Pagination

The project includes custom pagination functionality.

Pagination is used as part of the application's component architecture and is being improved as the project grows.

---

## Stepper

The application includes stepper-based UI components for multi-step interactions.

The stepper functionality is implemented as part of the reusable React component architecture.

---

## Technologies

### Frontend

- React
- JavaScript
- React Router
- Styled Components
- CSS
- GSAP
- React Icons
- Vite

### Backend

- Node.js
- Express
- REST API

### Authentication

- Supabase Authentication

### Database / Services

- Supabase
- PostgreSQL

### AI

- OpenAI Responses API

### Development Tools

- Git
- GitHub
- GitHub Actions
- npm
- Vite

---

## Development Roadmap

Current development priorities:

1. Add persistent chat history
2. Expand Supabase integration
3. Add streaming AI responses
4. Add voice functionality to the AI assistant
5. Improve error handling
6. Improve authentication UI
7. Complete footer components and routes
8. Add responsive design
9. Improve mobile layouts
10. Continue adding new pages and features
11. Improve AI conversation handling
12. Add user-specific AI conversations
13. Expand future AI-agent capabilities

---

## Responsive Design

Responsive design is currently under development.

The present version is best viewed on:

- Desktop
- Laptop

Mobile support has not yet been completed.

> **Please note:**  
> The current version is not yet optimized for smartphones or small screens.

A fully responsive layout will be added in future updates.

---

## Development Philosophy

This repository is intentionally published before completion.

Instead of uploading only the final version, I want the repository to show the real development process of the application.

The project will continue to evolve through:

- Regular commits
- Refactoring
- UI improvements
- Backend development
- Authentication improvements
- Responsive design
- AI improvements
- Database integration
- New features

---

## Project Goal

The goal of this project is to build a complete modern web application that combines:

- Frontend development
- Authentication
- Reusable React architecture
- Styled Components
- UI animation
- Backend development
- API communication
- Database integration
- AI functionality
- Future voice interaction
- Future AI-agent capabilities

The project is also being used as a practical environment for continuously improving my full-stack development skills.

---

## Future Plans

Planned future improvements include:

- Full responsive design
- Mobile optimization
- Improved authentication UI
- Additional pages
- Completed footer navigation
- Persistent chat history
- Improved AI conversation handling
- Streaming AI responses
- Voice interaction
- Voice-enabled AI assistant
- AI-agent capabilities
- Improved error handling
- Improved loading states
- Additional backend services
- Extended Supabase integration

---

## Links

- Live Demo: Coming soon
- GitHub: Available through this repository
- LinkedIn: Connected through the application

---

## Project Status

> 🚧 **This project is under active development.**

The text-based AI chatbot is now functional and connected to the Node.js backend and OpenAI Responses API.

New features, UI improvements, backend functionality, voice capabilities, database features, and advanced AI functionality will continue to be added regularly.

