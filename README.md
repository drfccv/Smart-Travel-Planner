# 智能旅行规划系统
![高德地图可视化](public/vite.svg)

## 🌟 功能特性
- 实时位置解析与地图中心点定位
- 景点信息查询（评分/坐标/实景图）
- 多日天气预报展示
- 地址坐标解析服务

## 🛠️ 技术组件
- **前端框架**: Vue3 + TypeScript
- **地图服务**: 高德地图JS API v2.0
- **状态管理**: Pinia
- **UI组件**: Element Plus

## 🔑 API集成说明
### 高德地图
1. 注册[开发者账号](https://lbs.amap.com/)
2. 创建Web应用获取`VITE_AMAP_KEY`
3. 添加安全域名白名单

### 硅基流动AI
1. 申请[API访问权限](https://siliconflow.cn/)
2. 获取`VITE_SILICONFLOW_KEY`

## ⚙️ 环境配置
```bash
# 复制示例文件
cp .env.example .env

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📂 项目结构
```
map-demo/
├── src/
│   ├── services/    # API服务层
│   │   ├── amap.ts       # 高德地图接口
│   │   └── siliconflow.ts # AI接口
│   ├── components/  # 可视化组件
│   │   ├── MapComponent.vue
│   │   └── WeatherPanel.vue
├── public/          # 静态资源
└── .env.example     # 环境变量模板
```

## ⚠️ 安全规范
1. 密钥必须通过环境变量注入
2. 禁止提交.env文件到版本库
3. 生产环境启用HTTPS加密

## 📜 版权声明
MIT Licensed | © 2024 [硅基流动](https://siliconflow.cn)