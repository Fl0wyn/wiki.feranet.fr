---
title: Conditions
position: 2
category: Bash
---

## Structure : if

```bash
if [ test_1 ] ; then
  echo "premier test vérifié"
elif [ test_2 ]
  echo "deuxième test vérifié"
else
  echo "test non vérifié"
fi
```

## Structure : case

```bash
case VARIABLE in
  "mot1")
    echo "mot 1"
    ;;
  "mot2")
    echo "mot 2"
    ;;
  "mot3")
    echo "mot 3"
    ;;
  *)
    echo "Aucun mot"
    ;;
esac
```

## Test : symboles

```bash
&& # ET
|| # OU
!  # INVERSER
```

## Test : Chaînes de caractères

| code                   | description                                  |
| ---------------------- | -------------------------------------------- |
| `$chaîne1 = $chaîne2`  | Vérifie si les deux chaînes sont identiques  |
| `$chaîne1 != $chaîne2` | Vérifie si les deux chaînes sont différentes |
| `-z $chaîne`           | Vérifie si la chaîne est vide                |
| `-n $chaîne`           | Vérifie si la chaîne n'est pas vide          |

## Test: Chiffres

| code              | description                                               |
| ----------------- | --------------------------------------------------------- |
| `$num1 -eq $num2` | Vérifiez si les nombres sont égaux (EQual)                |
| `$num1 -ne $num2` | Vérifiez si les nombres sont différents (No Equal)        |
| `$num1 -lt $num2` | Vérifie si num1 est inférieur ( < ) à num2 (Lower Than)   |
| `$num1 -le $num2` | Vérifie si num1 est inférieur ou égal ( <= ) à num2       |
| `$num1 -gt $num2` | Vérifie si num1 est supérieur ( > ) à num2 (Greater Than) |
| `$num1 -ge $num2` | Vérifie si num1 est supérieur ou égal (>=) à num2         |

## Test : Fichiers

| code                      | description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `-e $nom_fichier`         | Vérifie si le fichier existe                                        |
| `-d $nom_fichier`         | Vérifie si le fichier est un répertoire                             |
| `-f $nom_fichier`         | Vérifie si le fichier est un fichier                                |
| `-L $nom_fichier`         | Vérifie si le fichier est un lien symbolique                        |
| `-r $nom_fichier`         | Vérifie si le fichier est lisible                                   |
| `-w $nom_fichier`         | Vérifie si le fichier est modifiable                                |
| `-x $nom_fichier`         | Vérifie si le fichier est exécutable                                |
| `$fichier1 -nt $fichier2` | Vérifie si le fichier1 est plus récent que le fichier2 (Newer Than) |
| `$fichier1 -ou $fichier2` | Vérifie si le fichier1 est plus ancien que le fichier2 (Older Than) |
