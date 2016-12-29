# Make sure that master is pushed.
git checkout master
git push

# Rebase gh-pages and push it.
git checkout gh-pages
git rebase master
git push

# Check out master again to continue work.
git checkout master
