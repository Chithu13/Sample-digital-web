# pull official base image
FROM node:latest

# create folder
RUN mkdir -p /usr/src/app

# set working directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app

# install dependency
RUN npm install

COPY . /usr/src/app

EXPOSE 5000

# start the server
CMD ["npm","run", "dev"]