FROM node:alpine as builder

WORKDIR /build
COPY . .
RUN yarn install
RUN yarn install --production

FROM node:10.16.3-slim

WORKDIR /app

COPY --from=builder /build/node_modules ./node_modules/
COPY --from=builder /build/index.js .

CMD node index.js