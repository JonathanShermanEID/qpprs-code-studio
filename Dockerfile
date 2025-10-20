# Q++RS Code Studio - Docker Container
# Author: Jonathan Sherman
# Copyright: © 2025 Jonathan Sherman. All Rights Reserved.

FROM node:22-alpine

# Set metadata
LABEL maintainer="Jonathan Sherman"
LABEL description="Q++RS Code Studio - AI-Powered Code Translation Platform"
LABEL version="1.0.0"
LABEL copyright="© 2025 Jonathan Sherman. All Rights Reserved."

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY api/ ./api/
COPY public/ ./public/
COPY vercel.json ./vercel.json
COPY .security-policy ./.security-policy

# Install Vercel CLI globally
RUN npm install -g vercel

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Start the application
CMD ["vercel", "dev", "--listen", "3000"]

