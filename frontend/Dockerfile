# Builder Stage 
FROM node:22-alpine AS builder

WORKDIR /projects/questify/frontend

COPY package*.json ./

#Define a build-time variable (build time => before npm install, runtime after the build process. prepare script is executed during npm install, hence build time variable setup is required.)
ARG VITE_PRODUCTION_ENVIRONMENT=true
ENV VITE_PRODUCTION_ENVIRONMENT=${VITE_PRODUCTION_ENVIRONMENT}

RUN npm ci

COPY . .

RUN npm run build

# Stage Runner
FROM nginx:alpine AS runner

# Vite's build process includes public folder contents into dist folder unlike express, so only copying dist folder is enough.
COPY --from=builder projects/questify/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
