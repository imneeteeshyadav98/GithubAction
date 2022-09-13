# Stage 1
FROM node:16.15.0-alpine as build-step
ARG ENV_FILE
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN echo $ENV_FILE > test.txt
RUN npm install
RUN npm run build




CMD ["npm", "run", "dev"]

# # Stage 2
# FROM nginx:1.21.3-alpine
# COPY --from=build-step /app/build/ /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
