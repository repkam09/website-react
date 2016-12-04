#/bin/bash
git pull && npm run build && rsync -rP ./build/ /home/mark/website/
