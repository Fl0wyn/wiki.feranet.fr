---
title: Partage SAMBA
category: Linux
---

```bash
# Mise à jour et installation
> apt update
> apt install smbclient cifs-utils

# Création du répertoire
> mkdir /home/share

# Ajout des informations d'authentification
> nano /etc/samba/user
username=Utilisateur
password=MotDePasse

# Monter le répertoire automatiquement au démarrage
> nano /etc/fstab
//SRV-WINDOWS/prod/share /home/share cifs  credentials=/etc/samba/user,noexec  0 0
```