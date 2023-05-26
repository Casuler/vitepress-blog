call pnpm build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/dlOwOlb/dlOwOlb.github.io.git master:gh-pages