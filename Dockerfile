FROM node:14-alpine3.16

WORKDIR /app/order-service

COPY . /app/order-service/

RUN npm i

COPY . /app/order-service/

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

CMD node ${FILE_PATH}

EXPOSE ${PORT}
EXPOSE ${NODE_ENV}
