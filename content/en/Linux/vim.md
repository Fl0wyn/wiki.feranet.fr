---
title: Vim
category: Linux
---

## Move in the text

| code | description                         |
| ---- | ----------------------------------- |
| `0`  | Move to beginning of line           |
| `$`  | move to end of line                 |
| `w`  | Move from word to word to the right |
| `b`  | Move from word to word to the left  |
| `G`  | Move to end of file                 |
| `gg` | Move to beginning of file           |

## Delete text

| code  | description                             |
| ----- | --------------------------------------- |
| `dw`  | delete one word                         |
| `d2w` | delete 2 words                          |
| `d4`  | Delete 4 characters                     |
| `dd`  | Delete one line                         |
| `6dd` | Delete 6 lines                          |
| `d0`  | Delete from cursor to beginning of line |
| `d$`  | Delete from cursor to end of line       |

## Copy and paste text

| code  | description                    |
| ----- | ------------------------------ |
| `yw`  | Copy one word                  |
| `y2w` | Copy 2 words                   |
| `yy`  | Copy 1 line                    |
| `y4`  | Copy 4 lines                   |
| `p`   | Paste line or word             |
| `6p`  | Paste 6 times a line or a word |

## Undo changes

| code         | description                |
| ------------ | -------------------------- |
| `u`          | Undo previous actions      |
| `U`          | Undo all changes on a line |
| `CTRL` + `R` | Cancel the cancellation    |

## Save, exit, search, etc.

| code          | description                  |
| ------------- | ---------------------------- |
| `/`           | Search for a word            |
| `:w`          | Save                         |
| `:q`          | Exit or `:q!` To force close |
| `:wq`         | Save and exit                |
| `vim -x file` | Create file with password    |
| `:X`          | Change Password              |

> To search for a word, press `ENTER` to validate
>
> `n` to search forward
>
> `SHIFT` + `n` to search backward
