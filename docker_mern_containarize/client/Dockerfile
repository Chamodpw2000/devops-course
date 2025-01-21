FROM node:20.11.1

WORKDIR /app

COPY package.json .

# Clean install with specific platform target
RUN npm install --platform=linux --arch=x64

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
