# Description: Dockerfile for creating a container for React app
FROM node:20-alpine


# Create app directory
WORKDIR /app


# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 5173

# Start the app
CMD [ "npm",  "run" , "dev" ]


# Build the image




