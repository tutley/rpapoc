FROM golang:latest as builder
WORKDIR /go/src/github.com/tutley/rpapoc-hello
RUN curl https://glide.sh/get | sh
RUN git clone https://github.com/tutley/rpapoc-hello.git .
RUN glide install
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o hello .

FROM scratch
COPY --from=builder /go/src/github.com/tutley/rpapoc-hello/hello .
CMD ["./hello"]