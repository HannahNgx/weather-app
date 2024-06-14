FROM node:20

WORKDIR /usr/src/app/ui

COPY . ./

RUN npm install
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
