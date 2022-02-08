---
title: SSH
category: Linux
---

## Se connecter à une machine distante

```bash
# Sur le port 22
ssh root@1.2.3.4

# Sur le port 5678
ssh -p 5678 root@1.2.3.4
```

## Se connecter sans mot de passe

```bash
# Génération d'une clé

# -o : Sauvegarde la clé dans le nouveau format openssh
# -a : Nombre de tour de fonction de dérivation des clés
# -t : Spécifier le type de clé qu’on créé.
# -f : Répertoire de sortie de la clé
# -C : Ajouter un commentaire à la clé

ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519 -C "email@example.com"

# Envoie de la clé à la machine distante
ssh-copy-id -i .ssh/id_ed25519.pub root@1.2.3.4
```

## Envoyé un fichier du client vers le serveur

```bash
scp fichier.sh root@1.2.3.4:/home/eve

# Sur le port 5678
scp -P 5678 fichier.sh root@1.2.3.4:/home/eve

# Envoyer un dossier
scp -r dossier root@1.2.3.4:/home/eve
```

## Envoyé un fichier du serveur vers le client

```bash
scp root@1.2.3.4:fichier.sh /home/eve

# Sur le port 5678
scp -P 5678 root@1.2.3.4:fichier.sh /home/eve

# Envoyer un dossier
scp -r root@1.2.3.4:dossier /home/eve
```

## Executer une commande

```bash
ssh root@1.2.3.4 'df -h'

# Sur le port 5678
ssh -P 5678 root@1.2.3.4 'df -h'
```

## Executer un script

```bash
ssh root@1.2.3.4 './scripts.sh'

# Sur le port 5678
ssh -P 5678 root@1.2.3.4 './scripts.sh'
```

## Executer une fonction à l'intérieur d'un script

```bash
ssh root@1.2.3.4 "$(declare -f fonction_creation); fonction_creation" > /dev/null 2>&1

# Sur le port 5678
ssh -P 5678 root@1.2.3.4 "$(declare -f fonction_creation); fonction_creation" > /dev/null 2>&1
```

## Autres commandes utiles

```bash
# Tester votre configuration et la débug
sshd -T

# Liste les ciphers disponible sur votre serveur
ssh -Q cipher

# Liste les ciphers d’authentification
ssh -Q cipher-auth

# Liste les MAC
ssh -Q mac

# Liste les algorithmes
ssh -Q kex

# Liste les clé
ssh -Q key
```

## Sécuriser la configuration

Modifier les permissions pour éviter les erreurs

```bash
chmod 0700 ~/.ssh
chmod 0600 ~/.ssh/id_ed25519
chmod 0644 ~/.ssh/authorized_keys
```

Faire une copie du fichier de configuration `/etc/ssh/sshd_config`

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
```

Modifier le fichier de configuration `/etc/ssh/sshd_config`

```bash
# Interface & Port
Port 5678
AddressFamily any
ListenAddress 0.0.0.0
ListenAddress ::

HostKey /etc/ssh/ssh_host_ed25519_key

Protocol 2

SyslogFacility AUTHPRIV
LogLevel VERBOSE

# Authentication restriction
LoginGraceTime 30s
PermitRootLogin no
StrictModes yes
MaxAuthTries 3
MaxSessions 5

PubkeyAuthentication yes
AllowUsers bob
AuthorizedKeysFile  .ssh/authorized_keys

HostbasedAuthentication no
IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
PermitEmptyPasswords no
PasswordAuthentication no

# Change to no to disable s/key passwords
ChallengeResponseAuthentication no

UsePAM yes

AllowAgentForwarding no
AllowTcpForwarding no
GatewayPorts no
X11Forwarding no
PermitTTY yes
PermitUserEnvironment no
PrintMotd no
PrintLastLog no

#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#ShowPatchLevel no
UseDNS yes
PidFile /var/run/sshd.pid
MaxStartups 10:30:100
PermitTunnel no
#ChrootDirectory none
VersionAddendum none

# no default banner path
Banner none
DebianBanner no

# Accept locale-related environment variables
AcceptEnv LANG LC_*

# override default of no subsystems
Subsystem   sftp   /usr/libexec/openssh/sftp-server
```

```bash
# Régénération de la clé ED25519 du serveur
sudo rm -f /etc/ssh/ssh_host_*
sudo ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key -N ""

# Retrait des moduli Diffie-Hellman faible
sudo awk '$5 >= 3071' /etc/ssh/moduli > /etc/ssh/moduli.safe
sudo mv -f /etc/ssh/moduli.safe /etc/ssh/moduli

# Désactivation des clés DSA/ECDSA & RSA
sudo sed -i 's/^HostKey \/etc\/ssh\/ssh_host_\(dsa\|ecdsa\|rsa\)_key$/\#HostKey \/etc\/ssh\/ssh_host_\1_key/g' /etc/ssh/sshd_config

# Restriction des ciphers, clés d’échange et des codes d’authentification
# Injecte de nos ciphers, clé et codes d'authentification
echo -e "\nKexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512\nCiphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr\nMACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,umac-128-etm@openssh.com" >> /etc/ssh/sshd_config

# Interdire les connexions SSH à tout le monde sauf nos adresses IP :
echo "sshd: ALL" >> /etc/hosts.deny
echo "sshd: 1.2.3.4, 5.6.7.8" >> /etc/hosts.allow

# Redémarrage du service sshd :
sudo systemctl restart sshd.service

# Tester le serveur
# Le site ssh-audit : https://www.ssh-audit.com/
# L’outil python ssh-audit : https://github.com/jtesta/ssh-audit
```

## Configuration des hôtes

Créer et modifier le fichier `.ssh/config` à la racine du dossier de l'utilisateur

```bash
Host john
    HostName example.com
    User root
    Port 5678

Host eve
    HostName 1.2.3.4
    User pi
    IdentityFile ~/.ssh/id_ed25519
```

Se connecter en ssh en utilisant le fichier `.ssh/config`

```bash
ssh john
ssh eve
```

> Ajouter les commandes à éxecuter lors d'une nouvelle connexion SSH dans le fichier `/etc/ssh/sshrc`
