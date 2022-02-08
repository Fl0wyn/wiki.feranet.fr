---
title: Docker
category: Linux
---

## Setup

[Documentation officiel](https://docs.docker.com/engine/install/)

## Download and run an image

```bash
# Download or update an image
docker pull debian

# Run and start an image
docker run debian
```

## More complete execution control

```bash
# Give the container a name
--name my_debian
# Delete the container after each use
--rm
# Detach the container
-d
# Nat port 8080 of the host to 80 of the container
-p 8080:80
# Display the return of the container and allow an interface with it
-ti
# Assign an environment variable
-e NAME=debian_variable
# Mount the /var/www/html folder of the host to the /var/lib/debian folder of the container with the right rights:
-v /var/www/html:/var/lib/debian:ro
# Run the bash command
bash
# Hostname :
-h toto

# Example
docker run -d --name my_debian --rm -p 8080:80 -ti -e NAME=debian_variable -v /var/www/html:/var/lib/debian:ro -h toto debian bash
```

## Modification on the containers

```bash
# Connect to a container
docker exec -ti my_debian bash

# Link the phpServer container with apache2 and start a terminal
docker run -it --link phpServer:phpServer httpd bash
```

## Start / Stop

```bash
# Start a container
docker start my_debian

# Stop a container
docker stop my_debian
```

## Information

```bash
# Show processes
docker ps -a

# Show images
docker images -a

# Docker stats in real time
docker stats
```

## Deletion

```bash
# Delete all containers
docker rm $(docker ps -a -q)

# Delete all images
docker rmi -f $(docker images -a -q)

# Delete images, stopped containers, unused networks and build cache
docker system prune
```

## Build / Export / Import

```bash
# Build an image from Dockerfile
docker build -t my_debian .

# Send an image to the DockerHub
docker push user/my_debian:latest

# Export an image as .tar
docker save -o ./my_debian.tar my_debian

# Import a .tar image
docker load -i my_debian
```

## docker-compose.yml

```bash
# See status
docker-compose ps

# Validate the syntax
docker-compose config

# Show logs
docker-compose logs -f --tail 5
```

## Update docker-compose.yml

```bash
docker-compose pull

# Restart containers
docker-compose up -d --remove-orphans

# Remove obsolete images
docker image plum
```

## Example of docker-compose.yml configuration

```docker
version: '3'
services:
  app:
    image: nginx
    container_name: nginx_app
    hostname : nginx
    restart: always
    ports:
      - "80:8787"
    volumes:
      - ./data:/data/
    environment:
      HOST=http://0.0.0.0:8787
    devices:
      - "/dev/sda:/dev/sda"
```
