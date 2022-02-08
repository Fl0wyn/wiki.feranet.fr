---
title: Archives
category: Linux
---

## tar

```bash
# Creation
tar cvf archive.tar files/folders
tar zcvf archive.tar.gz files/folders # gzip

# Extraction
tar xvf archive.tar
tar zxvf archive.tar.gz # gzip
```

## zip

`zip unzip`

```bash
# Creation
zip archive.zip files
zip -r archive.zip folders

# Extraction
unzip archive.zip
```

## rar

`rar unrar-free`

```bash
# Creation
rar a archive.rar files
rar a -r archive.rar folders

# Extraction
unrar x archive.rar
```

## 7z

`p7zip`

```bash
# Creation
p7zip -k files/folders

# Extraction
p7zip -d archive.rar.7z
```

## Function

```bash
# Usage: ex <file>
ex ()
{
  if [ -f $1 ] ; then
    case $1 in
      *.tar.bz2)   tar xjf $1   ;;
      *.tar.gz)    tar xzf $1   ;;
      *.bz2)       bunzip2 $1   ;;
      *.rar)       unrar x $1     ;;
      *.gz)        gunzip $1    ;;
      *.tar)       tar xf $1    ;;
      *.tbz2)      tar xjf $1   ;;
      *.tgz)       tar xzf $1   ;;
      *.zip)       unzip $1     ;;
      *.Z)         uncompress $1;;
      *.7z)        7z x $1      ;;
      *)           echo "'$1' cannot be extracted via ex()" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}
```
