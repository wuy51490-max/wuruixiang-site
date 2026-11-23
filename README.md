# 吴瑞祥律师官网改版

适用于 [wuruixiang.com](https://wuruixiang.com/) 的静态站。双击 `index.html` 即可浏览，文章、案例、工具和资质链接均使用本包内的实际文件。

## 页面与交互

- 首页将法律服务、亲办案例、实务文章、自查工具集中为四个入口。法律服务按四类实际问题切换，可以用方向键操作。
- `blog.html` 为实务文章列表，保留「物业专家解码」专栏名，并支持主题与关键词组合筛选。
- `cases.html` 汇总五件亲办案例，重点呈现首期专项维修资金执行案。`tools.html` 聚合两个沿用原站程序的自查工具。
- `assets/editorial.css` 提供共享新版视觉和首页布局。`assets/service-guide.js` 管理首页服务导览。`assets/site.js` 提供菜单、搜索和图片浏览等功能。

## 来源与发布状态

底稿为 WorkBuddy 本机官网仓库的 `4af8ea2` 脱敏提交，Git 远程为 `wuy51490-max/wuruixiang-site`。保留已有正文路径、主要首页锚点、站点验证文件、CNAME、robots 和 sitemap。GitHub Pages 使用 main 分支根目录发布。原存档 `DESIGN.zh-CN.md` 记录上一轮的设计。
