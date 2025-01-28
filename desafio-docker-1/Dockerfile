FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY hello-world.go .
RUN CGO_ENABLED=0 GOOS=linux go build -o hello-world hello-world.go

FROM scratch
COPY --from=builder /app/hello-world /hello-world
CMD ["/hello-world"]