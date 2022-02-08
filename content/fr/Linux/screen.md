---
title: Screen
category: Linux
---

## Listes des commandes

| code                              | description                                    |
| --------------------------------- | ---------------------------------------------- |
| `screen -S session1`              | Créer un nouveau screen en nommant la session  |
| `screen -ls`                      | Afficher les screen existants                  |
| `screen -r`                       | Rattacher un screen existant                   |
| `screen -r 13313`                 | Se rattacher au screen 13313 ou session1       |
| `screen -d 13313`                 | Forcer le détachement du screen 13313          |
| `screen -wipe`                    | Supprimer un screen mort                       |
| `screen -dmS session1 apt update` | Lancer la commande apt update dans la session1 |

## Navigation entre les terminaux

| code                 | description                                |
| -------------------- | ------------------------------------------ |
| `CTRL` + `a` and `d` | Détacher le screen                         |
| `CTRL` + `a` and `D` | Quitter le screen                          |
| `CTRL` + `a` and `n` | Aller au terminal suivant                  |
| `CTRL` + `a` and `p` | Aller au terminal précédent                |
| `CTRL` + `a` and `2` | Aller au terminal 2                        |
| `CTRL` + `a` and `w` | Lister les terminaux actuels avec leur nom |
