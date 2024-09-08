# # # # # FIRST STAGE (BUILD) # # # # #

FROM node:22-alpine3.19 as builder

WORKDIR /app/

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "build"]
