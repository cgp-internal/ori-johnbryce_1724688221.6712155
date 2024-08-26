#!/bin/bash

# Install Node
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

# Init a project
mkdir -p /app
cd /app
npm init -y

# Install Express
npm install express

# Install dependencies
npm install