## To Replace secrets from file

```
git clone --mirror <gitRepoURL>
code secret.txt
cat secret.txt
java -jar bfg-1.14.0.jar --replace-text secret.txt repo.git
cd repo.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push
```
## To delete file containing secrets

```
git clone --mirror <gitRepoURL>
java -jar bfg-1.14.0.jar --delete-files <filename> repo.git
cd repo.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push

```
