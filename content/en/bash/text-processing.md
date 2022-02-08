---
title: Text processing
position: 1
category: Bash
---

## sed

| code                                    | description                                                |
| --------------------------------------- | ---------------------------------------------------------- |
| `sed '1d'`                              | Delete 1st line                                            |
| `sed '$d'`                              | Delete last line                                           |
| `sed -e '2d; 4d'`                       | Delete lines 2 and 4                                       |
| `sed '2,5d'`                            | Delete lines 2 to 5                                        |
| `sed '/word/d'`                         | Delete lines containing the word 'word'                    |
| `sed -e '/word1/d;/word2/d'`            | Delete lines containing the words 'word1' and 'word2'      |
| `sed 's/.*word.*//g'`                   | Delete lines containing the string 'word'                  |
| `sed '/^$/d'`                           | Remove blank lines                                         |
| `sed 's/word//g'`                       | Delete the word 'word' from a line                         |
| `sed -e 's/string1/string2/g'`          | Replace string 'string1' with 'string2'                    |
| `sed -i 's/string1/string2/g' file.txt` | Edit the character string 'string1' in 'string2' of a file |
| `sed 's/^./\u&/'`                       | Capitalize the 1st letter of a word or phrase              |
| `sed -n '2p'`                           | Show only 2nd line                                         |
| `sed '2iword'`                          | Add 'word' to 2nd line                                     |
| `sed '$a\word'`                         | Add 'word' to last line                                    |
| `sed 's/^/word1/'`                      | Add 'word1' at the beginning of each line                  |
| `sed 's/$/word2/'`                      | Add 'word2' at the end of each line                        |
| `sed '/^word1.*/i word2' file.txt`      | Add 'word2' before 'word1'                                 |
| `sed '/^word1.*/a word2' file.txt`      | Add 'word2' after 'word1'                                  |
| `sed '$s/.$//'`                         | Remove last character from last line                       |
| `sed '1s/^.//'`                         | Delete the first character of the first line               |
| `sed 's/\.word3$//g' `                  | Delete the word word3 from the last lines                  |

## cut

| code                            | description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| `cut -c2`                       | Show 2nd character                                             |
| `cut -c1-10`                    | Display 1st to 10th character                                  |
| `cut -c-5`                      | Show up to 5th character                                       |
| `cut -c3-`                      | Display from 3rd character                                     |
| `cut -c2,4`                     | Show 2nd and 10th character                                    |
| `cut -d; -f2`                   | Show 2nd field separated by ';'                                |
| `cut -d; --complement -s -f1,3` | Show all fields separated by ';' except the 1st and 3rd fields |

## tr

| code             | description                    |
| ---------------- | ------------------------------ |
| `tr -d 'wd'`     | Remove 'w' and 'd' characters  |
| `tr -s 'a' 'b'`  | Convert character 'a' to 'b'   |
| `tr [A-Z] [a-z]` | Convert uppercase to lowercase |

## awk

| code                                        | description                                         |
| ------------------------------------------- | --------------------------------------------------- |
| `awk '{print $2}'`                          | Show 2nd Field                                      |
| `awk '{print $1,$4}'`                       | Show 1st and 2nd field                              |
| `awk '{print $NF}'`                         | Show last field                                     |
| `awk '{$2="";print}'`                       | Do not display the 2nd field                        |
| `awk '{$3="";$NF="";print}'`                | Do not display the 3rd and last field               |
| `awk '/word/ {print $6}'`                   | Show 6th field containing 'word'                    |
| `awk -F\; '{print $2,$1}'`                  | Invert the 2nd and 1st field with the delimiter ';' |
| `awk '{print substr($2, 1, length($2)-3)}'` | Delete the last 3 characters of the 2nd field';'    |

## head & tail

| code      | description                    |
| --------- | ------------------------------ |
| `head -3` | Show first 3 rows              |
| `tail -4` | Show last 4 rows               |
| `tail -f` | Show lines added as file grows |

## grep

| code                      | description                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| `grep -i word`            | Display the line containing the character string 'word' ignoring the box |
| `grep -A 2 word`          | Show 2 lines below the string 'word'                                     |
| `grep -B 3 word`          | Display 3 lines above the string 'word'                                  |
| `grep -w 'word'`          | Display the line strictly containing the character string 'word'         |
| `grep -v word`            | Do not display the line containing the character string 'word'           |
| `grep -r word /home/eve/` | Search the string 'word' recursively in '/home/eve/'                     |
| `egrep 'word1 \| word2'`  | Search the words 'word1' and 'word2'                                     |
| `egrep '(word1.*word2)'`  | Find the words 'word1' and 'word2' on the same line                      |
| `grep "."`                | Remove blank lines                                                       |
| `grep -c`                 | Show number of rows selected                                             |

## sort

| code              | description                               |
| ----------------- | ----------------------------------------- |
| `sort`            | Sort alphabetically                       |
| `sort -r`         | Sort Descending                           |
| `sort -n`         | Sort by Alphanumeric order                |
| `sort -k 2,2`     | Sort 2nd field                            |
| `sort -t: -k 3,3` | Sort the 3rd field from the separator ':' |

## wc

| code    | description                              |
| ------- | ---------------------------------------- |
| `wc -l` | Count the number of lines in a file      |
| `wc -w` | Count the number of words in a file      |
| `wc -m` | Count the number of characters in a file |

## uniq

| code      | description                 |
| --------- | --------------------------- |
| `uniq`    | Remove duplicate rows       |
| `uniq -d` | Show only duplicate rows    |
| `uniq -u` | Show only rows present once |
| `uniq -c` | Count duplicate rows        |

## du

| code               | description                       |
| ------------------ | --------------------------------- |
| `du -h`            | Show size in readable form        |
| `du -c`            | Show size with total              |
| `du --max-depth=2` | Show size with two subdirectories |

## find & rename

```bash
# Recursively delete all files that contain "jpg"
find . -type f -name "*jpg*" -exec rm -rf "{}" \;

# Recursively copy all files that contain "jpg" by appending "_TEMP"
find . -type f -name '*jpg' -print0 | xargs -0 -i cp -p "{}" {}_TEMP

# Rename all .html files to .php
rename 's/\.html$/\.php/' *.html
```
