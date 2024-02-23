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
- `git remote -v` to check the remote repository
- `git remote add origin <url>` to add a remote repository
- `git diff HEAD <file>` to check the difference between the working directory and the last commit
- `git diff --staged <file>` to check the difference between the staging area and the last commit
- `git log --pretty=oneline` to check the commit history in the pretty format, i.e. oneline with the commit message. 
- `git diff <commit1> <commit2>` to check the difference between two commits, here `<commit1>` and `<commit2>` are the commit hashes. 
- `git diff main origin/main` to check the difference between the local main branch and the remote main branch
- `git blame <file>` to check who made the changes in the file
- `git blame -L 5,15 <file>` to check who made the changes in the file in the line range from 5 to 15
- `git log` to check the commit history, can be used together with `git blame` to further understand the commit history
- 

## Resources 
- [BashReferenceManual](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents)