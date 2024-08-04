#!/bin/bash

# Navigate to the application directory
cd /root/my_project

# Pull the latest changes
git pull

# Install dependencies (if any)
npm install

# Build the application (if needed)
npm run build

# Restart the application (adjust based on how you run your app)
pm2 restart all
