# rpaPOC

The purpose of this project is to try out Reverse Proxy Authentication using Caddy as the proxy server and "microservices" written in Golang.

---

To test: download this repo then,

* docker-compose up
* browse to http://localhost:8000
* sign in - user: tester pass: password
* click stuff

---

This is a proof of concept for using a reverse proxy (Web request router) to handle top level authorization for a set of microservices. The Proxy is the only thing exposed to the internet, and the microservices all run on a private network. The Proxy takes a request and sends it to the appropriate microservice based on routing rules. If the microservice is protected (it needs a user to be logged in) then the proxy checks for a JWT and if present, parses the claims and sends those to the microservice. If no JWT is present, the proxy will redirect the request to the authorization microservice.

In this POC, we are using a simple "hello" app that identifies itself and identifies the user. It pulls user information from a database after pulling the username that it received from the Proxy.

This POC is using docker compose to spin up several containers and run them on a "private" network, which exposes port 8000 to the end user. So you can test it by running it and browsing to localhost:8000

### Notes

* The microservices are containerized by using a multi-stage docker file which actually pulls the code from github, builds the executable, then puts it in a very small container
* The Caddy server reads the claims from the JWT token and passes them along to the microservices in the http header, so the caddy server has to share the same base JWT information (a secret in this case) with the authorization service
* There are some apps out there like Gogs which support reverse proxy authentication, meaning that you could add it as just another microservice in this architecture and a user wouldn't have to re-login to it.

### Ways of passing a token for validation

There are three ways to pass the token for validation: (1) in the `Authorization` header, (2) as a cookie, and (3) as a URL query parameter. The middleware will look in those places in the order listed and return `401` if it can't find any token.

| Method               | Format                          |
| -------------------- | ------------------------------- |
| Authorization Header | `Authorization: Bearer <token>` |
| Cookie               | `"jwt_token": <token>`          |
| URL Query Parameter  | `/protected?token=<token>`      |

API requests are going to use the Authorization Header usually

