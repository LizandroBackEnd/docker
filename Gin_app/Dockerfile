FROM ubuntu:22.04 AS builder

RUN apt update \
    && apt install -y curl \
    && curl -L  https://go.dev/dl/go1.23.0.linux-amd64.tar.gz \
    | tar -zxvC /usr/local
 
ENV PATH "$PATH:/usr/local/go/bin"

WORKDIR /app 
COPY go.mod go.sum ./
RUN go mod download 
COPY . . 
RUN go build  

FROM ubuntu:22.04
WORKDIR /app 
COPY --from=builder /app/app-go ./
EXPOSE 8080
CMD ./app_go