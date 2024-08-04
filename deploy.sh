#!/bin/bash

# Navigate to your project directory
cd /root/my_project

# Pull the latest changes from GitHub
git pull origin main

# Install dependencies
npm install

# Restart your application (assuming you're using PM2 for process management)
pm2 restart your_app_name
