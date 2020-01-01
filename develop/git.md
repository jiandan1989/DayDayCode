### 常用命令

```bash
git config --list                          # 查看当前所有配置信息
git config -global user.name "[name]"      # 配置用户名
git config -globa user.email "[email]"     # 配置用户邮箱

git init [repository name]                 # 创建一个新的 git 仓库

git clone [url]                            # 克隆远程仓库

git status                                 # 查看当前缓存文件

git add [fileName]                         # 提交指定文件到暂存区域
git add *                                  # 将所有修改文件提交到暂存区域

git commit -m 'commit message'             # 提交
git commit -a                              # 提交所有使用 git add 提交的文件

git diff                                   # 查看所有暂存区域文件的对比
git diff -staged                           # 查看最后一次版本的暂存区域文件对比
git diff [first branch] [second branch]    # 查看两个分支的不同

git reset [file]                           # 取消指定暂存文件, 但保留文件内容
git reset [commit version]                 # 撤销提交后的指定提交记录
git reset --hard [commit]                  # 丢弃所有历史记录, 回退至指定版本

git rm [file]                              # 从工作目录中删除该文件的 git 记录

git log                                    # 查看提交本地记录
git log -follow[file]                      # 列出文件的历史记录, 包括重命名

git show                                   # 显示指定提交的元数据和内容更改

git tag [version ID]                       # 指定的提交提供标记, 也就是打版本

git push                                   # 提交本地到远程
git push [version name] origin master      # 推送指定版本到master
git push [variable name] branch            # 推送本地分支到远程
git push -all [variable name]              # 推送所有本地分支到远程

git pull                                   # 拉取远程分支
git pull origin [branch name]              # 将远程指定分支的代码更新至本地当前分支

git merge branch                           # 将branch 分支合并到当前分支

git branch                                 # 列出所有本地分支
git branch  name                           # 创建一个新的本地分支
git branch -d name                         # 删除本地分支
git branch -D [branch name]                # 强制删除本地分支
git branch -a                              # 查看远程分支
																					 # 删除远程分支
                                           # 重命名远程分支 @todo

git checkout [branch name]                 # 切换分支
git checkout -b [branch name]              # 创建一个本地分支并切换值新分支

git stash                                  # 临时存储所有已修改的跟踪文件
git stash pop                              # 恢复最近隐藏的文件
git stash list                             # 列出所有存储的修改
git stash drop                             # 丢弃最近隐藏的变更集

# 将本地分支推送到远程服务
git remote add [variable name  [Remote server link ]
```

### 常见问题
