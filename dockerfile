FROM node:16.14.2

WORKDIR /usr/src/tilog-web

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . . 

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]