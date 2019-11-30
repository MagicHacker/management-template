## 项目说明文档

.
├── LICENSE
├── README.md
├── babel.config.js ---babel 的配置文件
├── commitlint.config.js ---commitlint 的配置文件
├── doc.md ---项目文档
├── jest.config.js ---jest 的配置文件
├── mock ---mock 数据的文件夹
│   ├── badge.json
│   ├── email-panel.json
│   ├── index.js
│   ├── main-panel.json
│   ├── message-panel.json
│   ├── task-panel.json
│   ├── user-info.json
│   └── util.js
├── package-lock.json
├── package.json ---项目的包管理
├── postcss.config.js ---postcss 的配置文件
├── public
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets ---静态资源目录
│   │   ├── Belle.jpg
│   │   ├── images
│   │   ├── login-bg.png
│   │   ├── login-left.png
│   │   └── svg
│   ├── components ---项目的组件
│   │   ├── client-error.vue ---项目的 404 页面
│   │   ├── components-list.vue ---组件列表页面
│   │   ├── customized-form.vue ---自定义表单
│   │   ├── customized-icon.vue ---自定义图标
│   │   ├── customized-table.vue ---自定义表格
│   │   ├── editable-table.vue ---可编辑表格
│   │   ├── element-icon.vue ---element 图标
│   │   ├── email-panel.vue ---邮件面板
│   │   ├── header-item.vue ---顶部菜单
│   │   ├── histogram-chart.vue ---柱状图
│   │   ├── home-page.vue ---主页
│   │   ├── icon-page.vue ---图标页面
│   │   ├── icon-svg.vue ---svg 组件
│   │   ├── line-chart.vue ---折线图
│   │   ├── login.vue ---登录
│   │   ├── main-page.vue ---右侧内容区
│   │   ├── markdown-item.vue ---Markdown 页面
│   │   ├── message-panel.vue ---信息面板
│   │   ├── normal-form.vue ---常规表单
│   │   ├── normal-table.vue ---常规表格
│   │   ├── person-center.vue ---个人中心
│   │   ├── photo-wall.vue ---图片墙
│   │   ├── pie-chart.vue ---饼图
│   │   ├── pop-panel.vue
│   │   ├── richText-editor.vue ---富文本编辑器
│   │   ├── server-error.vue ---500 页面
│   │   ├── sidebar-item.vue ---左侧菜单栏
│   │   ├── task-panel.vue ---任务面板
│   │   └── todo-lists.vue ---todo list 页面
│   ├── icon ---项目图标相关
│   │   ├── index.js
│   │   └── svg
│   ├── main.js
│   ├── router ---项目路由
│   │   └── router.js
│   └── store ---项目的状态管理
│   ├── actions.js
│   ├── mutations.js
│   ├── state.js
│   └── store.js
├── svgo-config.yml ---svgo 的配置文件
├── tests
│   └── unit
│   └── example.spec.js
└── vue.config.js ---webpack 配置

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

- build：代码构建。

- style：样式的变动。

- test：添加测试。

- library：引入第三方库。

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

git push origin branch（分支名称）：将本地仓库的修改推送到远程仓库。

git branch：查看本地分支。

git branch -a：查看所有分支，包括本地分支和远程分支。

git branch name：创建本地分支。

git checkout branchname：切换到分支。

git checkout -b branchname：创建并切换本地分支。

git push origin branchname:branchname：推送本地新建的分支到远程分支。

git branch -d branchname：删除本地分支。

git checkout -b branchName(本地分支名称) origin(远程仓库名)/branchName(远程分支名)：基于远程分支创建本地分支。

### 图标组件的使用

图标已经封装并注册成全局组件，可以直接使用。将下载好的 svg 图标导入 icon/svg 中，运行时会自动将 svg 合成 svg-sprite，然后给图标组件传入 symbolID 即可。
