// Hello this is 1
print("Hello this is 1 yellow bye");


/*
PS D:\3-2\wt\wt internal> cd .\1\1-a\
PS D:\3-2\wt\wt internal\1\1-a> git init
Reinitialized existing Git repository in D:/3-2/wt/wt internal/1/1-a/.git/
PS D:\3-2\wt\wt internal\1\1-a> echo "My Temp Locally git"> Readme.md
PS D:\3-2\wt\wt internal\1\1-a> git add .\Readme.md
PS D:\3-2\wt\wt internal\1\1-a> git commit -m "Sample Project"
[master f7a9e3d] Sample Project
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Readme.md
PS D:\3-2\wt\wt internal\1\1-a> git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   temp5.js

no changes added to commit (use "git add" and/or "git commit -a")
PS D:\3-2\wt\wt internal\1\1-a> git add .
PS D:\3-2\wt\wt internal\1\1-a> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   temp5.js

PS D:\3-2\wt\wt internal\1\1-a> git commit -m "Sample Project"
[master ecf0872] Sample Project
 1 file changed, 1 insertion(+), 1 deletion(-)
PS D:\3-2\wt\wt internal\1\1-a> git status
On branch master
nothing to commit, working tree clean
PS D:\3-2\wt\wt internal\1\1-a> git commit -m  "Remote commit"
On branch master
nothing to commit, working tree clean
PS D:\3-2\wt\wt internal\1\1-a> git branch -M main
PS D:\3-2\wt\wt internal\1\1-a> git remote add origin https://github.com/Hrushi2139/wt-lab.git
PS D:\3-2\wt\wt internal\1\1-a> git status
On branch main
nothing to commit, working tree clean
PS D:\3-2\wt\wt internal\1\1-a> git push -u origin  main
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 22 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (13/13), 1.03 KiB | 117.00 KiB/s, done.
Total 13 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/Hrushi2139/wt-lab.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS D:\3-2\wt\wt internal\1\1-a> git pull 
Already up to date.
PS D:\3-2\wt\wt internal\1\1-a> git pull -u orgin main
error: unknown switch `u'
usage: git pull [<options>] [<repository> [<refspec>...]]

    -v, --[no-]verbose    be more verbose
    -q, --[no-]quiet      be more quiet
    --[no-]progress       force progress reporting
    --[no-]recurse-submodules[=<on-demand>]
                          control for recursive fetching of submodules

Options related to merging
    -r, --[no-]rebase[=(false|true|merges|interactive)]
                          incorporate changes by rebasing rather than merging
    -n                    do not show a diffstat at the end of the merge
    --[no-]stat           show a diffstat at the end of the merge
    --[no-]log[=<n>]      add (at most <n>) entries from shortlog to merge commit message
    --[no-]signoff[=...]  add a Signed-off-by trailer
    --[no-]squash         create a single commit instead of doing a merge
    --[no-]commit         perform a commit if the merge succeeds (default)
    --[no-]edit           edit message before committing
    --[no-]cleanup <mode> how to strip spaces and #comments from message
    --[no-]ff             allow fast-forward
    --ff-only             abort if fast-forward is not possible
    --[no-]verify         control use of pre-merge-commit and commit-msg hooks
    --[no-]verify-signatures
                          verify that the named commit has a valid GPG signature
    --[no-]autostash      automatically stash/stash pop before and after
    -s, --[no-]strategy <strategy>
                          merge strategy to use
    -X, --[no-]strategy-option <option=value>
                          option for selected merge strategy
    -S, --[no-]gpg-sign[=<key-id>]
                          GPG sign commit
    --[no-]allow-unrelated-histories
                          allow merging unrelated histories

Options related to fetching
    --[no-]all            fetch from all remotes
    -a, --[no-]append     append to .git/FETCH_HEAD instead of overwriting
    --[no-]upload-pack <path>
                          path to upload pack on remote end
    -f, --[no-]force      force overwrite of local branch
    -t, --[no-]tags       fetch all tags and associated objects
    -p, --[no-]prune      prune remote-tracking branches no longer on remote
    -j, --[no-]jobs[=<n>] number of submodules pulled in parallel
    --[no-]dry-run        dry run
    -k, --[no-]keep       keep downloaded pack
    --[no-]depth <depth>  deepen history of shallow clone
    --[no-]shallow-since <time>
                          deepen history of shallow repository based on time
    --[no-]shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --[no-]deepen <n>     deepen history of shallow clone
    --unshallow           convert to a complete repository
    --[no-]update-shallow accept refs that update .git/shallow
    --refmap <refmap>     specify fetch refmap
    -o, --[no-]server-option <server-specific>
                          option to transmit
    -4, --[no-]ipv4       use IPv4 addresses only
    -6, --[no-]ipv6       use IPv6 addresses only
    --[no-]negotiation-tip <revision>
                          report that we have only objects reachable from this object
    --[no-]show-forced-updates
                          check for forced-updates on all updated branches
    --[no-]set-upstream   set upstream for git pull/fetch

PS D:\3-2\wt\wt internal\1\1-a> git pull              
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 959 bytes | 53.00 KiB/s, done.
From https://github.com/Hrushi2139/wt-lab
   ecf0872..09bdb06  main       -> origin/main
Updating ecf0872..09bdb06
Fast-forward
 temp1.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
PS D:\3-2\wt\wt internal\1\1-a> git fetch
PS D:\3-2\wt\wt internal\1\1-a> git fetch
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 959 bytes | 59.00 KiB/s, done.
From https://github.com/Hrushi2139/wt-lab
   09bdb06..42042b0  main       -> origin/main
PS D:\3-2\wt\wt internal\1\1-a> git merge origin/main
Updating 09bdb06..42042b0
Fast-forward
 temp1.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
PS D:\3-2\wt\wt internal\1\1-a> git pull
Already up to date.
PS D:\3-2\wt\wt internal\1\1-a> */