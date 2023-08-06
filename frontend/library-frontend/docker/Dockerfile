FROM nginx:alpine

COPY build /opt/library

COPY docker/config/nginx.conf /etc/nginx/nginx.conf

COPY docker/config/default.conf /etc/nginx/conf.d/default.conf