---
title: Iptables & Fail2ban
category: Linux
---

## Setup

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

## Iptables configuration

Copy the list of iptables rules in the file `/root/firewall.sh` and modify them then make it executable

```bash
curl -L https://git.io/JeSL5 > /root/firewall.sh
chmod +x /root/firewall.sh
```

Test and verify the script execution

```bash
bash /root/firewall.sh
iptables -L
```

Make rules non-volatile

```bash
iptables-save > /etc/firewall.conf
```

Open `/etc/network/if-up.d/iptables` and add the following

```bash
#!/bin/bash
iptables-restore < /etc/firewall.conf
```

Make it executable

```bash
chmod +x /etc/network/if-up.d/iptables
```

### Administration

Edit Rules

```bash
vim /root/firewall.sh
bash /root/firewall.sh
iptables-save > /etc/firewall.conf
```

See the banned IPs from the `banip.txt` file

```bash
iptables -L INPUT -nv --line-numbers | grep DROP
```

See banned IPs from ipset

```bash
ipset -L
```

> Create a `banip.txt` file and add ip to ban manually

## Fail2ban configuration

Copy the configuration file to prevent it from being overwritten during an update

```bash
cd /etc/fail2ban
cp jail.conf jail.local
```

Editing the `jail.local` file

```bash
# List of IP addresses, or ignored DNS hosts
ignoreip = 127.0.0.1/8 ::1

# Ban Time
bantime  = 2h

# Time between each failure
findtime  = 20m

# Number of failures before a ban
maxretry = 6
```

To enable jails, create a `jail-d.conf` file in the `/etc/fail2ban/jail.d` directory and add the name of the jail with the value ``True''.
Example with **ssh** and **apache2** prisons

```bash
[sshd]
port = 2222
enabled = true

[apache-auth]
enabled = true
```

### Command Lists

```bash
# View status of active jails
fail2ban-client status

# View the status of an active jail
fail2ban-client status sshd

# Unban an IP address
fail2ban-client unban 1.2.3.4

# Unban an IP address from a service
fail2ban-client set sshd unban 1.2.3.4
```
