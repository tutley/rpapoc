FROM alpine:edge

RUN apk --no-cache add tini git openssh-client \
  && apk --no-cache add --virtual devs tar curl

#Install Caddy Server

# RUN curl "https://caddyserver.com/download/build?os=linux&arch=amd64&features=DNS%2Cawslambda%2Ccors%2Cexpires%2Cfilemanager%2Cgit%2Chugo%2Cipfilter%2Cjsonp%2Cjwt%2Clocale%2Cmailout%2Cminify%2Cmultipass%2Cprometheus%2Cratelimit%2Crealip%2Csearch%2Cupload%2Ccloudflare%2Cdigitalocean%2Cdnsimple%2Cdyn%2Cgandi%2Cgooglecloud%2Clinode%2Cnamecheap%2Crfc2136%2Croute53%2Cvultr" \
RUN curl "https://caddyserver.com/download/linux/amd64?plugins=http.authz%2Chttp.cache%2Chttp.cgi%2Chttp.cors%2Chttp.filemanager%2Chttp.git%2Chttp.grpc%2Chttp.jwt%2Chttp.login%2Chttp.mailout%2Chttp.realip&license=personal" \
  | tar --no-same-owner -C /usr/bin/ -xz caddy

#Remove build devs
RUN apk del devs

#Copy over a default Caddyfile
COPY ./Caddyfile /etc/Caddyfile

#USER caddy

ENTRYPOINT ["/sbin/tini"]

CMD ["caddy", "--conf", "/etc/Caddyfile"]