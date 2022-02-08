---
title: Vim
category: Linux
---

## Se déplacer dans le texte

| code | description                              |
| ---- | ---------------------------------------- |
| `0`  | Se déplacer en début de ligne            |
| `$`  | Se déplacer en fin de ligne              |
| `w`  | Se déplacer de mot en mot vers la droite |
| `b`  | Se déplacer de mot en mot vers la gauche |
| `G`  | Se déplacer à la fin du fichier          |
| `gg` | Se déplacer au début du fichier          |

## Effacer du texte

| code  | description                                   |
| ----- | --------------------------------------------- |
| `dw`  | Effacer un mot                                |
| `d2w` | Effacer 2 mots                                |
| `d4`  | Effacer 4 caractères                          |
| `dd`  | Effacer une ligne                             |
| `6dd` | Effacer 6 lignes                              |
| `d0`  | Effacer du curseur jusqu'au début de la ligne |
| `d$`  | Effacer du curseur jusqu'à la fin de la ligne |

## Copier et coller du texte

| code  | description                       |
| ----- | --------------------------------- |
| `yw`  | Copier un mot                     |
| `y2w` | Copier 2 mots                     |
| `yy`  | Copier la ligne                   |
| `y4`  | Copier 4 lignes                   |
| `p`   | Coller une ligne ou un mot        |
| `6p`  | Coller 6 fois une ligne ou un mot |

## Annuler des modifications

| code         | description                                |
| ------------ | ------------------------------------------ |
| `u`          | Annuler les actions précédentes            |
| `U`          | Annuler tous les changements sur une ligne |
| `CTRL` + `R` | Annuler l'annulation                       |

## Enregistrer, quitter, rechercher, etc.

| code             | description                               |
| ---------------- | ----------------------------------------- |
| `/`              | Rechercher un mot                         |
| `:w`             | Enregistrer                               |
| `:q`             | Quitter ou `:q!` Pour forcer la fermeture |
| `:wq`            | Enregistrer puis quitter                  |
| `vim -x fichier` | Créer un fichier avec un mot de passe     |
| `:X`             | Changer le mot de passe                   |

> Pour la recherche d'un mot, faire `ENTRER`` pour valider
>
> `n` pour rechercher en avant
>
> `SHIFT` + `n` pour rechercher en arrière
