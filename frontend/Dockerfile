# Base node image with improved caching
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Development dependencies stage
FROM base AS deps
WORKDIR /app

# Enable corepack for better package management
RUN corepack enable

# Copy package manager lock file
COPY package.json package-lock.json* ./

# Install dependencies with specific flags for faster, more reliable builds
RUN npm ci --ignore-scripts && \
    npm cache clean --force && \
    # Install critters for CSS inlining optimization
    npm install critters --save-dev

# Development stage for hot reloading
FROM base AS development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start development server with hot reloading
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js application
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production runner stage
FROM base AS runner
WORKDIR /app

# Set environment variables for production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public directory and configure permissions
COPY --from=builder /app/public ./public
RUN mkdir .next && \
    chown nextjs:nodejs .next

# Copy built application with proper permissions
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --spider http://localhost:3000 || exit 1

# Use non-root user for better security
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"] 