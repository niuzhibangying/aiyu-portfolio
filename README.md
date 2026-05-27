# 向AI进击的阿鱼个人主页

这是一个面向 GitHub Pages 的纯静态个人作品主页，入口文件是 `index.html`。

## 本地预览

```bash
cd /Users/zhuyu/Documents/Playground/aiyu-portfolio
npm run serve
```

然后打开 `http://localhost:5174`。

## GitHub Pages 发布

1. 新建一个 GitHub 仓库。
2. 将本目录内容提交到仓库。
3. 在 GitHub 仓库的 `Settings -> Pages` 中选择发布分支和目录。
4. 等待 Pages 构建完成后访问生成的网址。

## 视频体积说明

当前分类版包含 9 支完整本地视频，站点大小约 657MB。GitHub 普通仓库单文件不能超过 100MiB，GitHub Pages 发布站点大小限制为 1GB；如果后续要放入全部 15 支视频，建议改用视频平台、对象存储或 CDN，再在页面中嵌入播放地址。

## 视频保护说明

页面已经对视频做了轻防护：隐藏浏览器下载按钮、禁用右键菜单、禁用拖拽保存、禁用画中画和远程播放入口。这可以挡住普通访客的直接下载操作。

纯静态 GitHub Pages 无法做到真正的视频加密或绝对禁止下载；只要浏览器能播放视频，熟悉开发者工具的人仍可能从网络请求中找到资源地址。若后续需要更强保护，建议改用带签名 URL 的对象存储/CDN、HLS AES-128 分片加密，或专业 DRM 视频服务。
