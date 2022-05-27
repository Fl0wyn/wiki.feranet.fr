---
title: Chroot SFTP
category: Linux
---

```bash
groupadd sftp_users
useradd -G sftp_users sftpuser

echo "sftpUser:sftpPassword" | chpasswd

mkdir -p /var/share/sftpuser

chown -R root: /var/share
chmod -R 755 /var/share

mkdir /var/share/sftpuser/
chown sftpuser:sftp_users /var/share/sftpuser
```

```bash[/etc/ssh/sshd_config]
#Subsystem sftp /usr/lib/openssh/sftp-server
Subsystem sftp internal-sftp

Match Group sftp_users
        ChrootDirectory /var/share/%u
        ForceCommand internal-sftp
        AllowTcpForwarding no
        X11Forwarding no
```