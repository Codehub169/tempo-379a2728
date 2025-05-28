#!/bin/bash

echo "Setting up hueneu website..."

# Ensure the script is run from the project root or adjust paths accordingly.
# Example: cd /path/to/your/project

echo "Installing dependencies..."
# Using --legacy-peer-deps to avoid potential issues with peer dependency conflicts in complex projects.
npm install --legacy-peer-deps

echo "Starting hueneu application on port 9000..."
# The 'npm start' script in package.json handles building the frontend and then starting the server.
# The server/app.js (to be created) should be configured to use process.env.PORT.
export PORT=9000
npm start
