## 项目说明文档

### Git commit 提交规范

项目中集成了 husky 和 commitlint，不符合规范的提交会直接被拒绝。

提交格式为：type: xxx。

注意:type 冒号后面有一个空格。

type 用于说明 commit 的类别。

- chore：构建过程或者辅助工具的变动。

- docs：文档的变动。

- feat：新的功能。

- fix：修复 bug。

- refactor：代码重构。

- revert：代码回滚。

- style：样式的变动。

- test：添加测试。

### CSS 命名规范

所有的 CSS 的的 class 的命名全部使用 kebab-case 的方式，即短横线分隔命名。例如：login-wrap。

### Node 相关命令说明

由于是采用了 vue-cli3.x 版本，所以项目的启动指令是 npm run serve。

安装开发时用到的包：npm/cnpm install packagename -D(-D 等价于--save-dev)

安装开发和生产环境都用到的包：npm/cnpm install packagename -S(-S 等价于--save)

### Git 常用命令说明

git add xx：将修改添加到本地仓库的暂存区。

git add \*：将当前目录下的所有修改添加到本地仓库的暂存区。

git add -A：将当前所有修改添加到本地仓库的暂存区。

git commit -m "xxx"：将暂存区的所有修改提交到本地仓库。

git pull origin branch(分支名)：将远程代码拉取到本地并合并。

git push origin branch：将本地仓库的修改推送到远程仓库。
