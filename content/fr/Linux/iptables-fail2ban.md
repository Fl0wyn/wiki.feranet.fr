---
title: Iptables & Fail2ban
category: Linux
---

## Installation

<code-group>
   <code-block label="Debian" active>

```bash
sudo apt install iptables ipset fail2ban
```

   </code-block>
   <code-block label="RHEL">

```bash
sudo dnf install iptables ipset fail2ban
```

</code-group>

## Configuration Iptables

Copiez la liste des règles iptables dans le fichier `/root/firewall.sh` et modifiez-les puis rendez-la exécutable

```bash
curl -L https://git.io/JeSL5 > /root/firewall.sh
chmod +x /root/firewall.sh
```

Tester et vérifier l'exécution du script

```bash
bash /root/firewall.sh
iptables -L
```

Rendre les règles non volatiles

```bash
iptables-save > /etc/firewall.conf
```

Ouvrez `/etc/network/if-up.d/iptables` et ajoutez ce qui suit

```bash
#!/bin/bash
iptables-restore < /etc/firewall.conf
```

Rendre exécutable

```bash
chmod +x /etc/network/if-up.d/iptables
```

### Administration

Modifier les règles

```bash
vim /root/firewall.sh
bash /root/firewall.sh
iptables-save > /etc/firewall.conf
```

Voir les adresses IP interdites à partir du fichier `banip.txt`

```bash
iptables -L INPUT -nv --line-numbers | grep DROP
```

Voir les adresses IP interdites d'ipset

```bash
ipset -L
```

> Créez un fichier `banip.txt` et ajoutez l'ip à bannir manuellement

## Configuration Fail2ban

Copiez le fichier de configuration pour éviter qu'il ne soit écrasé lors d'une mise à jour

```bash
cd /etc/fail2ban
cp jail.conf jail.local
```

Modification du fichier `jail.local`

```bash
# Liste des adresses IP ou des hôtes DNS ignorés
ignoreip = 127.0.0.1/8 ::1

# Ban Time
bantime  = 2h

# Temps entre chaque panne
findtime  = 20m

# Nombre d'échecs avant un bannissement
maxretry = 6
```

Pour activer les jails, créez un fichier `jail-d.conf` dans le répertoire `/etc/fail2ban/jail.d` et ajoutez le nom du jail avec la valeur `True`
Exemple avec les prisons **ssh**et **apache2**

```bash
[sshd]
port = 2222
enabled = true

[apache-auth]
enabled = true
```

### Listes de commandes

```bash
# Afficher le status des prisons actives
fail2ban-client status

# Afficher le status d'une prison active
fail2ban-client status sshd

# Débannir une adresse IP
fail2ban-client unban 1.2.3.4

# Débannir une adresse IP d'un service
fail2ban-client set sshd unban 1.2.3.4
```
