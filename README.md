# 学术个人主页：使用说明

这是一个参考多个电力系统领域专家的网站简历布局重新编写的静态主页。
保留顶部导航、左侧资料栏、右侧正文与页脚的基本结构。原站页脚标明使用 Jekyll / AcademicPages；本程序使用原生 HTML、CSS、JavaScript，未复制原作者的照片、研究图片或论文内容。

## 1. 在电脑上打开

将 academic-homepage.zip 完整解压到同一文件夹，再双击 index.html。
无需 Node.js、npm、Python、数据库或服务器。页面通过 #research 等地址片段切换栏目，刷新后仍保留当前栏目。
若浏览器阻止本地脚本，可用 VS Code 的 Live Server 打开目录。

## 2. 文件说明

| 文件 | 用途 |
| --- | --- |
| index.html | 页面框架、导航、侧栏、页脚 |
| styles.css | 字体、颜色、间距、桌面与手机布局 |
| profile.js | 姓名、照片、联系方式、研究内容、论文、项目、报告、博客及简历数据 |
| main.js | 内容渲染、栏目切换、手机菜单等交互 |
| assets/ | 放置照片、简历和论文 PDF |
| .nojekyll | 使 GitHub Pages 按静态文件发布 |

## 3. 修改个人资料

用文本编辑器打开 profile.js，修改引号内的内容，并保留逗号和括号。

```js
name: '张三',
initials: '张',
role: '博士研究生',
institution: '你的学校',
location: '中国 · 成都',
photo: 'assets/avatar.jpg',
email: 'yourname@university.edu',
cv: 'assets/cv.pdf',
```

示例姓名和经历仅用于说明，不是已确认的个人信息。将真实照片命名为 avatar.jpg 放入 assets 文件夹。未设置的外部链接和 PDF 按钮不会显示。

## 4. 添加论文

用真实资料替换 publications 中的演示条目。多篇论文用逗号分隔，按年份从新到旧排列，相同年份连续填写。

```js
publications: [
  {
    year: '2026',
    title: '你的真实论文题目',
    authors: '作者1，作者2',
    venue: '期刊名称，卷（期），页码，年份',
    summary: '论文简介。',
    status: 'Published',
    paper: 'assets/paper.pdf',
    code: 'https://github.com/你的用户名/你的仓库',
    bibtex: '@article{key, title={你的论文题目}, year={2026}}'
  }
],
```

bibtex 可留空；填写后显示可展开的引用文本。请仅公开有权发布的论文版本。

## 5. 添加其他内容

profile.js 中已提供每种数据结构的注释。报告、博客和经历默认留空，防止演示内容被误认为真实成果。

```js
talks: [{title:'报告题目', event:'会议名称', date:'2026-09-13', location:'成都', url:'assets/slides.pdf'}],
posts: [{title:'研究笔记标题', date:'2026-09-13', text:'第一段。\n\n第二段。'}],
education: [{period:'2022—2026', title:'学校 · 学位', detail:'专业和研究方向'}],
experience: [{period:'2026—至今', title:'机构 · 职位', detail:'工作内容'}],
```

页面文本默认按纯文本处理，不解释 HTML 标签。换行可在博客正文中使用 \n。

## 6. 上传到 GitHub Pages

1. 在 GitHub 创建名为「你的用户名.github.io」的仓库。
2. 将解压文件夹**内部**的 index.html、styles.css、profile.js、main.js、assets/ 和 .nojekyll 上传到仓库根目录。不要只上传 ZIP，也不要把 index.html 多套一层文件夹。
3. 打开仓库 Settings → Pages。
4. Source 选择 Deploy from a branch，分支选择 main，目录选择 /(root)，保存。
5. 发布完成后，以 Pages 页面显示的网址为准。

也支持普通项目仓库。所有资源均为相对路径，可在子目录下访问。

官方操作说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 7. 外观与后续更新

- 在 styles.css 的 :root 中修改 --blue 改变链接强调色。
- 在 .layout 中调整左右栏宽度和间距。
- 更新资料后保存 profile.js，再刷新浏览器；线上版本需要重新上传修改的文件。
- 手机端有折叠菜单和联系信息按钮；桌面端保留左侧个人资料栏。
- 下载包是交付时的源码快照。修改文件后，如果还保留页脚的“下载页面源码”，应重新打包 academic-homepage.zip，或删除该下载链接。

此版本是静态展示页，无后台编辑、登录或数据库。它使用浏览器脚本渲染正文；如果未来需要每篇论文独立网址、搜索引擎预渲染或大量博客，可迁移到原站采用的 AcademicPages。
