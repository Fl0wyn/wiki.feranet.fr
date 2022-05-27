---
title: Traitement de texte
category: Linux
---

## sed

| code                                       | description                                                       |
| ------------------------------------------ | ----------------------------------------------------------------- |
| `sed '1d'`                                 | Supprimer la 1er ligne                                            |
| `sed '$d'`                                 | Supprimer la dernière ligne                                       |
| `sed -e '2d; 4d'`                          | Supprimer les lignes 2 et 4                                       |
| `sed '2,5d'`                               | Supprimer les lignes de 2 à 5                                     |
| `sed '/word/d'`                            | Supprimer les lignes contenant le mot 'word'                      |
| `sed -e '/word1/d;/word2/d'`               | Supprimer les lignes contenant les mots 'word1' et 'word2'        |
| `sed 's/.*word.*//g'`                      | Effacer les lignes contenant la chaîne de caractère 'word'        |
| `sed '/^$/d'`                              | Supprimer les lignes vides                                        |
| `sed 's/word//g'`                          | Effacer le mot 'word' d'une ligne                                 |
| `sed -e 's/chaîne1/chaîne2/g'`             | Remplacer la chaîne de caractère 'chaîne1' en 'chaîne2'           |
| `sed -i 's/chaîne1/chaîne2/g' fichier.txt` | Editer la chaîne de caractère 'chaîne1' en 'chaîne2' d'un fichier |
| `sed 's/^./\u&/'`                          | Capitaliser la 1ère lettre d'un mot ou d'une phrase               |
| `sed -n '2p'`                              | Afficher seulement la 2eme ligne                                  |
| `sed '2iword'`                             | Ajouter 'word' à la 2eme ligne                                    |
| `sed '$a\word'`                            | Ajouter 'word' à la dernière ligne                                |
| `sed 's/^/word1/'`                         | Ajouter 'word1' au début de chaque lignes                         |
| `sed 's/$/word2/'`                         | Ajouter 'word2' à la fin de chaque lignes                         |
| `sed '/^word1.*/i word2' fichier.txt`      | Ajouter 'word2' avant 'word1'                                     |
| `sed '/^word1.*/a word2' fichier.txt`      | Ajouter 'word2' après 'word1'                                     |
| `sed '$ s/.$//'`                           | Supprimer le dernier caractère de la dernière ligne               |
| `sed '1s/^.//'`                            | Supprimer le premier caractère de la première ligne               |
| `sed 's/\.word3$//g' `                     | Supprimer le mot word3 des dernières lignes                       |

## cut

| code                            | description                                                         |
| ------------------------------- | ------------------------------------------------------------------- |
| `cut -c2`                       | Afficher le 2e caractère                                            |
| `cut -c1-10`                    | Afficher du 1er au 10e caractère                                    |
| `cut -c-5`                      | Afficher jusqu’au 5e caractère                                      |
| `cut -c3-`                      | Afficher a partir du 3e caractère                                   |
| `cut -c2,4`                     | Afficher Le 2e et le 10e caractère                                  |
| `cut -d; -f2`                   | Afficher le 2e champ séparés par ';'                                |
| `cut -d; --complement -s -f1,3` | Afficher tous les champs séparés par ';' sauf le 1er et 3eme champs |

## tr

| code             | description                           |
| ---------------- | ------------------------------------- |
| `tr -d 'wd'`     | Supprimer les caractères 'w' et 'd'   |
| `tr -s 'a' 'b'`  | Convertir le caractère 'a' en 'b'     |
| `tr [A-Z] [a-z]` | Convertir les majuscules en minuscule |

## awk

| code                                        | description                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| `awk '{print $2}'`                          | Afficher le 2e champ                                    |
| `awk '{print $1,$4}'`                       | Afficher le 1er et 2e champ                             |
| `awk '{print $NF}'`                         | Afficher le dernier champ                               |
| `awk '{$2="";print}'`                       | Ne pas afficher le 2eme champ                           |
| `awk '{$3="";$NF="";print}'`                | Ne pas afficher le 3eme et dernier champ                |
| `awk '/word/ {print $6}'`                   | Afficher le 6eme champ contenant 'word'                 |
| `awk -F\; '{print $2,$1}'`                  | Inverser le 2eme et le 1er champ avec le délimiteur ';' |
| `awk '{print substr($2, 1, length($2)-3)}'` | Supprimer les 3 derniers caractères du 2eme champs';'   |

## head & tail

| code      | description                                                     |
| --------- | --------------------------------------------------------------- |
| `head -3` | Afficher les 3 premières lignes                                 |
| `tail -4` | Afficher les 4 dernières lignes                                 |
| `tail -f` | Afficher les lignes ajoutées à mesure que le fichier s'agrandit |

## grep

| code                     | description                                                                   |
| ------------------------ | ----------------------------------------------------------------------------- |
| `grep -i word`           | Afficher la ligne contenant la chaîne de caractère 'word' en ignorant la case |
| `grep -A 2 word`         | Afficher 2 lignes en dessous de la chaîne de caractère 'word'                 |
| `grep -B 3 word`         | Afficher 3 lignes au dessus de la chaîne de caractère 'word'                  |
| `grep -w 'word'`         | Afficher la ligne contenant strictement la chaîne de caractère 'word'         |
| `grep -v word`           | Ne pas afficher la ligne contenant la chaîne de caractère 'word'              |
| `grep -r word /home/me/` | Chercher la chaîne de caractère 'word' recursivement dans '/home/me/'         |
| `egrep 'word1\|word2'`   | Chercher les mots 'word1' et 'word2'                                          |
| `egrep '(word1.*word2)'` | Chercher les mots 'word1' et 'word2' sur la même ligne                        |
| `grep "."`               | Supprimer les lignes vides                                                    |
| `grep -c`                | Afficher le nombre de lignes selectionées                                     |

## sort

| code              | description                                    |
| ----------------- | ---------------------------------------------- |
| `sort`            | Trier par ordre alphabétique                   |
| `sort -r`         | Trier par ordre décroissant                    |
| `sort -n`         | Trier par ordre Alphanumérique                 |
| `sort -k 2,2`     | Trier le 2eme champ                            |
| `sort -t: -k 3,3` | Trier le 3eme champ à partir du séparateur ':' |

## wc

| code    | description                              |
| ------- | ---------------------------------------- |
| `wc -l` | Compter le nombre de ligne d'un fichier  |
| `wc -w` | Compter le nombre de mot d'un fichier    |
| `wc -m` | Compter le nombre caractère d'un fichier |

## uniq

| code      | description                                      |
| --------- | ------------------------------------------------ |
| `uniq`    | Supprimer les lignes en double                   |
| `uniq -d` | Afficher seulement les lignes en double          |
| `uniq -u` | Afficher seulement les lignes présentes une fois |
| `uniq -c` | Compter les lignes en double                     |

## du

| code               | description                                   |
| ------------------ | --------------------------------------------- |
| `du -h`            | Afficher la taille sous forme lisible         |
| `du -c`            | Afficher la taille avec le total              |
| `du --max-depth=2` | Afficher la taille avec deux sous répertoires |

## find & rename

```bash
# Supprimer récursivement tous les fichiers qui contiennent "jpg"
find . -type f -name "*jpg*" -exec rm -rf "{}" \;

# Copier récursivement tous les fichiers qui contiennent "jpg" en ajoutant "_TEMP"
find . -type f -name '*jpg' -print0 | xargs -0 -i cp -p "{}" {}_TEMP

# Renommer tout les fichiers .html en .php
rename 's/\.html$/\.php/' *.html
```
