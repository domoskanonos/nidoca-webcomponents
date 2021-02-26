FROM nginx
EXPOSE 80
COPY /showcase/build/ /usr/share/nginx/html/