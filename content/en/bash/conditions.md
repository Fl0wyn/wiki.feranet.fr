---
title: Conditions
position: 2
category: Bash
---

## Struct: if

```bash
if [ test_1 ] ; then
  echo "first test verified"
elif [ test_2 ]
  echo "second test verified"
else
  echo "unverified test"
fi
```

## Struct : case

```bash
case VARIABLE in
  "word1")
    echo "word 1"
    ;;
  "word2")
    echo "word 2"
    ;;
  "word3")
    echo "word 3"
    ;;
  *)
    echo "No word"
    ;;
esac
```

## Test: symbols

```bash
&& # AND
|| # OR
!  # REVERSE
```

## Test: Strings of characters

| code                   | description                          |
| ---------------------- | ------------------------------------ |
| `$string1 = $string2`  | Checks if both strings are the same  |
| `$string1 != $string2` | Checks if both strings are different |
| `-z $string`           | Checks if the string is empty        |
| `-n $string`           | Checks if string is non-empty        |

## Test: Numbers

| code              | description                                              |
| ----------------- | -------------------------------------------------------- |
| `$num1 -eq $num2` | Check if the numbers are equal (EQual)                   |
| `$num1 -ne $num2` | Check if the numbers are different (No Equal)            |
| `$num1 -lt $num2` | Checks if num1 is lower ( < ) than num2 (Lower Than)     |
| `$num1 -le $num2` | Checks if num1 is lower or equal ( <= ) to num2          |
| `$num1 -gt $num2` | Checks if num1 is greater ( > ) than num2 (Greater Than) |
| `$num1 -ge $num2` | Checks if num1 is greater or equal (>=) to num2          |

## Test: Files

| code                | description                                      |
| ------------------- | ------------------------------------------------ |
| `-e $fileName`      | Checks if the file exists                        |
| `-d $fileName`      | Checks if the file is a directory                |
| `-f $fileName`      | Checks if the file is a file                     |
| `-L $fileName`      | Checks if the file is a symbolic link            |
| `-r $fileName`      | Checks if the file is readable                   |
| `-w $fileName`      | Checks if the file is editable                   |
| `-x $fileName`      | Checks if the file is executable                 |
| `$file1 -nt $file2` | Checks if file1 is newer than file2 (Newer Than) |
| `$file1 -ot $file2` | Checks if file1 is older than file2 (Older Than) |
