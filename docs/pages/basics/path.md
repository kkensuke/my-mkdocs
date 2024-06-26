---
title:
summary:
description: 
author: kkensuke
date: 2022-07-06
comments: true
---


# $PATH


A path usually indicates a string to identify a location of a file/directory in a directory tree.
PATH is one of the environmental variables and is a little different from the path explained above.

When you input a command in the shell, the shell has to find and run the command. PATH specifies the places the shell should search for a command you input.

To see the PATH, run `echo $PATH`:
```bash
echo $PATH
# /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```
The result shows PATH holds some directories (colon is a separator): `/usr/local/bin`, `/usr/bin`, `/bin`, `/usr/sbin`, `/sbin`

!!! tip
    You can see all environmental variables with `printenv`


When you input a command, the shell searches `/usr/local/bin` at first. If the shell finds a command, it runs the command. If not, then it searches `/usr/bin`. If it finds the command, it runs the command. If not, then it searches `/bin`. This flow repeats until it finds and runs the command. So only the command found at first is run. If the shell could not find the command in all the directories in PATH, the shell returns `zsh: command not found: xxx`.


Command `which` shows the directories where (for example) the `ls` is.
```bash
which ls
# /bin/ls
```

## Add command search path

Add the following code in ~/.zshrc or ~/.bashrc to add a directory to PATH.
```bash
export PATH=$PATH:<command search path>
(or export PATH=<command search path>:$PATH)
```

and save ths changes.
```bash
source ~/.zshrc
source ~/.bashrc
source ~/.bash_profile
```

## Environmental variables

```bash
% printenv
...
SHELL=/bin/zsh
HOME=/Users/asdf
USER=asdf
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
PWD=/Users/asdf
...
```

### make a new environmental variable
```bash
export US=/usr/sbin
echo $US
# /usr/sbin
```

each command below shows the same results
```bash
ls /usr/sbin
ls $US
```

### Remove a environmental variable
```bash
unset US
```








