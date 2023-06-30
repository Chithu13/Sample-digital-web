# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /react

# add `/react/node_modules/.bin` to $PATH
ENV PATH /react/node_modules/.bin:$PATH

# install react dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add react
COPY . ./

# start react
CMD ["npm", "start"]