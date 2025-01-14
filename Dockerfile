# base image

FROM node:20-alpine

# set working directory

WORKDIR /app

# copy package.json

COPY package.json .

# install dependencies

RUN npm install

# coppy the files

COPY . .

# run the app

CMD ["npm", "start"]




