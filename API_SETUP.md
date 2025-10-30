# API Setup for Zinnia UI

## Quick Start

To run the full development environment with both frontend and API server:

```bash
npm run dev:full
```

This will start:
- Frontend (Vite) on http://localhost:3000
- API Server (Express) on http://localhost:3001

## Individual Commands

### Frontend Only
```bash
npm run dev
```

### API Server Only
```bash
npm run server
```

## API Endpoints

### SMS
- **POST** `/api/send-sms`
- **Body**: `{ "to": "+1234567890", "body": "Message text" }`
- **Response**: `{ "success": true, "messageId": "SM...", "status": "sent" }`

### Email
- **POST** `/api/send-email`
- **Body**: `{ "to": "email@example.com", "subject": "Subject", "htmlContent": "HTML content" }`
- **Response**: `{ "success": true, "messageId": "EM...", "status": "sent" }`

### Health Check
- **GET** `/api/health`
- **Response**: `{ "status": "OK", "timestamp": "..." }`

## Notes

- The API server is currently a mock implementation
- SMS messages are logged to console but not actually sent via Twilio
- To enable real Twilio sending, uncomment the Twilio SDK code in `server.js`
- Make sure to set your Twilio credentials as environment variables in production

















