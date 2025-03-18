# Base stage with common Go tools
FROM golang:1.24.1-alpine AS base

# Add necessary system packages
RUN apk add --no-cache \
    bash \
    ca-certificates \
    curl \
    git \
    tzdata \
    wget

WORKDIR /app

# Copy go.mod and go.sum files for dependency caching
COPY go.mod go.sum* ./

# Download dependencies
RUN go mod download

# Development stage
FROM base AS development

# Install development tools
RUN go install github.com/air-verse/air@latest && \
    go install github.com/go-delve/delve/cmd/dlv@latest

# Set environment variables for development
ENV GO_ENV=development
ENV CGO_ENABLED=0
ENV GOOS=linux

# Copy the entire project for development
COPY . .

# Expose API port
EXPOSE 8080

# Use air for hot reloading in development
CMD ["air", "-c", ".air.toml"]

# Build stage
FROM base AS builder

# Copy the entire project
COPY . .

# Build the application with detailed error output
RUN CGO_ENABLED=0 GOOS=linux go build -v -o api ./cmd/api

# Production stage
FROM alpine:3.19 AS production

# Add necessary system packages for production
RUN apk add --no-cache \
    ca-certificates \
    tzdata \
    wget

WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/api .

# Copy required configuration files
COPY --from=builder /app/configs ./configs

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose API port
EXPOSE 8080

# Set health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --spider http://localhost:8080/api/health || exit 1

# Run the application
CMD ["./api"] 