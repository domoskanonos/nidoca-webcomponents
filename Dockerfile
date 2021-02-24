FROM ubuntu:18.04
RUN apt-get update
RUN yes | apt-get install nodejs
RUN yes | apt-get install npm
RUN yes | apt-get install git
RUN mkdir -p /app
CMD git clone https://github.com/domoskanonos/nidoca.git && npm --prefix ./nidoca run all
