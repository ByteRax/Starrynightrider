# Starry Nightrider 本地服务器镜像 —— 零依赖,静态站 + 排行榜/多人 API
FROM node:24-alpine

WORKDIR /app
ENV PORT=8090 NODE_ENV=production

COPY package.json server.mjs ./
COPY site ./site

EXPOSE 8090
HEALTHCHECK --interval=30s --timeout=4s --start-period=5s \
  CMD wget -qO- "http://127.0.0.1:${PORT}/api/leaderboard" >/dev/null || exit 1

CMD ["node", "server.mjs"]
