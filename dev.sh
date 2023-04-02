#!/usr/bin/env bash

echo "Building an api image..."
docker build -t publisher-dev-api-image --file ./docker/dev-api.dockerfile .

echo "Starting containers..."
docker compose --file ./docker/dev-compose.json up -d

echo "Entering the API container..."
docker exec -it publisher-dev-api bash

echo "Attempting to shutdown the dev containers..."
docker compose --file ./docker/dev-compose.json down
