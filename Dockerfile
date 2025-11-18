# --- Build stage --------------------------------------------------
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install deps
RUN npm install

# Copy the rest of the app
COPY . .

# Build for production
RUN npm run build

# --- Runtime stage ------------------------------------------------
FROM nginx:1.27-alpine

# Copy build output to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: custom nginx.conf (not strictly needed for SPA)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
