---
title: Commandes Windows
category: Windows
---

## Redémarrage un serveur

| heure | Commande               |
| ----- | ---------------------- |
| 05:00 | `shutdown /r /t 18000` |
| 10h00 | `shutdown /r /t 36000` |
| 15h00 | `shutdown /r /t 54000` |
| 20h00 | `shutdown /r /t 72000` |

Redémarrer un serveur à distance

```powershell
shutdown /r /m \\srv-distant /t 10
```

## Commandes AD

```powershell
# Afficher le ou les DC
nltest /dclist:%USERDOMAIN%

# Afficher la synchronisation des DC
repadmin /replsum
```

## Commandes TSE

```powershell
# Afficher les utilisateurs et le temps de connexion
query user

# Afficher les sessions connectés
query session

# Déconnecter la session de l'utilisateur [ID}
reset session [ID]
```

## Resynchronisation NTP

Serveur

```powershell
net stop w32time
w32tm /config /manualpeerlist:"time.windows.com,0x8 fr.pool.ntp.org,0x8" /syncfromflags:MANUAL /reliable:yes
net start w32time
w32tm /resync
w32tm /query /status
```

Client

```powershell
w32tm /config /syncfromflags:domhier /update
net stop w32time && net start w32time
```

## Désactiver Bit Locker

Ouvrir PowerShell en administrateur et entrer la commande suivante :

```powershell
Disable-Bitlocker -MountPoint "C:"
```

## Supprimer un lecteur réseau

Supprimer la clé suivante dans la base de registre

```powershell
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\MountPoints2
```
