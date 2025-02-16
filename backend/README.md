# Sustainability Tracker Backend

## Overview
This project is a Node.js backend for tracking sustainability actions such as carpooling, recycling, and reducing plastic use. It provides a RESTful API to manage sustainability actions.

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd sustainability-tracker/backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Run the server**
   ```
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### GET /api/actions
Fetches a list of sustainability actions stored in `data.json`.

**Response:**
- Returns a JSON array of action objects.

### POST /api/actions
Adds a new sustainability action to the `data.json` file.

**Request Payload:**
```json
{
  "id": 1,
  "action": "Carpooling",
  "date": "2025-01-08",
  "points": 50
}
```

**Response:**
- Returns the added action object.

## Data Storage
Sustainability actions are stored in a JSON file located at `src/data.json`. The file contains an array of action objects, each with the following properties:
- `id`: Unique identifier for the action.
- `action`: Description of the sustainability action.
- `date`: Date of the action.
- `points`: Points awarded for the action.

## License
This project is licensed under the MIT License.