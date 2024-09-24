FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .

ARG VITE_RESEND_KEY
ARG VITE_EMAIL

ENV VITE_RESEND_KEY=$VITE_RESEND_KEY
ENV VITE_EMAIL=$VITE_EMAIL

RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3011

ENV NODE_ENV=production
# ENV HOST=0.0.0.0
ENV PORT=3011
ENV ORIGIN=http://localhost:3011

CMD [ "npm", "run", "production" ]