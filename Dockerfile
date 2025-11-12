FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy server file
COPY server.js .

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
