#!/bin/bash
git config user.email "your@email.com"
git config user.name "Your Name"
git remote add origin https://github.com/Mai3Prabhu/BucketList.git 2>/dev/null || git remote set-url origin https://github.com/Mai3Prabhu/BucketList.git
git branch -M main
git add -A
git commit -m "Ash3 - Database migration complete with multi-user support"
git push -u origin main
