# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /devops

RUN mkdir /devops/mount

# Installing dependencies
COPY ./package*.json /devops

RUN npm install

# Copying all the files in our project
COPY . .

VOLUME /devops/mount

# Starting our application
CMD ["npm","start"]