# aelitneg.com

Code for my website, aelitneg.com

## Development

To start a local development environment, create a `.env.development` file from `.env.example` and start the containers:

```sh
docker-compose \
--env-file .env.development \
-f docker-compose.yml \
-f docker-compose.dev.yml \
up
```
