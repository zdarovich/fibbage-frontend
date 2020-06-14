FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
ENV NODE_ENV production
ENV VUE_APP_WEBSOCKET_HOST "35.228.202.168"
ENV VUE_APP_WEBSOCKET_PORT 3250
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]