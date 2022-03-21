# FROM node:12.14.1-alpine

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# RUN apk update && apk upgrade
# COPY . /usr/src/app/

# # RUN npm install
# # RUN npm rebuild node-sass
# # RUN npm run build

# RUN yarn install
# RUN yarn add node-sass
# RUN yarn build

# EXPOSE 3000

# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=3000

# # CMD [ "npm", "start" ]
# CMD [ "yarn", "start" ]

FROM node:12.14.1-alpine as dependencies

RUN mkdir -p /usr/app
WORKDIR /usr/app

ARG PORT
ARG HOST

COPY package*.json ./
RUN npm install
# ENV API_ENV=production                                                                                                       
COPY ./ ./
RUN npm run build

FROM --platform=linux/amd64 nginx:1.17.2-alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=dependencies /usr/app/dist ./

EXPOSE 80