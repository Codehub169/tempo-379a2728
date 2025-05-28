import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Recreate __dirname and __filename for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// process.env.PORT will be set by startup.sh (to 9000) or can be set by hosting environment.
// Fallback to 3001 for local development if PORT is not otherwise specified.
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing. For production, consider configuring specific origins.
app.use(express.json()); // Middleware to parse JSON request bodies.

// Serve static files from the React build directory (expected to be 'dist')
// The 'server' directory (where this app.js resides) is one level down 
// from the project root, where the 'dist' folder is located.
const staticFilesPath = path.join(__dirname, '..', 'dist');
app.use(express.static(staticFilesPath));

// API routes can be defined here in the future.
// Example:
// app.get('/api/data', (req, res) => {
//   res.json({ message: 'Hello from server API!' });
// });

// Catch-all route to serve index.html for Single Page Applications (SPA)
// This ensures that client-side routing (e.g., React Router) works correctly
// by always serving the main HTML page for any non-API, non-static-file route.
app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'), (err) => {
    if (err) {
      // Log the error and send a 500 response if index.html cannot be sent
      console.error('Error sending index.html:', err);
      res.status(500).send('Error serving the application.');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Frontend application should be accessible at http://localhost:${PORT}`);
  console.log(`Serving static files from: ${staticFilesPath}`);
});
