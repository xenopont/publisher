FROM node:20.1.0-bullseye-slim

LABEL maintainer="smith404@live.com"

ENV NODE_ENV="development"
WORKDIR /srv/api
COPY ./docker/dev-api.start.sh /tmp/start.sh
CMD ["bash", "/tmp/start.sh"]
