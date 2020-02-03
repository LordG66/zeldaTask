FROM node:10 AS base
COPY . .
RUN npm audit fix
RUN npm install
RUN npm run-script build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=base ./build ./usr/share/nginx/html
