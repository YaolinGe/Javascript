# Version control

## Version control systems 
    - `subversion` is a centralized version control system, it has a single server that contains all the versioned files, and a number of clients that check out files from that central place.
    - `perforce`
    - `mercurial` 
    - `aws code commit` is a version control service hosted by AWS, it is a fully managed source control service that makes it easy for companies to host secure and highly scalable private git repositories.
    - `git` 

## Unix Command
- `bash` can be run on windows as well, need to check how
- `l` in the very front of the file means it is a symbolic link
- `d` in the very front of the file means it is a directory
- `cat file.txt | wc -w` to count the number of words in a file
- `0` -> `stdin`, `1` -> `stdout`, `2` -> `stderr`
- `<` to redirect input, `>` to redirect output, `>>` to append output
- `cat > input.txt` to write to a file, `cat < input.txt` to read from a file
- `2>` to redirect error output
- `2>&1` to redirect error output to the same place as standard outputsss

## Git and Github 
- `git restore --stage <file>` to unstage a file to move it back from the staging area
- `git status` to check frequently the status of the files



## Resources 
- [BashReferenceManual](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents)