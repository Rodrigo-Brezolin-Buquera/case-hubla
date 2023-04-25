FROM node:16

WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . /backend/

RUN npm run build

EXPOSE 3003

CMD [ "npm", "start" ]