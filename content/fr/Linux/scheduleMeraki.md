---
title: Redémarrage Meraki
category: Linux
---

## URL API

https://developer.cisco.com/meraki/api-v1/#!reboot-device

# Activer la clé API et récupérer le numéro de série

**Sérial number** : Organization > License Info > Devices

**API KEY** : Organization > Settings > Dashboard API access

## Script Bash

```bash
#!/bin/bash

# Planifier le redémarrage d'un dispositif Meraki
# crontab -e
# 0 7 * * * /usr/bin/bash /root/schedule_reboot_meraki.sh

SERIAL=""
APIKEY=""

curl -L --request POST \
  --url https://api.meraki.com/api/v1/devices/$SERIAL/reboot \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --header "X-Cisco-Meraki-API-Key: $APIKEY"
```
