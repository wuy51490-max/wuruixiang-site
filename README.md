# 吴瑞祥律师个人官网

仓库：[wuy51490-max/wuruixiang-site](https://github.com/wuy51490-max/wuruixiang-site)。原域名 `wuruixiang.com`，纯静态 HTML，GitHub Pages 从 main 根目录部署。

本轮改版依据用户指定的 [Apple Design Skill](https://github.com/dickwu/apple-design-skill)。设计与验证边界见 [DESIGN.zh-CN.md](DESIGN.zh-CN.md)。

## 查看网站

直接打开 index.html 即可浏览；或在当前目录运行：

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:8765`。无需安装依赖或执行构建。

## 文件说明

- `index.html`：首页、服务、个人介绍、专业资质、FAQ、联系方式。
- `cases.html`、`case-*.html`：亲办案例列表及详情。
- `blog.html`、`articles/`：专业文章列表及详情。
- `assets/site.css`、`assets/site.js`：全站公共样式和交互。
- `assets/apple-home.css`：首页的苹果官网视觉方向，独立于详情页样式。
- `assets/reading.css`：文章与案例详情的阅读布局。
- `images/`：保留的原始人物照、证书和判决图。
- `CNAME`：原有域名配置，保持原样。

## 版本保护

- 改版前提交：`041e3eff3681863d2a935dde17fd3338a29dbe26`。
- 原版回滚标签：`backup/before-apple-redesign-20261028`。
- 第一版改稿：`51fae440551afee0a2759abb4ef32ca4e613c0bc`，标签 `backup/apple-first-layout-20261028`。
- 新版分支：`redesign/apple-design-20261028`。

本次还保存了独立 Git bundle 和原站源码 ZIP。先保存当前工作，再从回滚标签在新目录恢复，避免覆盖任何后续修改。

本次仅进行本地改版和检查。向 main 推送会触发原站发布，用户审阅前不执行。
