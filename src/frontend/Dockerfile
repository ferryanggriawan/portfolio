FROM node:18-alpine as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ARG BUILD 

RUN npm run ${BUILD}

FROM gcr.io/distroless/nodejs:18 as prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["/app/.output/server/index.mjs"]