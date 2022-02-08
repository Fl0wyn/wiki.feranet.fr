---
title: Docker
category: Linux
---

## Installation

[Documentation officiel](https://docs.docker.com/engine/install/)

## Télécharger et éxécuter une image

```bash
# Télécharger une image ou la mettre à jour
docker pull debian

# Executer et démarrer une image
docker run debian
```

## Commande d'éxecution plus complète

```bash
# Donner un nom au conteneur
--name my_debian
# Supprimer le container apres chaque utilisation
--rm
# Détacher le container
-d
# Nat le port 8080 de l'hote sur le 80 du conteneur
-p 8080:80
# Afficher le retour du conteneur et permet une interface avec lui
-ti
# Affecter une varible d'environement
-e NAME=debian_variable
# Monter le dossier /var/www/html de l'hôte vers le dossier /var/lib/debian du conteneur avec les bon droits :
-v /var/www/html:/var/lib/debian:ro
# Éxecuter la commande bash
bash
# Nom de l'hôte :
-h toto

# Exemple
docker run -d --name my_debian --rm -p 8080:80 -ti -e NAME=debian_variable -v /var/www/html:/var/lib/debian:ro -h toto debian bash
```

## Modification sur les containers

```bash
# Se connecter à un conteneur
docker exec -ti my_debian bash

# Lier le conteneur phpServeur avec apache2 et lancé un terminal
docker run -it --link phpServeur:phpServeur httpd bash
```

## Démarrer / Arrêter

```bash
# Démarrer un conteneur
docker start my_debian

# Arrêter un conteneur
docker stop my_debian
```

## Information

```bash
# Afficher les processus
docker ps -a

# Afficher les images
docker images -a

# Stats docker en temps réél
docker stats
```

## Suppression

```bash
# Supprimer tous les conteneurs
docker rm $(docker ps -a -q)

# Supprimer toutes les images
docker rmi -f $(docker images -a -q)

# Supprimer les images, les conteneurs arrêtées, les réseaux inutilisées et construit le cache
docker system prune
```

## Construire / Exporter / Importer

```bash
# Construire une image depuis Dockerfile
docker build -t my_debian .

# Envoyer une image sur le DockerHub
docker push user/my_debian:latest

# Exporter une image en .tar
docker save -o ./my_debian.tar my_debian

# Importer une image en .tar
docker load -i my_debian
```

## docker-compose.yml

```bash
# Voir le status
docker-compose ps

# Valider la syntaxe
docker-compose config

# Affichier les logs
docker-compose logs -f --tail 5
```

## Mettre à jour docker-compose.yml

```bash
docker-compose pull

# Relancer les containers
docker-compose up -d --remove-orphans

# Supprimez les images obsolètes
docker image prune
```

## Exemple de configuration docker-compose.yml

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
