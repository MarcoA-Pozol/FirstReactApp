# GitHub Commands Cheat Sheet

## 📌 Basic Git Setup
```sh
# Configure your user info (only once per machine)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Check your configuration
git config --list
```

---

## 📁 Working with Repositories
```sh
# Clone an existing repository
git clone <repository_url>

# Clone a repository at a specific version (commit, tag, or branch)
git clone --branch <branch_name> <repository_url>

git clone --depth 1 --branch <branch_name> <repository_url>
```

---

## 📄 Tracking Files
```sh
# Check the status of your working directory
git status

# Add specific file(s) to the staging area
git add <file>

# Add all modified files to the staging area
git add .

# Remove a file from Git tracking (but keep it locally)
git rm --cached <file>

# Remove a file from Git tracking and delete it
git rm <file>
```

---

## 📤 Committing & Pushing Changes
```sh
# Commit staged changes with a message
git commit -m "Your commit message"

# Push changes to the remote repository
git push origin <branch>

# Push changes to the default branch
git push origin main
```

---

## 📥 Pulling & Fetching Changes
```sh
# Pull the latest changes from the remote repository
git pull origin <branch>

# Fetch changes without merging them
git fetch origin

# Pull a specific commit from a remote branch
git fetch origin <commit_hash>
git checkout <commit_hash>
```

---

## 🔀 Branching & Merging
```sh
# List all branches
git branch

# Create a new branch
git branch <new-branch-name>

# Switch to another branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <new-branch>

# Merge another branch into the current branch
git merge <branch-name>
```

---

## 🚀 Working with Remotes
```sh
# Add a new remote repository
git remote add <name> <repository_url>

# Show all remote repositories
git remote -v

# Change the URL of an existing remote
git remote set-url <name> <new_repository_url>

# Remove a remote repository
git remote remove <name>
```

---

## 🔄 Undoing Changes
```sh
# Undo the last commit but keep the changes
git reset --soft HEAD~1

# Undo the last commit and discard the changes
git reset --hard HEAD~1

# Restore a deleted file from the last commit
git checkout HEAD -- <file>
```

---

## 💥 Resolving Merge Conflicts
```sh
# Check for merge conflicts
git status

# After resolving conflicts, add the changes
git add <file>

# Complete the merge
git commit -m "Resolved merge conflict"
```

---

## ⏳ Working with Tags
```sh
# List all tags
git tag

# Create a new tag
git tag -a v1.0 -m "Version 1.0"

# Push a tag to the remote repository
git push origin v1.0
```

---

## 🏗️ Stashing Changes
```sh
# Save uncommitted changes without committing
git stash

# List all stashed changes
git stash list

# Apply the latest stashed changes
git stash apply

# Apply and remove the latest stash
git stash pop
```

---

## 👥 Collaboration & Teamwork
```sh
# Fork a repository (via GitHub UI)

# Create a pull request (via GitHub UI)

# Fetch and merge changes from the main branch
git pull origin main

# Review and merge a pull request (via GitHub UI)
```

---

### 🔹 **Now You're Ready to Work with Git & GitHub Like a Pro!** 🚀

