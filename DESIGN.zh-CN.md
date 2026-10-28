# 吴瑞祥律师官网 · Apple Design 改版说明

本轮目标：让业主和业主组织更快了解律师定位、服务范围、真实案件和联系方式。适用于桌面及手机浏览器，仍是可以由 GitHub Pages 直接托管的静态网站。

## 设计依据与范围

用户指定的设计规范：[`dickwu/apple-design-skill`](https://github.com/dickwu/apple-design-skill)，本次读取版本 `914b6a377c22755597e4405e54911b996de822d7`。

已读取 SKILL.md、AGENTS.md、hig-lookup、cross-platform，以及 accessibility、layout、typography、color、designing-for-ios、buttons、motion、branding、liquid-glass 等相关引用。网站采用其中的信息层级、可访问性、品牌克制、排版和交互原则；浏览器导航采用网页惯例。

## 设计审查摘要

原站内容与定位已有积累，本次保留业主方定位、原始法律正文、结构化数据内容、原图、联系方式、页面地址与 CNAME。主要重做信息顺序、公共导航、首页、文章和案例列表，以及详情页阅读体验。

已从源代码确认的原问题包括：手机菜单使用不可聚焦的 div；图片放大依赖鼠标点击；页面普遍缺少 main 地标；首页 `href="#"` 会传入 `querySelector('#')`；滚动动画依赖 JavaScript 显示正文；不同页面存在独立、重复的导航和脚本。新版统一采用语义化控件和公共脚本。

## 视觉与交互决定

保留深蓝和金色的律师品牌关系，降低全屏深色区域的占比，用冷灰与白色承载大段内容。识别点由本人原照与亲办案件承载；首页首先说明服务哪一方，再展示服务、案例、个人背景、问题解答和咨询方式。

字体使用系统字体：`-apple-system / BlinkMacSystemFont / Segoe UI / PingFang SC / Microsoft YaHei`，取消外部字体下载。正文以 17px 为基准，详情正文约 17–18px；小字保留清楚的明度差。标题使用字号和字重表达层级。按钮点击区域至少 44px，高频动作不增加等待动画。

| 角色 | 浅色 | 深色 | 已计算的文字对比度 |
| --- | --- | --- | --- |
| 正文 ink | `#1a2332` | `#f2f3f5` | 浅色白底 15.78:1 |
| 次要文字 muted | `#5f6875` | `#b4bcc8` | 白底 5.64:1、浅灰底 5.18:1；深色底 9.03:1 |
| 内容底 surface | `#ffffff` | `#161b23` | 作为背景 |
| 分区底 canvas | `#f5f5f7` | `#10141b` | 作为背景 |
| 分隔线 line | `#d8dce3` | `#3d4654` | 装饰，不单独传达信息 |
| 浅底金色文字 gold | `#896733` | `#d5b77f` | 白底 5.18:1、浅灰底 4.76:1；深色底 8.98:1 |

原品牌金 `#c9a86c` 用于固定深蓝案例卡，文字对比度 6.99:1。最初试排的 `#92703c` 在浅灰底仅 4.19:1，已调整为 `#896733`。

```text
桌面
品牌                 首页 / 执业领域 / 案例 / 文章 / 关于 / 咨询
定位 + 主要标题 + 咨询入口                 本人原照
三类服务
亲办案例                         亲办案例
本人背景照片                     专业介绍
专业头衔 / 可展开的证书
常见问题引导                     原生展开式问答
联系方式                         律所前台

手机
品牌                                     菜单
定位 / 标题 / 介绍 / 咨询入口
本人原照
服务卡逐条排列
案例卡逐条排列
背景介绍 / 专业头衔 / 可展开证书
可展开问答
电话 / 邮箱 / 地址 / 律所前台
```

## 原则与落实

- `layout.md › Visual hierarchy`：“Order content by relative importance.” 新版将服务与亲办案例提前，证书采用原生 details 展开。
- `accessibility.md › Vision`：“Support larger text sizes.” 使用 rem、弹性容器与随宽度堆叠的布局，不锁定正文高度。代码提供放大适配，实际浏览器 200% 字号验收待完成。
- `buttons.md › Best practices`：“Always include a press state for a custom button.” 按钮具备按压、聚焦与悬停反馈。
- `motion.md › Best practices`：“Make motion optional.” 响应 prefers-reduced-motion，正文不依赖滚动动效显示。
- `branding.md › Best practices`：“Ensure branding always defers to content.” 不重复堆叠装饰标志，不使用 Apple 图标或商标。
- `liquid-glass.md › The two layers`：玻璃材质仅用于浮在内容之上的导航。正文和内容卡使用实色；减少透明度或增强对比度时，导航回退为实色。

这些规则在本项目中对应 CSS 自定义属性、媒体查询、原生 button/details/dialog、ARIA 名称、焦点样式和正常网页链接。

## 保留内容与边界

- 保留三类业务：业主维权、业主组织建设、物权保护。
- 保留首页原有六问、文章与案例的法律正文及结构化数据内容；物业服务纠纷、业主知情权两页原有 JSON-LD 内部引号未转义，已仅补齐转义，解码后的文案不变。本轮未重新核验法律内容的时效性。
- 保留八篇文章的列表入口和全部九个 articles 页面，其中 coming-soon 是原有占位页。
- 保留证书原图与判决图；网页展示图仅作压缩，未生成或修改人物身份。
- 文章列表仍为两列平铺，手机单列；不恢复已删除的合规业务分类。
- 所有旧 URL 与原始图片保留。原有未填写备案号的占位文案不再显示，未填写或编造备案号码。
- 新版在独立分支制作，尚未推送或部署。

## 验证范围

已进行源码、资源链接、锚点、HTML5 结构、JSON-LD 一致性、正文保留、原图和 CNAME 一致性、CSS 与 JavaScript 语法检查。检查报告单独存放在交付目录。

当前环境先后拦截了 Chrome 与 Ego 的启动，尚未完成实际浏览器的电脑/手机截图、键盘完整流程、系统暗色模式和 200% 字号视觉验收。代码中包含这些适配，但不能以静态检查替代浏览器实测。
