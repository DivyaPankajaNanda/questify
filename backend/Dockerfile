# Builder Stage 
FROM node:22-alpine AS builder

WORKDIR /projects/questify/backend

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage Runner
FROM node:22-alpine AS runner

WORKDIR /projects/questify/backend

COPY --from=builder projects/questify/backend/package*.json ./
COPY --from=builder projects/questify/backend/dist ./dist
COPY --from=builder projects/questify/backend/public ./public

RUN npm ci --omit=dev

EXPOSE 8000

CMD [ "node","dist/index.js" ]

