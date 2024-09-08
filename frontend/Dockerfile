# # # # # FIRST STAGE (BUILD) # # # # #

FROM node:22-alpine3.19 as builder

WORKDIR /app/

COPY package.json .

RUN npm install

COPY . .

# CMD ["npm", "run", "build"]
RUN npm run build

# # # # # SECOND STAGE (SERVE) # # # # #

FROM node:22-alpine3.19

WORKDIR /app/

# Install a simple http server to serve static content (HAS TO BE -g)
RUN npm install -g http-server

COPY --from=builder /app/dist /app/dist

CMD [ "http-server","dist","-p","3000" ]