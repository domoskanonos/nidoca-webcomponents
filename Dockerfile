FROM ubuntu:18.04
RUN apt-get update \
    && sudo apt-get install nodejs \
    && sudo apt-get install npm \
    && rm -rf /var/lib/apt/lists/*
ENTRYPOINT ["/app"]