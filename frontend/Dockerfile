# # # # # FIRST STAGE (BUILD) # # # # #

FROM node:22-alpine3.19 as builder

WORKDIR /app/

# Copy package.json and package-lock.json first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Run the build process
RUN npm run build

# # # # # SECOND STAGE (SERVE) # # # # #

FROM node:22-alpine3.19

WORKDIR /app/

# Install a simple http server globally
RUN npm install -g http-server

# Copy only the built assets from the builder stage
COPY --from=builder /app/dist /app/dist

# Serve the build using http-server on port 3000
CMD [ "http-server", "dist", "-p", "3000" ]
