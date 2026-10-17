# Week 2 Node.js Express API

A REST API built with Node.js and Express.js.

## Features
- GET / - Serves a static HTML page.
- POST /user - Accepts a name and email and returns a greeting.
- GET /user/:id - Returns a user profile message.
- JSON request parsing.
- Error handling for missing data (HTTP 400).
- Environment variable configuration using dotenv.
- Custom middleware for logging requests.

## Requirements
- Node.js
- npm

## Installation
1. Clone this repository.
2. Run npm install.
3. Create a .env file and set PORT=3000.
4. Run npm start.

## Testing
- Visit / to view the HTML page.
- Send a POST request to /user with JSON:
  {"name":"John","email":"john@example.com"}
- Visit /user/123 to see a user profile response.

## Author
Ayodeji08
