# AGENTS.md — 一棵松财税官网

## 项目概览

杭州一棵松企业管理有限公司品牌官网，展示财税全案服务、主播财税合规化、海南自贸港财税落地三大核心业务，传递"稳健如松、基业长青"的品牌形象。

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS 4
- **包管理**: pnpm（严禁 npm / yarn）

## 目录结构

```
src/
├── app/
│   ├── globals.css        # 全局样式 + 品牌色彩变量 + 自定义动画 + 文章排版
│   ├── layout.tsx         # 根布局，含 SEO metadata
│   ├── page.tsx           # 首页，组装各模块组件
│   └── articles/
│       ├── page.tsx       # 文章列表页 /articles
│       └── [slug]/page.tsx # 文章详情页（SSG 静态生成 + JSON-LD 结构化数据）
├── components/
│   ├── header.tsx         # 顶部导航栏（响应式+滚动变色，含文章入口）
│   ├── hero.tsx           # 首屏大图区（品牌标语+数据条）
│   ├── about.tsx          # 关于我们+发展里程碑+价值观
│   ├── services.tsx       # 三大核心服务详情卡片
│   ├── advantages.tsx     # 六大核心优势+客户实效案例
│   ├── qualifications.tsx # 资质认证展示
│   ├── faq.tsx            # 常见问题手风琴
│   ├── articles.tsx       # 首页文章洞察板块（最新3篇）
│   ├── contact.tsx        # 联系方式+CTA+悬停二维码
│   ├── floating-sidebar.tsx # 右侧浮动栏（智能客服，弹窗外链）
│   ├── footer.tsx         # 页脚
│   └── ui/                # shadcn/ui 组件库
├── hooks/
│   └── use-mobile.ts
├── lib/
│   ├── utils.ts           # cn() 工具函数
│   └── articles.ts        # 文章数据源（标题/摘要/分类/正文HTML）
└── server.ts

public/                    # 静态资源 + AI 抓取内容化文件
├── qrcode-wechat.png      # 微信客服二维码
├── whitepaper-2026.pdf    # 2026年中国企业财税合规服务白皮书
├── llms.txt               # AI 引擎品牌摘要
├── llms-full.txt          # AI 引擎完整品牌知识
├── faq.md                 # FAQ 文档
└── sitemap.xml            # 站点地图
```

## 文章板块规范

- 文章内容集中维护在 `src/lib/articles.ts`，正文用 HTML 字符串存储，排版样式由 globals.css 的 `.article-content` 控制
- 新增文章：在 articles.ts 的数组中追加一条（slug/title/summary/category/date/tags/content），详情页自动静态生成，无需手动创建路由
- 文章分类有固定配色映射（categoryColors），新增分类时需在 articles.tsx 和 articles/page.tsx 同步补色
- 详情页输出 JSON-LD（schema.org Article）结构，利于搜索引擎与 AI 抓取
- 新增文章后需同步更新 `public/sitemap.xml` 和 `public/llms.txt`

## 构建与运行

- **开发**: `pnpm dev`（端口 5000，HMR 热更新）
- **构建**: `pnpm build`
- **生产**: `pnpm start`
- **类型检查**: `pnpm ts-check`
- **Lint**: `pnpm lint`
- **全量验证**: `pnpm validate`（并行 ts-check + lint:build）

## 品牌色彩体系

| 角色 | 色值 | 用途 |
|------|------|------|
| 主色深蓝 | #0F2B46 (`navy`) | 标题、深色背景 |
| 辅色松绿 | #1B6B4A (`pine`) | 按钮、强调、品牌标识 |
| 点缀金色 | #C8983E (`gold`) | 装饰、数字高亮 |

所有品牌色在 `globals.css` 的 `@theme` 中定义为 Tailwind token，直接用 `text-pine`、`bg-navy` 等类名引用。

## 编码规范

- TypeScript strict 模式，禁止隐式 any
- 组件使用函数式 + 'use client'（按需）
- 样式优先使用 Tailwind 类名，自定义样式写在 globals.css
- 动效使用 CSS animation（fadeUp），不依赖 JS 动画库
- 品牌内容源自《品牌知识图谱信息采集表》，禁止编造数据

## 常见注意事项

- Footer 中的年份使用 `new Date().getFullYear()` 动态生成
- Header 组件监听滚动事件，需在 useEffect 中注册并清理
- FAQ 组件使用 useState 管理展开/收起状态
- 表单为静态展示，未接入后端提交
