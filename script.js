// ===== 版本号 =====
const APP_VERSION = "2.3.0";
const APP_VERSION_KEY = "cloud_workstation_version";

// ===== 数据:技能树(云计算方向) =====
const skillData = [
    {
        category: "基础功底",
        icon: "🏗️",
        skills: [
            { name: "Linux 操作系统", desc: "文件系统/权限/进程/Shell 脚本" },
            { name: "计算机网络", desc: "TCP/IP、HTTP、DNS、负载均衡" },
            { name: "数据库基础", desc: "MySQL、Redis 基本使用与运维" },
            { name: "Python / Shell 脚本", desc: "自动化运维脚本编写" },
        ],
    },
    {
        category: "容器与编排",
        icon: "📦",
        skills: [
            { name: "Docker", desc: "镜像构建、容器管理、Dockerfile" },
            { name: "Kubernetes", desc: "Pod/Service/Deployment、集群管理" },
            { name: "Helm", desc: "K8s 应用包管理" },
            { name: "容器网络与存储", desc: "CNI、CSI、PV/PVC" },
        ],
    },
    {
        category: "云平台(方向A:阿里云/腾讯云)",
        icon: "☁️",
        skills: [
            { name: "阿里云 ECS / 核心产品", desc: "ECS、安全组、OSS、SLB、RDS、云监控" },
            { name: "腾讯云 CVM / TKE", desc: "云服务器、容器服务 TKE" },
            { name: "域名备案与服务器加固", desc: "备案流程、初始化、漏洞加固" },
            { name: "云上架构设计", desc: "高可用、容灾、成本优化、安全等保" },
        ],
    },
    {
        category: "CI/CD 与 DevOps",
        icon: "🔄",
        skills: [
            { name: "Git", desc: "版本控制、分支策略、协作流程" },
            { name: "Jenkins / GitLab CI", desc: "流水线搭建、自动化构建部署" },
            { name: "Ansible", desc: "配置管理、批量运维" },
            { name: "ArgoCD", desc: "GitOps 持续交付" },
        ],
    },
    {
        category: "监控与日志",
        icon: "📊",
        skills: [
            { name: "Prometheus", desc: "指标采集、告警规则" },
            { name: "Grafana", desc: "可视化监控面板" },
            { name: "ELK Stack", desc: "Elasticsearch + Logstash + Kibana 日志" },
            { name: "链路追踪", desc: "Jaeger / SkyWalking" },
        ],
    },
    {
        category: "基础设施即代码",
        icon: "⚙️",
        skills: [
            { name: "Terraform", desc: "多云资源编排" },
            { name: "服务网格 Istio", desc: "流量治理、灰度发布" },
            { name: "Serverless", desc: "函数计算、FaaS" },
            { name: "安全与合规", desc: "RBAC、镜像扫描、网络策略" },
        ],
    },
];

// ===== 数据:项目实战(贴合公有云运维学习路线) =====
const projectData = [
    {
        icon: "☁️",
        title: "阿里云 ECS 服务器初始化与安全加固",
        desc: "购买阿里云 ECS,完成系统初始化、安全组规则配置、防火墙、SSH 密钥登录、漏洞扫描与加固,搭建稳定的个人服务器基础环境。",
        tags: ["阿里云 ECS", "Linux", "安全加固"],
        status: "已完成",
        link: "https://github.com/Zzy-six",
    },
    {
        icon: "📜",
        title: "Shell 自动化运维脚本工具集",
        desc: "编写自动备份、日志清理、服务器巡检、资源监控等 Shell 脚本,通过 crontab 定时执行,提升日常运维效率。",
        tags: ["Shell", "crontab", "自动化"],
        status: "已完成",
        link: "https://github.com/Zzy-six",
    },
    {
        icon: "🐳",
        title: "Docker + Compose 容器化部署个人博客",
        desc: "使用 Dockerfile 构建应用镜像,Docker Compose 编排 Halo + MySQL + Nginx 多服务,实现一键部署与版本回滚。",
        tags: ["Docker", "Docker Compose", "Nginx"],
        status: "进行中",
        link: "https://github.com/Zzy-six",
    },
    {
        icon: "🌐",
        title: "云上高可用 Web 架构实战",
        desc: "阿里云 SLB + 多可用区 ECS + RDS 主从 + OSS 静态资源,搭建高可用 Web 架构,配置云监控告警与弹性伸缩。",
        tags: ["阿里云", "SLB", "RDS", "高可用"],
        status: "规划中",
        link: "https://github.com/Zzy-six",
    },
    {
        icon: "☸️",
        title: "Kubernetes 集群搭建与微服务部署",
        desc: "使用 kubeadm 搭建多节点 K8s 集群,部署微服务应用,配置 Deployment、Service、Ingress、ConfigMap 与 PVC 存储。",
        tags: ["Kubernetes", "Ingress", "kubeadm"],
        status: "规划中",
        link: "https://github.com/Zzy-six",
    },
    {
        icon: "🔄",
        title: "CI/CD 自动化流水线",
        desc: "基于 GitLab CI / Jenkins 搭建代码提交 → 自动构建镜像 → 推送镜像仓库 → K8s 滚动部署的完整 DevOps 流水线。",
        tags: ["GitLab CI", "Jenkins", "K8s"],
        status: "规划中",
        link: "https://github.com/Zzy-six",
    },
];

// ===== 数据:学习资源 =====
const resourceData = {
    官方文档: [
        { icon: "📘", title: "Kubernetes 官方文档", url: "https://kubernetes.io/zh-cn/docs/home/", desc: "K8s 中文官方文档" },
        { icon: "📗", title: "Docker 官方文档", url: "https://docs.docker.com/", desc: "Docker 完整文档" },
        { icon: "📙", title: "阿里云文档", url: "https://help.aliyun.com/", desc: "阿里云产品文档中心" },
        { icon: "📕", title: "Terraform 文档", url: "https://developer.hashicorp.com/terraform", desc: "HashiCorp 官方" },
    ],
    视频教程: [
        { icon: "🎥", title: "尚硅谷 K8s 教程", url: "https://www.bilibili.com", desc: "B 站搜索" },
        { icon: "🎥", title: "黑马程序员 Docker", url: "https://www.bilibili.com", desc: "B 站搜索" },
        { icon: "🎥", title: "CloudNative 云原生", url: "https://www.bilibili.com", desc: "B 站搜索" },
    ],
    在线实验: [
        { icon: "🧪", title: "阿里云沙箱实验室", url: "https://free.aliyun.com/", desc: "免费云上动手实验" },
        { icon: "🧪", title: "Killercoda", url: "https://killercoda.com/", desc: "K8s 交互式实验" },
        { icon: "🧪", title: "Play with K8s", url: "https://labs.play-with-k8s.com/", desc: "在线 K8s 环境" },
        { icon: "🧪", title: "华为云沙箱", url: "https://lab.huaweicloud.com/", desc: "华为云实验" },
    ],
    社区博客: [
        { icon: "✍️", title: "CNCF 博客", url: "https://www.cncf.io/blog/", desc: "云原生基金会博客" },
        { icon: "✍️", title: "掘金 - 云原生", url: "https://juejin.cn/cloud-native", desc: "中文技术社区" },
        { icon: "✍️", title: "InfoQ 云原生", url: "https://www.infoq.cn/", desc: "架构/云原生资讯" },
    ],
};

// ===== 数据版本控制(防止更新时数据丢失) =====
const DATA_VERSION = 2;
const DATA_VERSION_KEY = "cloud_workstation_data_version";

// 数据迁移函数:升级旧版本数据结构
function migrateData() {
    const currentVersion = parseInt(localStorage.getItem(DATA_VERSION_KEY) || "0");

    if (currentVersion === DATA_VERSION) return;

    console.log(`[数据迁移] 版本 ${currentVersion} → ${DATA_VERSION}`);

    // 版本 0 → 1:首次版本化,确保所有存储键存在
    if (currentVersion < 1) {
        const keys = [
            "cloud_workstation_notes",
            "cloud_workstation_theme",
            "cloud_workstation_bg",
            "cloud_workstation_appearance",
        ];
        keys.forEach((key) => {
            if (!localStorage.getItem(key)) {
                localStorage.setItem(key, JSON.stringify({}));
            }
        });
    }

    // 版本 1 → 2:简历默认数据改为模板占位符
    if (currentVersion < 2) {
        // 清除旧的编辑数据,让用户从模板开始编辑
        const editableKeys = [
            "cloud_workstation_about",
            "cloud_workstation_projects",
            "cloud_workstation_skills",
            "cloud_workstation_roadmap",
            "cloud_workstation_interview",
            "cloud_workstation_resources",
        ];
        editableKeys.forEach((key) => {
            if (localStorage.getItem(key)) {
                // 保留用户之前的编辑(不要清除),只更新默认值
                // 用户自己的编辑会被保留
            }
        });
    }

    localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION.toString());
    console.log("[数据迁移] 完成");
}

// ===== 数据备份/恢复功能 =====
function exportData() {
    const data = {
        version: APP_VERSION,
        dataVersion: DATA_VERSION,
        exportDate: new Date().toISOString(),
        localStorage: {},
    };

    // 导出所有相关 localStorage
    const keys = [
        "cloud_workstation_notes",
        "cloud_workstation_theme",
        "cloud_workstation_bg",
        "cloud_workstation_appearance",
        "cloud_workstation_data_version",
        "cloud_workstation_edit_mode",
        "cloud_workstation_projects",
        "cloud_workstation_skills",
        "cloud_workstation_roadmap",
        "cloud_workstation_interview",
        "cloud_workstation_about",
        "cloud_workstation_resources",
    ];
    keys.forEach((key) => {
        data.localStorage[key] = localStorage.getItem(key);
    });

    // 导出 IndexedDB 数据(简要信息)
    data.indexedDB = {
        dbName: "cloud_workstation_db",
        exportNote: "背景图片/视频等大文件存储在 IndexedDB,建议保留原浏览器",
    };

    return data;
}

function downloadBackup() {
    const data = exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cloud-workstation-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("备份已下载到本地");
}

function importData(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        if (!data.localStorage) throw new Error("无效的备份文件");

        // 恢复 localStorage
        Object.entries(data.localStorage).forEach(([key, value]) => {
            if (value !== null) {
                localStorage.setItem(key, value);
            }
        });

        return true;
    } catch (e) {
        console.error("导入失败:", e);
        return false;
    }
}

function restoreBackup() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const success = importData(event.target.result);
            if (success) {
                showToast("备份恢复成功!即将刷新页面...");
                setTimeout(() => location.reload(), 1500);
            } else {
                showToast("备份文件无效", "error");
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// Toast 提示
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.style.cssText = `
        position: fixed; top: 80px; left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        background: ${type === "error" ? "#ef4444" : "#10b981"};
        color: white; border-radius: 8px;
        z-index: 10000; font-size: 14px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        animation: slideDown 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ===== 可编辑数据系统 =====
const EDIT_DATA_KEYS = {
    projects: "cloud_workstation_projects",
    skills: "cloud_workstation_skills",
    roadmap: "cloud_workstation_roadmap",
    interview: "cloud_workstation_interview",
    about: "cloud_workstation_about",
    resources: "cloud_workstation_resources",
};

let editMode = localStorage.getItem("cloud_workstation_edit_mode") === "1";

function loadEditableData(key, defaultVal) {
    try {
        const saved = localStorage.getItem(EDIT_DATA_KEYS[key]);
        if (saved) return JSON.parse(saved);
    } catch (e) {}
    return defaultVal;
}

function saveEditableData(key, data) {
    localStorage.setItem(EDIT_DATA_KEYS[key], JSON.stringify(data));
}

// 加载用户自定义数据(覆盖默认数据)
let editableProjects = loadEditableData("projects", null);
let editableSkills = loadEditableData("skills", null);
let editableRoadmap = loadEditableData("roadmap", null);
let editableInterview = loadEditableData("interview", null);
let editableAbout = loadEditableData("about", null);
let editableResources = loadEditableData("resources", null);

// 获取实际使用的数据(用户修改过则用修改后的)
function getProjects() { return editableProjects || projectData; }
function getSkills() { return editableSkills || skillData; }
function getRoadmap() { return editableRoadmap || roadmapData; }
function getInterview() { return editableInterview || interviewData; }
function getAbout() { return editableAbout || null; }
function getResources() { return editableResources || resourceData; }

// ===== 关于我默认数据 =====
const DEFAULT_ABOUT = {
    avatar: "👤",
    name: "你的名字",
    role: "你的专业 · 在校生 / 求职实习",
    desc: "在这里写下你的个人简介,比如你的学习方向、职业目标、技能特长等。所有人默认看到的是这个模板,点击 ✏️ 编辑即可修改为你自己的信息。",
    email: "你的邮箱",
    github: "你的GitHub",
    edu: ["学校名称 · 专业 · 入学年份-毕业年份"],
    certs: ["已获证书1", "备考证书1"],
    jobs: [
        "实习方向:你想投递的岗位",
        "投递区域:目标城市/地区",
        "发展路径:短期 → 中期 → 长期目标",
        "目标薪资:期望薪资范围",
    ],
};

// ===== 编辑模式 UI =====
function initEditMode() {
    const toggle = document.getElementById("editModeToggle");
    if (!toggle) return;

    updateEditModeUI();

    toggle.addEventListener("click", () => {
        editMode = !editMode;
        localStorage.setItem("cloud_workstation_edit_mode", editMode ? "1" : "0");
        updateEditModeUI();
        showToast(editMode ? "已进入编辑模式,点击任意内容修改" : "已退出编辑模式");
    });

    // 添加版本号
    const versionEl = document.getElementById("appVersion");
    if (versionEl) versionEl.textContent = `v${APP_VERSION}`;
}

function updateEditModeUI() {
    document.body.classList.toggle("edit-mode", editMode);
    const toggle = document.getElementById("editModeToggle");
    if (toggle) {
        const btnText = toggle.querySelector(".btn-text");
        const btnIcon = toggle.querySelector(".btn-icon");
        if (btnText) {
            btnText.textContent = editMode ? "完成编辑" : "编辑模式";
        }
        if (btnIcon) {
            btnIcon.textContent = editMode ? "✅" : "✏️";
        }
        toggle.classList.toggle("active", editMode);
    }
    renderEditButtons();
    renderAbout(); // 更新简历列表的编辑状态
}

function renderEditButtons() {
    // 移除旧的编辑按钮
    document.querySelectorAll(".edit-btn").forEach((el) => el.remove());

    if (!editMode) return;

    const editBtn = (text, onClick) => {
        const btn = document.createElement("button");
        btn.className = "edit-btn";
        btn.textContent = text;
        btn.onclick = onClick;
        return btn;
    };

    // 项目卡片编辑
    document.querySelectorAll(".project-card").forEach((card, idx) => {
        const btn = editBtn("✏️", () => editProject(idx));
        card.appendChild(btn);
    });

    // 关于我编辑
    const aboutSection = document.getElementById("about");
    if (aboutSection && !aboutSection.querySelector(".edit-btn")) {
        const btn = editBtn("✏️ 编辑简历", editAbout);
        btn.style.position = "absolute";
        btn.style.top = "20px";
        btn.style.right = "20px";
        aboutSection.style.position = "relative";
        aboutSection.appendChild(btn);
    }

    // 技能树编辑
    document.querySelectorAll(".skill-category").forEach((cat, idx) => {
        const btn = editBtn("✏️", () => editSkillCategory(idx));
        cat.appendChild(btn);
    });

    // 路线图编辑
    document.querySelectorAll(".roadmap-stage").forEach((stage, idx) => {
        const btn = editBtn("✏️", () => editRoadmapStage(idx));
        stage.appendChild(btn);
    });

    // 面试题编辑
    document.querySelectorAll(".interview-item").forEach((item, idx) => {
        const btn = editBtn("✏️", () => editInterviewItem(idx));
        item.appendChild(btn);
    });

    // 资源编辑
    document.querySelectorAll(".resource-item").forEach((item, idx) => {
        const btn = editBtn("✏️", () => editResourceItem(idx));
        item.appendChild(btn);
    });

    // 技能条目编辑
    document.querySelectorAll(".skill-item").forEach((item, idx) => {
        const btn = editBtn("✏️", () => editSkillItem(idx));
        btn.style.top = "4px";
        btn.style.right = "4px";
        btn.style.width = "22px";
        btn.style.height = "22px";
        btn.style.fontSize = "11px";
        item.appendChild(btn);
    });

    // section 描述编辑
    document.querySelectorAll(".section-desc").forEach((el) => {
        el.style.position = "relative";
        const btn = editBtn("✏️", () => editSectionDesc(el));
        btn.style.top = "4px";
        btn.style.right = "4px";
        btn.style.width = "22px";
        btn.style.height = "22px";
        btn.style.fontSize = "11px";
        btn.style.background = "#8b5cf6";
        el.appendChild(btn);
    });

    // Hero 区编辑
    const heroSection = document.querySelector(".hero-content");
    if (heroSection && !heroSection.querySelector(".edit-btn")) {
        const btn = editBtn("✏️ 编辑", editHero);
        btn.style.position = "absolute";
        btn.style.top = "20px";
        btn.style.right = "20px";
        btn.style.background = "#ec4899";
        heroSection.appendChild(btn);
    }

    // 添加新项目按钮
    const projectGrid = document.getElementById("projectGrid");
    if (projectGrid && !document.getElementById("addProjectBtn")) {
        const addBtn = document.createElement("button");
        addBtn.id = "addProjectBtn";
        addBtn.className = "edit-btn add-btn";
        addBtn.textContent = "➕ 添加新项目";
        addBtn.onclick = () => editProject(-1);
        projectGrid.parentElement.appendChild(addBtn);
    }

    // 添加新技能分类按钮
    const skillContainer = document.getElementById("skillCategories");
    if (skillContainer && !document.getElementById("addSkillCategoryBtn")) {
        const addBtn = document.createElement("button");
        addBtn.id = "addSkillCategoryBtn";
        addBtn.className = "edit-btn add-btn";
        addBtn.textContent = "➕ 添加新技能分类";
        addBtn.onclick = () => editSkillCategory(-1);
        skillContainer.parentElement.appendChild(addBtn);
    }

    // 添加新阶段按钮
    const roadmapContainer = document.getElementById("roadmapTimeline");
    if (roadmapContainer && !document.getElementById("addRoadmapBtn")) {
        const addBtn = document.createElement("button");
        addBtn.id = "addRoadmapBtn";
        addBtn.className = "edit-btn add-btn";
        addBtn.textContent = "➕ 添加新阶段";
        addBtn.onclick = () => editRoadmapStage(-1);
        roadmapContainer.parentElement.appendChild(addBtn);
    }

    // 让 section 标题可编辑
    document.querySelectorAll(".section-title").forEach((title) => {
        title.style.position = "relative";
        const btn = editBtn("✏️", () => editSectionTitle(title));
        btn.style.top = "0";
        btn.style.right = "0";
        btn.style.width = "20px";
        btn.style.height = "20px";
        btn.style.fontSize = "10px";
        btn.style.background = "#06b6d4";
        title.appendChild(btn);
    });
}

// ===== 编辑弹窗 =====
function openEditModal(title, fields, onSave) {
    const modal = document.createElement("div");
    modal.className = "modal active";
    modal.id = "editModal";

    let fieldsHTML = fields.map((f, i) => {
        if (f.type === "textarea") {
            return `<div class="edit-field"><label>${f.label}</label><textarea data-field="${i}" rows="4">${f.value || ""}</textarea></div>`;
        }
        if (f.type === "tags") {
            return `<div class="edit-field"><label>${f.label}(逗号分隔)</label><input type="text" data-field="${i}" value="${(f.value || []).join(", ")}"></div>`;
        }
        if (f.type === "list") {
            const items = (f.value || []).map((v) => `<li contenteditable="true" data-list="${i}">${v}</li>`).join("");
            return `<div class="edit-field"><label>${f.label}</label><ul data-list-container="${i}">${items}</ul><button type="button" class="edit-add-item" data-list-add="${i}">➕ 添加</button></div>`;
        }
        if (f.type === "select") {
            const options = f.options.map((o) => `<option value="${o}" ${o === f.value ? "selected" : ""}>${o}</option>`).join("");
            return `<div class="edit-field"><label>${f.label}</label><select data-field="${i}">${options}</select></div>`;
        }
        return `<div class="edit-field"><label>${f.label}</label><input type="text" data-field="${i}" value="${f.value || ""}"></div>`;
    }).join("");

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" data-close>×</button>
            </div>
            <div class="modal-body">
                ${fieldsHTML}
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" data-cancel>取消</button>
                <button class="btn-primary" data-save>保存</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelectorAll("[data-close], [data-cancel]").forEach((el) => el.onclick = close);
    modal.onclick = (e) => { if (e.target === modal) close(); };

    modal.querySelector("[data-save]").onclick = () => {
        const values = {};
        fields.forEach((f, i) => {
            const el = modal.querySelector(`[data-field="${i}"]`);
            if (f.type === "tags") {
                values[f.key] = el.value.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
            } else if (f.type === "list") {
                const items = modal.querySelectorAll(`[data-list="${i}"]`);
                values[f.key] = Array.from(items).map((li) => li.textContent).filter(Boolean);
            } else {
                values[f.key] = el ? el.value : "";
            }
        });

        // 收集列表字段
        modal.querySelectorAll("[data-list-container]").forEach((container) => {
            const idx = container.dataset.listContainer;
            const key = fields[parseInt(idx)].key;
            const items = container.querySelectorAll("li");
            values[key] = Array.from(items).map((li) => li.textContent).filter(Boolean);
        });

        onSave(values);
        close();
    };

    // 列表添加按钮
    modal.querySelectorAll("[data-list-add]").forEach((btn) => {
        btn.onclick = () => {
            const idx = btn.dataset.listAdd;
            const container = btn.parentElement.querySelector(`[data-list-container="${idx}"]`);
            const li = document.createElement("li");
            li.contentEditable = "true";
            li.textContent = "新条目";
            container.appendChild(li);
        };
    });
}

// ===== 编辑:项目 =====
function editProject(idx) {
    const projects = getProjects();
    const isNew = idx < 0;
    const project = isNew ? { icon: "📦", title: "", desc: "", tags: [], status: "规划中", link: "" } : projects[idx];

    openEditModal(isNew ? "添加新项目" : "编辑项目", [
        { key: "icon", label: "图标(emoji)", value: project.icon },
        { key: "title", label: "项目标题", value: project.title },
        { key: "desc", label: "项目描述", type: "textarea", value: project.desc },
        { key: "tags", label: "标签", type: "tags", value: project.tags },
        { key: "status", label: "状态", type: "select", options: ["规划中", "进行中", "已完成"], value: project.status },
        { key: "link", label: "链接(GitHub等)", value: project.link },
    ], (values) => {
        if (isNew) {
            projects.push(values);
        } else {
            projects[idx] = { ...project, ...values };
        }
        editableProjects = projects;
        saveEditableData("projects", projects);
        renderProjects();
        updateStats();
        showToast(isNew ? "项目已添加" : "项目已更新");
    });
}

// ===== 编辑:关于我 =====
function editAbout() {
    const about = getAbout() || DEFAULT_ABOUT;

    openEditModal("编辑简历信息", [
        { key: "name", label: "姓名", value: about.name },
        { key: "role", label: "职位/身份", value: about.role },
        { key: "email", label: "邮箱", value: about.email },
        { key: "github", label: "GitHub 用户名", value: about.github },
        { key: "desc", label: "个人简介", type: "textarea", value: about.desc },
        { key: "edu", label: "教育背景", type: "list", value: about.edu },
        { key: "certs", label: "技能证书", type: "list", value: about.certs },
        { key: "jobs", label: "求职意向", type: "list", value: about.jobs },
    ], (values) => {
        editableAbout = { ...about, ...values };
        saveEditableData("about", editableAbout);
        renderAbout();
        showToast("简历已更新");
    });
}

function renderAbout() {
    const about = getAbout() || DEFAULT_ABOUT;
    
    const nameEl = document.getElementById("resumeName");
    const roleEl = document.getElementById("resumeRole");
    const descEl = document.getElementById("resumeDesc");
    const emailEl = document.getElementById("resumeEmail");
    const ghLink = document.getElementById("resumeGithub");
    const avatarEl = document.querySelector("#about .avatar");

    nameEl.textContent = about.name;
    roleEl.textContent = about.role;
    descEl.textContent = about.desc;
    emailEl.textContent = about.email;
    ghLink.textContent = about.github;
    ghLink.href = `https://github.com/${about.github}`;

    // 头像显示
    avatarEl.textContent = about.avatar || "👤";

    if (editMode) {
        // 编辑模式：给每个元素添加内联编辑
        makeInlineEditable(nameEl, "name", "姓名");
        makeInlineEditable(roleEl, "role", "职位/身份");
        makeInlineEditable(descEl, "desc", "个人简介", true);
        makeInlineEditable(emailEl, "email", "邮箱");
        makeInlineEditable(ghLink, "github", "GitHub 用户名");
        
        // 头像编辑
        if (avatarEl && !avatarEl.querySelector(".avatar-edit-btn")) {
            const editBtn = document.createElement("button");
            editBtn.className = "avatar-edit-btn";
            editBtn.title = "点击更换头像";
            editBtn.textContent = "✏️";
            editBtn.onclick = (e) => {
                e.stopPropagation();
                openEditModal("更换头像", [
                    { key: "avatar", label: "输入 emoji 或文字", value: about.avatar || "👤" },
                ], (values) => {
                    const currentAbout = getAbout() || DEFAULT_ABOUT;
                    currentAbout.avatar = values.avatar;
                    editableAbout = { ...currentAbout };
                    saveEditableData("about", editableAbout);
                    renderAbout();
                    showToast("头像已更新");
                });
            };
            avatarEl.appendChild(editBtn);
            avatarEl.style.cursor = "pointer";
        }
    } else {
        // 正常模式：移除编辑相关
        [nameEl, roleEl, descEl, emailEl, ghLink].forEach(el => {
            el.style.cursor = "";
            el.onclick = null;
            el.classList.remove("editable-field");
        });
        if (avatarEl) {
            avatarEl.style.cursor = "";
            const btn = avatarEl.querySelector(".avatar-edit-btn");
            if (btn) btn.remove();
        }
    }

    // 渲染列表（支持编辑模式）
    renderResumeList("eduList", about.edu, "edu");
    renderResumeList("certList", about.certs, "certs");
    renderResumeList("jobList", about.jobs, "jobs");
}

// ===== 内联编辑元素 =====
function makeInlineEditable(el, field, label, isTextarea = false) {
    if (!el) return;
    el.style.cursor = "pointer";
    el.classList.add("editable-field");
    
    // 移除旧事件
    el.onclick = null;
    
    el.onclick = () => {
        const currentAbout = getAbout() || DEFAULT_ABOUT;
        const currentValue = currentAbout[field] || el.textContent;
        
        openEditModal(`编辑${label}`, [
            { key: "value", label: label, type: isTextarea ? "textarea" : "text", value: currentValue },
        ], (values) => {
            const about = getAbout() || { ...DEFAULT_ABOUT };
            about[field] = values.value;
            editableAbout = { ...about };
            saveEditableData("about", editableAbout);
            renderAbout();
            showToast(`${label}已更新`);
        });
    };
}

// ===== 渲染简历列表（支持编辑/删除/添加）=====
function renderResumeList(listId, items, key) {
    const list = document.getElementById(listId);
    if (!list) return;

    if (editMode) {
        // 编辑模式：渲染带操作按钮的列表
        list.innerHTML = items.map((item, idx) => `
            <li class="editable-list-item" data-key="${key}" data-idx="${idx}">
                <span class="item-text">${escapeHtml(item)}</span>
                <div class="item-actions">
                    <button class="item-btn edit-item-btn" onclick="editResumeItem('${key}', ${idx})" title="编辑">✏️</button>
                    <button class="item-btn delete-item-btn" onclick="deleteResumeItem('${key}', ${idx})" title="删除">🗑️</button>
                </div>
            </li>
        `).join("");

        // 添加"新增"按钮
        const existingAddBtn = list.parentElement.querySelector(`.add-list-btn[data-key="${key}"]`);
        if (!existingAddBtn) {
            const addBtn = document.createElement("button");
            addBtn.className = "add-list-btn";
            addBtn.dataset.key = key;
            addBtn.textContent = "➕ 添加新条目";
            addBtn.onclick = () => addResumeItem(key);
            list.parentElement.appendChild(addBtn);
        }
    } else {
        // 正常模式：普通列表
        list.innerHTML = items.map((e) => `<li>${e}</li>`).join("");
        // 移除添加按钮
        const addBtn = list.parentElement.querySelector(`.add-list-btn[data-key="${key}"]`);
        if (addBtn) addBtn.remove();
    }
}

// ===== 编辑简历单条条目 =====
function editResumeItem(key, idx) {
    const about = getAbout() || { ...DEFAULT_ABOUT };
    const item = about[key][idx];

    openEditModal("编辑条目", [
        { key: "text", label: "内容", type: "textarea", value: item },
    ], (values) => {
        about[key][idx] = values.text;
        editableAbout = { ...about };
        saveEditableData("about", editableAbout);
        renderAbout();
        showToast("已更新");
    });
}

// ===== 删除简历单条条目 =====
function deleteResumeItem(key, idx) {
    const about = getAbout() || { ...DEFAULT_ABOUT };
    if (!confirm("确定删除该条目吗？")) return;
    about[key].splice(idx, 1);
    editableAbout = { ...about };
    saveEditableData("about", editableAbout);
    renderAbout();
    showToast("已删除");
}

// ===== 添加简历新条目 =====
function addResumeItem(key) {
    const about = getAbout() || { ...DEFAULT_ABOUT };
    openEditModal("添加新条目", [
        { key: "text", label: "内容", type: "textarea", value: "" },
    ], (values) => {
        about[key].push(values.text);
        editableAbout = { ...about };
        saveEditableData("about", editableAbout);
        renderAbout();
        showToast("已添加");
    });
}

// HTML 转义
function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// ===== 编辑:技能分类 =====
function editSkillCategory(idx) {
    const skills = getSkills();
    const cat = skills[idx];

    openEditModal(`编辑分类: ${cat.category}`, [
        { key: "category", label: "分类名称", value: cat.category },
        { key: "icon", label: "图标(emoji)", value: cat.icon },
    ], (values) => {
        skills[idx] = { ...cat, ...values };
        editableSkills = skills;
        saveEditableData("skills", skills);
        renderSkills();
        showToast("技能分类已更新");
    });
}

// ===== 编辑:路线图 =====
function editRoadmapStage(idx) {
    const roadmap = getRoadmap();
    const stage = roadmap[idx];

    openEditModal(`编辑阶段: ${stage.title}`, [
        { key: "title", label: "阶段标题", value: stage.title },
        { key: "goal", label: "阶段目标", type: "textarea", value: stage.goal },
        { key: "duration", label: "时间描述", value: stage.duration },
        { key: "topics", label: "学习内容", type: "list", value: stage.topics },
    ], (values) => {
        roadmap[idx] = { ...stage, ...values };
        editableRoadmap = roadmap;
        saveEditableData("roadmap", roadmap);
        renderRoadmap();
        showToast("路线图已更新");
    });
}

// ===== 编辑:面试题 =====
function editInterviewItem(idx) {
    const interviews = getInterview();
    let found = null;
    let catName = null;
    let itemIdx = -1;
    for (const [cat, items] of Object.entries(interviews)) {
        const item = items[idx];
        if (item) {
            found = item;
            catName = cat;
            itemIdx = idx;
            break;
        }
    }
    if (!found) return;

    openEditModal("编辑面试题", [
        { key: "q", label: "问题", type: "textarea", value: found.q },
        { key: "a", label: "答案", type: "textarea", value: found.a },
    ], (values) => {
        interviews[catName][itemIdx] = { ...found, ...values };
        editableInterview = interviews;
        saveEditableData("interview", interviews);
        renderInterviewList();
        showToast("面试题已更新");
    });
}

// ===== 编辑:学习资源 =====
function editResourceItem(idx) {
    const resources = getResources();
    let found = null;
    let catName = null;
    let itemIdx = -1;
    for (const [cat, items] of Object.entries(resources)) {
        const item = items[idx];
        if (item) {
            found = item;
            catName = cat;
            itemIdx = idx;
            break;
        }
    }
    if (!found) return;

    openEditModal("编辑学习资源", [
        { key: "title", label: "标题", value: found.title },
        { key: "url", label: "链接URL", value: found.url },
        { key: "desc", label: "描述", value: found.desc },
    ], (values) => {
        resources[catName][itemIdx] = { ...found, ...values };
        editableResources = resources;
        saveEditableData("resources", resources);
        renderResourceList();
        showToast("资源已更新");
    });
}

// ===== 编辑:技能条目 =====
function editSkillItem(idx) {
    const skills = getSkills();
    let found = null;
    let catIdx = -1;
    let skillIdx = -1;

    let globalIdx = 0;
    for (let ci = 0; ci < skills.length; ci++) {
        for (let si = 0; si < skills[ci].skills.length; si++) {
            if (globalIdx === idx) {
                found = skills[ci].skills[si];
                catIdx = ci;
                skillIdx = si;
                break;
            }
            globalIdx++;
        }
        if (found) break;
    }
    if (!found) return;

    openEditModal("编辑技能", [
        { key: "name", label: "技能名称", value: found.name },
        { key: "desc", label: "技能描述", type: "textarea", value: found.desc },
    ], (values) => {
        skills[catIdx].skills[skillIdx] = { ...found, ...values };
        editableSkills = skills;
        saveEditableData("skills", skills);
        renderSkills();
        showToast("技能已更新");
    });
}

// ===== 编辑:section描述 =====
function editSectionDesc(el) {
    const key = el.dataset.editKey || el.textContent.trim().substring(0, 30);
    const saved = localStorage.getItem("cloud_workstation_desc_" + key);
    const current = saved || el.textContent;

    openEditModal("编辑描述文字", [
        { key: "text", label: "描述内容", type: "textarea", value: current },
    ], (values) => {
        el.textContent = values.text;
        localStorage.setItem("cloud_workstation_desc_" + key, values.text);
        showToast("描述已更新");
    });
}

// ===== 编辑:Hero区 =====
function editHero() {
    const titleEl = document.querySelector(".hero h1");
    const subtitleEl = document.querySelector(".hero-subtitle");

    const savedTitle = localStorage.getItem("cloud_workstation_hero_title") || titleEl.textContent;
    const savedSubtitle = localStorage.getItem("cloud_workstation_hero_subtitle") || subtitleEl.textContent;

    openEditModal("编辑首页标题", [
        { key: "title", label: "主标题", value: savedTitle },
        { key: "subtitle", label: "副标题", type: "textarea", value: savedSubtitle },
    ], (values) => {
        titleEl.textContent = values.title;
        subtitleEl.textContent = values.subtitle;
        localStorage.setItem("cloud_workstation_hero_title", values.title);
        localStorage.setItem("cloud_workstation_hero_subtitle", values.subtitle);
        showToast("首页已更新");
    });
}

// ===== 编辑:section标题 =====
function editSectionTitle(el) {
    const key = el.dataset.editKey || el.textContent.trim().substring(0, 30);
    const saved = localStorage.getItem("cloud_workstation_title_" + key);
    const current = saved || el.childNodes[el.childNodes.length - 1].textContent.trim();

    openEditModal("编辑标题", [
        { key: "text", label: "标题文字", value: current },
    ], (values) => {
        // 保留图标,只替换文字
        const iconMatch = current.match(/^[\u{1F300}-\u{1F9FF}🔧🗺️📦📚💬👤📊⚙️]+/u);
        if (iconMatch) {
            el.childNodes[el.childNodes.length - 1].textContent = " " + values.text;
        } else {
            el.childNodes[el.childNodes.length - 1].textContent = values.text;
        }
        localStorage.setItem("cloud_workstation_title_" + key, values.text);
        showToast("标题已更新");
    });
}

// ===== 本地存储工具 =====
const STORAGE_KEY = "cloud_workstation_notes";

function loadNotes() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
        return {};
    }
}

function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

let notes = loadNotes();
let currentSkillKey = null;

// ===== 渲染技能树 =====
function renderSkills() {
    const container = document.getElementById("skillCategories");
    container.innerHTML = getSkills()
        .map(
            (cat) => `
        <div class="skill-category">
            <h3>${cat.icon} ${cat.category}</h3>
            ${cat.skills
                .map((skill) => {
                    const key = `${cat.category}-${skill.name}`;
                    const note = notes[key] || {};
                    const progress = note.progress || 0;
                    return `
                    <div class="skill-item" data-key="${key}" data-desc="${skill.desc}">
                        <div class="skill-item-head">
                            <span class="skill-item-name">${skill.name}</span>
                            <span class="skill-item-level">${progress}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width:${progress}%"></div>
                        </div>
                    </div>
                `;
                })
                .join("")}
        </div>
    `,
        )
        .join("");

    // 绑定点击事件
    container.querySelectorAll(".skill-item").forEach((item) => {
        item.addEventListener("click", () => openNoteModal(item.dataset.key, item.dataset.desc));
    });
}

// ===== 渲染项目实战 =====
function renderProjects() {
    const container = document.getElementById("projectGrid");
    container.innerHTML = getProjects()
        .map(
            (p) => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">${p.icon}</div>
                ${p.status ? `<span class="project-status status-${p.status}">${p.status}</span>` : ""}
            </div>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="project-tags">
                ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
            </div>
            ${
                p.link && p.link !== "#"
                    ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">查看详情 →</a>`
                    : `<span class="project-link" style="color:var(--text-light);cursor:default">待补充链接</span>`
            }
        </div>
    `,
        )
        .join("");
}

// ===== 渲染学习资源 =====
let currentResourceTab = null;

function renderResourceTabs() {
    const tabs = Object.keys(resourceData);
    currentResourceTab = currentResourceTab || tabs[0];
    const container = document.getElementById("resourceTabs");
    container.innerHTML = tabs
        .map(
            (tab) =>
                `<button class="resource-tab ${tab === currentResourceTab ? "active" : ""}" data-tab="${tab}">${tab}</button>`,
        )
        .join("");
    container.querySelectorAll(".resource-tab").forEach((btn) => {
        btn.addEventListener("click", () => {
            currentResourceTab = btn.dataset.tab;
            renderResourceTabs();
            renderResourceList();
        });
    });
}

function renderResourceList() {
    const list = getResources()[currentResourceTab] || [];
    const container = document.getElementById("resourceList");
    container.innerHTML = list
        .map(
            (r) => `
        <a href="${r.url}" target="_blank" rel="noopener" class="resource-item">
            <span class="resource-icon">${r.icon}</span>
            <div class="resource-info">
                <h4>${r.title}</h4>
                <p>${r.desc}</p>
            </div>
        </a>
    `,
        )
        .join("");
}

// ===== 笔记弹窗 =====
function openNoteModal(key, desc) {
    currentSkillKey = key;
    const note = notes[key] || {};
    const progress = note.progress || 0;
    document.getElementById("modalTitle").textContent = key.split("-").slice(1).join("-");
    document.getElementById("progressRange").value = progress;
    document.getElementById("progressValue").textContent = progress + "%";
    document.getElementById("noteText").value = note.text || "";
    document.getElementById("noteModal").classList.add("active");
}

function closeNoteModal() {
    document.getElementById("noteModal").classList.remove("active");
    currentSkillKey = null;
}

function saveNote() {
    if (!currentSkillKey) return;
    const progress = parseInt(document.getElementById("progressRange").value, 10);
    const text = document.getElementById("noteText").value;
    notes[currentSkillKey] = { progress, text };
    saveNotes(notes);
    renderSkills();
    updateStats();
    closeNoteModal();
}

// ===== 统计数据更新 =====
function updateStats() {
    // 技能总数
    const totalSkills = skillData.reduce((sum, cat) => sum + cat.skills.length, 0);
    document.getElementById("skillCount").textContent = totalSkills;

    // 平均掌握度
    let totalProgress = 0;
    let count = 0;
    skillData.forEach((cat) => {
        cat.skills.forEach((skill) => {
            const key = `${cat.category}-${skill.name}`;
            totalProgress += (notes[key] && notes[key].progress) || 0;
            count++;
        });
    });
    const avg = count > 0 ? Math.round(totalProgress / count) : 0;
    document.getElementById("progressAvg").textContent = avg + "%";

    // 项目数
    document.getElementById("projectCount").textContent = projectData.length;
}

// ===== 移动端菜单 =====
function initMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");
    toggle.addEventListener("click", () => menu.classList.toggle("active"));
    menu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => menu.classList.remove("active"));
    });
}

// ===== 弹窗事件绑定 =====
function initModal() {
    document.getElementById("modalClose").addEventListener("click", closeNoteModal);
    document.getElementById("noteCancel").addEventListener("click", closeNoteModal);
    document.getElementById("noteSave").addEventListener("click", saveNote);
    document.getElementById("noteModal").addEventListener("click", (e) => {
        if (e.target.id === "noteModal") closeNoteModal();
    });
    document.getElementById("progressRange").addEventListener("input", (e) => {
        document.getElementById("progressValue").textContent = e.target.value + "%";
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeNoteModal();
    });
}

// ===== 数据:学习路线图(公有云运维方向 A:阿里云/腾讯云) =====
const roadmapData = [
    {
        icon: "🎯",
        title: "方向定位:公有云运维(阿里云/腾讯云)",
        duration: "深耕单线",
        goal: "选定方向 A,上手快、岗位最多、最适合零基础入行。不要双线乱学。",
        topics: [
            "目标路径:实习 → 毕业1~2年 → 公有云高级运维/云架构实施/政企数通工程师",
            "稳定目标:月薪 12~18k(珠三角常态薪资)",
            "避坑:桌面运维、纯弱电监控、纯机房打杂只能保底,冲不到 12k 上限,仅作短期过渡",
            "投递实习:云运维实习生/云实施助理/阿里云代理商技术支持/容器运维助理",
            "投递区域:东莞松山湖、广州白云 IT 服务商、云渠道代理商",
        ],
    },
    {
        icon: "📝",
        title: "阶段一:实习前准备(当下立刻吃透,面试通关)",
        duration: "现在 → 拿到实习",
        goal: "把面试八股和云上基础操作吃透,确保能通过云运维实习面试。",
        topics: [
            "Linux 核心:CentOS/Ubuntu 日常命令、用户权限、磁盘挂载、进程管理、日志排查、防火墙、定时任务(八股必背)",
            "公有云基础:阿里云 ECS、安全组、OSS、SLB、RDS、云监控、域名备案、服务器初始化、漏洞加固",
            "网络基础:IP 子网、路由、静态路由、VLAN、TCP/IP、HTTP/HTTPS,会基础抓包排错",
            "基础 Shell 脚本:循环、判断、自动备份脚本,能写简单自动化工具即可",
        ],
    },
    {
        icon: "💼",
        title: "阶段二:实习在岗 3~6 个月(边做边练,拉开差距)",
        duration: "实习期 3~6 个月",
        goal: "在实习岗位边做边练,用项目与证书拉开与同届的差距。",
        topics: [
            "Docker 容器:镜像、容器编排、仓库、容器部署项目(企业云运维刚需)",
            "MySQL 入门:基础增删改查、数据库备份还原、慢 SQL 排查、主从复制基础",
            "云上项目实战:自搭个人网站+后端服务,购买服务器→部署上线→监控告警全流程跑通",
            "考取证书:阿里云 ACA 云计算助理工程师(低成本、高含金量,简历硬背书)",
        ],
    },
    {
        icon: "🚀",
        title: "阶段三:毕业转正/跳槽冲 12k 核心技能",
        duration: "毕业 → 1~2 年",
        goal: "补齐高薪岗核心技能,拿 offer 冲 12k 上限。",
        topics: [
            "Kubernetes(K8s)基础:集群部署、Pod、Service、ConfigMap,懂日常维护排查即可(不用精通开发)",
            "云架构设计:中小企业上云方案、高可用架构、容灾、成本优化、安全等保基础",
            "进阶 Shell/Python:用简单脚本实现服务器批量巡检、日志清洗、自动化运维",
            "升级证书:阿里云 ACP 高级云计算工程师(珠三角企业高薪岗标配证书)",
        ],
    },
    {
        icon: "🏆",
        title: "职业发展:稳定 12~18k(珠三角)",
        duration: "毕业 1~2 年后",
        goal: "成长为公有云高级运维 / 云架构实施 / 政企数通工程师,薪资稳定 12~18k。",
        topics: [
            "岗位方向:公有云高级运维 / 云架构实施 / 政企数通工程师",
            "能独立交付中小企业上云方案与高可用架构",
            "具备成本优化、容灾、安全等保落地能力",
            "持续沉淀项目案例与运维脚本,形成个人技术品牌",
        ],
    },
];

// ===== 数据:面试题库 =====
const interviewData = {
    Linux基础: [
        { q: "Linux 中软链接和硬链接的区别?", a: "硬链接:与原文件共用同一个 inode,删除原文件不影响硬链接,不能跨文件系统、不能链接目录。\n软链接(符号链接):类似 Windows 快捷方式,有自己的 inode,存储的是原文件路径,原文件删除后软链接失效;可跨文件系统、可链接目录。" },
        { q: "如何查看系统资源占用?常用命令有哪些?", a: "top / htop:实时进程与资源占用\ndf -h:磁盘使用情况\nfree -h:内存使用\nnetstat / ss:网络连接与端口\niostat:磁盘 IO\nvmstat:系统整体负载" },
        { q: "说一下 Linux 的文件权限 rwx?", a: "每 个文件有 9 位权限,分属 文件主、同组用户、其他用户,每组 rwx 分别表示读(4)、写(2)、执行(1)。\n用 chmod 修改,如 chmod 755 file 表示主 rwx、组 rx、其他 rx。chown 修改属主属组。" },
        { q: "如何排查服务器 CPU 占用过高?", a: "1. top 找到占用高的进程 PID\n2. top -Hp PID 查看该进程的线程占用\n3. printf \"%x\\n\" 线程ID 转为十六进制\n4. jstack(Java)或 strace/pstack 分析线程堆栈\n5. 结合日志定位业务代码" },
    ],
    Docker: [
        { q: "Docker 镜像是如何分层的?UnionFS 原理?", a: "Docker 镜像采用联合文件系统(UnionFS)分层存储,每条 Dockerfile 指令生成一层,层之间共享复用以节省空间。\n容器启动时在镜像顶部加一个可写层,文件修改用 Copy-on-Write 机制,只有变动才复制到可写层。" },
        { q: "Dockerfile 中 CMD 和 ENTRYPOINT 的区别?", a: "CMD:容器默认启动命令,可被 docker run 后的参数覆盖,一个 Dockerfile 只有一个生效(最后一个)。\nENTRYPOINT:容器入口程序,docker run 后的参数会作为它的参数,不易覆盖。\n最佳实践:ENTRYPOINT 指定程序 + CMD 提供默认参数,灵活组合。" },
        { q: "如何减小 Docker 镜像体积?", a: "1. 使用多阶段构建,只拷贝最终产物\n2. 选择 alpine 等精简基础镜像\n3. 合并 RUN 指令,减少层数\n4. 清理缓存:rm -rf /var/cache/*\n5. 使用 .dockerignore 排除无关文件\n6. 仅安装必要依赖" },
        { q: "Docker 网络模式有哪些?", a: "bridge(默认):docker0 网桥,容器通过 NAT 访问外部\nhost:容器直接使用宿主机网络栈,无隔离\nnone:无网络\ncontainer:与某容器共享网络命名空间\n自定义网络:支持容器间 DNS 解析,生产推荐" },
    ],
    Kubernetes: [
        { q: "简述 K8s 的核心架构组件?", a: "控制平面:etcd(存储)、kube-apiserver(API 入口)、kube-scheduler(调度)、kube-controller-manager(控制器)\n工作节点:kubelet(节点代理)、kube-proxy(网络代理)、容器运行时(containerd)\nPod 是最小调度单元,Service 提供稳定访问入口。" },
        { q: "Pod 的生命周期和状态有哪些?", a: "Pending:已创建但未调度或拉取镜像中\nRunning:已调度且容器运行\nSucceeded:容器正常退出\nFailed:容器异常退出\nUnknown:无法通信\n重启策略:Always(默认)、OnFailure、Never。" },
        { q: "Service 的类型有哪些?区别?", a: "ClusterIP(默认):集群内部访问\nNodePort:在每个节点开放端口,外部可访问\nLoadBalancer:云厂商提供负载均衡器\nExternalName:DNS CNAME 指向外部服务\nIngress:七层路由,配合 NodePort/LoadBalancer 使用" },
        { q: "Deployment 滚动更新原理?如何回滚?", a: "滚动更新逐步创建新 ReplicaSet 的 Pod 并删除旧 Pod,通过 maxSurge/maxUnavailable 控制速率,保证可用性。\n回滚:kubectl rollout undo deployment/xxx --to-revision=N\n查看历史:kubectl rollout history" },
        { q: "如何保证 Pod 高可用?", a: "1. Deployment 设置多副本\n2. Pod 反亲和性打散到不同节点\n3. PDB(PodDisruptionBudget)防止驱逐过多\n4. 健康检查 livenessProbe/readinessProbe\n5. 资源 requests/limits 避免节点过载\n6. 跨可用区调度" },
    ],
    云平台: [
        { q: "云服务器 ECS 和自建服务器相比有什么优势?", a: "弹性伸缩:按需扩缩容,应对流量峰值\n免运维硬件:无需采购维护硬件\n按量付费:降低初期成本\n高可用:多可用区容灾、快照备份\n丰富的托管服务:RDS、OSS、SLB 等开箱即用" },
        { q: "VPC、子网、安全组的作用?", a: "VPC(虚拟私有云):逻辑隔离的私有网络,自定义 IP 段\n子网:VPC 内的网段,划分可用区\n安全组:虚拟防火墙,控制实例出入站规则\n典型架构:VPC 划分公有子网(放 SLB)和私有子网(放 ECS/RDS)保障安全" },
        { q: "如何设计高可用的云上架构?", a: "1. 多可用区部署,单 AZ 故障不影响服务\n2. SLB 负载均衡分流,健康检查剔除异常节点\n3. ECS 弹性伸缩组应对流量\n4. RDS 主从+只读实例,自动故障切换\n5. OSS 多副本存储,CDN 加速\n6. 监控告警 + 定期容灾演练" },
    ],
    "CI/CD与DevOps": [
        { q: "什么是 CI/CD?有什么好处?", a: "CI(持续集成):代码提交后自动构建、测试,尽早发现问题\nCD(持续交付/部署):自动部署到测试/生产环境\n好处:快速迭代、减少人工错误、降低发布风险、提升交付效率、代码质量可追溯" },
        { q: "Git 分支策略有哪些?推荐哪种?", a: "Git Flow:master/develop/feature/release/hotfix 分支,流程重\nGitHub Flow:main + feature 分支,简单\nGitLab Flow:环境分支,折中\n小团队推荐 GitHub Flow:从 main 拉分支开发,PR 合并即部署" },
        { q: "Ansible 的工作原理?和 Chef/Puppet 区别?", a: "Ansible:无 Agent,基于 SSH 推送,用 YAML(playbook)描述任务,幂等执行。\nChef/Puppet:需在节点装 Agent,服务端拉取模式,依赖 Ruby/DSL。\nAnsible 上手快、无侵入,适合运维批量管理;Chef/Puppet 更适合大规模持续配置。" },
    ],
};

// ===== 渲染学习路线图 =====
function renderRoadmap() {
    const container = document.getElementById("roadmapTimeline");
    container.innerHTML = getRoadmap()
        .map(
            (stage) => `
        <div class="roadmap-stage" data-stage="${stage.title}">
            <div class="roadmap-stage-head">
                <span class="roadmap-stage-title"><span class="stage-icon">${stage.icon}</span>${stage.title}</span>
                <span class="roadmap-stage-duration">${stage.duration}</span>
            </div>
            <p class="roadmap-stage-goal">${stage.goal}</p>
            <div class="roadmap-stage-detail">
                <ul>
                    ${stage.topics.map((t) => `<li>${t}</li>`).join("")}
                </ul>
            </div>
        </div>
    `,
        )
        .join("");

    // 点击展开/收起
    container.querySelectorAll(".roadmap-stage").forEach((stage) => {
        stage.addEventListener("click", () => stage.classList.toggle("expanded"));
    });
}

// ===== 渲染面试题库 =====
let currentInterviewTab = null;

function renderInterviewTabs() {
    const tabs = Object.keys(interviewData);
    currentInterviewTab = currentInterviewTab || tabs[0];
    const container = document.getElementById("interviewTabs");
    container.innerHTML = tabs
        .map(
            (tab) =>
                `<button class="interview-tab ${tab === currentInterviewTab ? "active" : ""}" data-tab="${tab}">${tab}</button>`,
        )
        .join("");
    container.querySelectorAll(".interview-tab").forEach((btn) => {
        btn.addEventListener("click", () => {
            currentInterviewTab = btn.dataset.tab;
            renderInterviewTabs();
            renderInterviewList();
        });
    });
}

function renderInterviewList() {
    const list = getInterview()[currentInterviewTab] || [];
    const container = document.getElementById("interviewList");
    container.innerHTML = list
        .map(
            (item, idx) => `
        <div class="interview-item" data-idx="${idx}">
            <div class="interview-question">
                <span>${item.q}</span>
                <span class="q-icon">▶</span>
            </div>
            <div class="interview-answer">${item.a}</div>
        </div>
    `,
        )
        .join("");

    container.querySelectorAll(".interview-item").forEach((item) => {
        item.querySelector(".interview-question").addEventListener("click", () => {
            item.classList.toggle("expanded");
        });
    });
}

// ===== 暗黑模式 =====
function initTheme() {
    const toggle = document.getElementById("themeToggle");
    const saved = localStorage.getItem("cloud_workstation_theme");
    if (saved === "dark") {
        document.body.classList.add("dark");
        toggle.textContent = "☀️";
    }
    toggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark");
        toggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("cloud_workstation_theme", isDark ? "dark" : "light");
    });
}

// ===== 返回顶部 =====
function initBackToTop() {
    const btn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ===== 高级 UI 交互:滚动入场 + 导航栏滚动 + 数字滚动 =====
function initAdvancedUI() {
    // 导航栏滚动效果
    const navbar = document.querySelector(".navbar");
    window.addEventListener(
        "scroll",
        () => {
            if (window.scrollY > 20) navbar.classList.add("scrolled");
            else navbar.classList.remove("scrolled");
        },
        { passive: true },
    );

    // 滚动入场动画
    const revealSelectors =
        ".skill-category, .project-card, .about-card, .resource-item, .roadmap-stage, .interview-item, .section-title, .section-desc";
    const revealEls = document.querySelectorAll(revealSelectors);
    revealEls.forEach((el) => el.classList.add("reveal"));

    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = (i % 6) * 0.07 + "s";
                        entry.target.classList.add("visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("visible"));
    }

    // 数字滚动动画(首次加载)
    document.querySelectorAll(".stat-num").forEach((el) => {
        const text = el.textContent.trim();
        const num = parseInt(text, 10);
        if (isNaN(num)) return;
        const suffix = text.replace(/[\d.-]/g, "");
        const duration = 1200;
        const start = performance.now();
        function frame(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(num * eased) + suffix;
            if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    });
}

// ===== 触摸设备交互适配 =====
function initTouchFeedback() {
    // 检测是否为触摸设备
    const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;

    if (!isTouchDevice) return;

    document.body.classList.add("touch-device");

    // 所有需要触摸反馈的元素选择器
    const touchSelectors = [
        ".skill-category",
        ".project-card",
        ".about-card",
        ".resource-item",
        ".roadmap-stage",
        ".interview-item",
        ".skill-item",
        ".btn-primary",
        ".btn-secondary",
        ".resource-tab",
        ".interview-tab",
        ".stat",
        ".theme-toggle",
        ".back-to-top",
    ];

    const touchEls = document.querySelectorAll(touchSelectors.join(", "));

    touchEls.forEach((el) => {
        // touchstart: 按下时添加发光
        el.addEventListener(
            "touchstart",
            () => {
                el.classList.add("touch-active");
            },
            { passive: true },
        );

        // touchend/touchcancel: 松开时移除发光
        const removeActive = () => {
            el.classList.remove("touch-active");
        };
        el.addEventListener("touchend", removeActive, { passive: true });
        el.addEventListener("touchcancel", removeActive, { passive: true });

        // touchmove: 滑动时也移除(避免滚动时一直发光)
        el.addEventListener(
            "touchmove",
            () => {
                el.classList.remove("touch-active");
            },
            { passive: true },
        );
    });
}

// ===== 自定义背景设置(支持图片/动图/视频,IndexedDB 持久化) =====
const BG_STORAGE_KEY = "cloud_workstation_bg";
const bgPresets = [
    { id: "none", label: "默认", value: "" },
    { id: "blue", label: "海蓝", value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { id: "sunset", label: "日落", value: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { id: "ocean", label: "深海", value: "linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)" },
    { id: "forest", label: "森林", value: "linear-gradient(135deg, #134E5E 0%, #71B280 100%)" },
    { id: "night", label: "夜空", value: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" },
    { id: "purple", label: "梦幻", value: "linear-gradient(135deg, #DA22FF 0%, #9733EE 100%)" },
];

// --- IndexedDB 存储(图片/视频体积大,localStorage 装不下) ---
const DB_NAME = "cloud_workstation_db";
const DB_STORE = "bg_media";
function openDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(DB_STORE);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
async function idbPut(key, blob) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(DB_STORE, "readwrite");
        tx.objectStore(DB_STORE).put(blob, key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}
async function idbGet(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(DB_STORE, "readonly");
        const req = tx.objectStore(DB_STORE).get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
async function idbDelete(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(DB_STORE, "readwrite");
        tx.objectStore(DB_STORE).delete(key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

function loadBgSettings() {
    try {
        const s = JSON.parse(localStorage.getItem(BG_STORAGE_KEY)) || {};
        // 兼容旧版(图片 base64 存 localStorage),新版用 IndexedDB,旧数据作废
        if (s.type === "image") s.type = "none";
        return s;
    } catch (e) {
        return {};
    }
}

function saveBgSettings(s) {
    try {
        localStorage.setItem(BG_STORAGE_KEY, JSON.stringify(s));
    } catch (e) {
        alert("背景设置保存失败。");
    }
}

let bgSettings = loadBgSettings();
let currentObjectURL = null;

// 应用背景媒体(异步,从 IndexedDB 取 blob)
async function applyBackgroundMedia() {
    const layer = document.getElementById("bgLayer");
    const video = document.getElementById("bgVideo");
    const type = bgSettings.type || "none";

    // 清理旧资源
    if (currentObjectURL) {
        URL.revokeObjectURL(currentObjectURL);
        currentObjectURL = null;
    }
    video.pause();
    video.removeAttribute("src");
    video.load();
    layer.classList.remove("video-mode");
    layer.style.backgroundImage = "";

    if (type === "none") {
        document.body.classList.remove("has-custom-bg");
        return;
    }
    document.body.classList.add("has-custom-bg");

    if (type === "preset") {
        layer.style.backgroundImage = bgSettings.value || "";
        return;
    }

    if (type === "media") {
        try {
            const blob = await idbGet("current");
            if (!blob) return;
            currentObjectURL = URL.createObjectURL(blob);
            if (bgSettings.mediaType === "video") {
                video.src = currentObjectURL;
                video.playbackRate = parseFloat(bgSettings.frameRate || "1");
                layer.classList.add("video-mode");
                video.play().catch(() => {});
            } else {
                layer.style.backgroundImage = `url("${currentObjectURL}")`;
            }
        } catch (e) {
            console.error("背景加载失败", e);
        }
    }
}

function applyOpacity() {
    const layer = document.getElementById("bgLayer");
    const type = bgSettings.type || "none";
    layer.style.opacity = type === "none" ? 0 : (bgSettings.opacity != null ? bgSettings.opacity : 30) / 100;
}

function applyFrameRate() {
    const video = document.getElementById("bgVideo");
    video.playbackRate = parseFloat(bgSettings.frameRate || "1");
}

// 静态图片压缩为 blob(GIF 不压缩以保留动画)
function compressImageToBlob(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement("canvas");
                const maxDim = 1600;
                let width = img.width;
                let height = img.height;
                if (width > height && width > maxDim) {
                    height = Math.round((height * maxDim) / width);
                    width = maxDim;
                } else if (height > maxDim) {
                    width = Math.round((width * maxDim) / height);
                    height = maxDim;
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext("2d").drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => resolve(blob || file), "image/jpeg", 0.8);
            };
            img.onerror = () => resolve(file);
            img.src = e.target.result;
        };
        reader.onerror = () => resolve(file);
        reader.readAsDataURL(file);
    });
}

function renderPresets() {
    const container = document.getElementById("bgPresets");
    const currentType = bgSettings.type || "none";
    const currentValue = bgSettings.value || "";
    container.innerHTML = bgPresets
        .map((p) => {
            const isActive =
                (p.id === "none" && currentType === "none") ||
                (currentType === "preset" && p.value === currentValue);
            const style = p.value ? `background:${p.value};` : "background:var(--bg-alt);";
            return `<div class="bg-preset ${isActive ? "active" : ""}" data-id="${p.id}" style="${style}"><span class="preset-label">${p.label}</span></div>`;
        })
        .join("");
    container.querySelectorAll(".bg-preset").forEach((el) => {
        el.addEventListener("click", async () => {
            const preset = bgPresets.find((p) => p.id === el.dataset.id);
            if (preset.id === "none") {
                bgSettings.type = "none";
                bgSettings.value = "";
            } else {
                bgSettings.type = "preset";
                bgSettings.value = preset.value;
            }
            saveBgSettings(bgSettings);
            await applyBackgroundMedia();
            applyOpacity();
            renderPresets();
        });
    });
}

function initBackgroundSettings() {
    const modal = document.getElementById("settingsModal");
    const toggle = document.getElementById("settingsToggle");
    const closeBtn = document.getElementById("settingsClose");
    const fileInput = document.getElementById("bgFileInput");
    const uploadBtn = document.getElementById("bgUploadBtn");
    const resetBtn = document.getElementById("bgResetBtn");
    const opacitySlider = document.getElementById("bgOpacity");
    const opacityValue = document.getElementById("bgOpacityValue");
    const frameRateSelect = document.getElementById("bgFrameRate");

    toggle.addEventListener("click", () => {
        opacitySlider.value = bgSettings.opacity != null ? bgSettings.opacity : 30;
        opacityValue.textContent = opacitySlider.value + "%";
        frameRateSelect.value = bgSettings.frameRate || "1";
        renderPresets();
        modal.classList.add("active");
    });
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target.id === "settingsModal") modal.classList.remove("active");
    });

    uploadBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const isImage = file.type.startsWith("image/");
        const isVideo = file.type.startsWith("video/");
        if (!isImage && !isVideo) {
            alert("请选择图片(含 GIF 动图)或视频文件");
            fileInput.value = "";
            return;
        }
        if (isVideo && file.size > 50 * 1024 * 1024) {
            if (!confirm("视频较大(>50MB),可能影响页面性能,是否继续?")) {
                fileInput.value = "";
                return;
            }
        }
        try {
            // GIF 与视频原样存储,静态图片压缩
            let blob = file;
            if (isImage && file.type !== "image/gif") {
                blob = await compressImageToBlob(file);
            }
            await idbPut("current", blob);
            bgSettings.type = "media";
            bgSettings.mediaType = isVideo ? "video" : "image";
            if (bgSettings.frameRate == null) bgSettings.frameRate = "1";
            saveBgSettings(bgSettings);
            await applyBackgroundMedia();
            applyOpacity();
            renderPresets();
        } catch (err) {
            alert("背景保存失败,可能是文件过大超出浏览器存储上限。");
        }
        fileInput.value = "";
    });

    resetBtn.addEventListener("click", async () => {
        await idbDelete("current");
        bgSettings = { type: "none", value: "", opacity: 30, frameRate: "1", mediaType: "image" };
        saveBgSettings(bgSettings);
        await applyBackgroundMedia();
        applyOpacity();
        renderPresets();
        opacitySlider.value = 30;
        opacityValue.textContent = "30%";
        frameRateSelect.value = "1";
    });

    opacitySlider.addEventListener("input", (e) => {
        opacityValue.textContent = e.target.value + "%";
        bgSettings.opacity = parseInt(e.target.value, 10);
        saveBgSettings(bgSettings);
        applyOpacity();
    });

    frameRateSelect.addEventListener("change", (e) => {
        bgSettings.frameRate = e.target.value;
        saveBgSettings(bgSettings);
        applyFrameRate();
    });
}

// ===== 外观设置(玻璃态 + 字体 + 主题色) =====
const APPEARANCE_STORAGE_KEY = "cloud_workstation_appearance";

function loadAppearance() {
    try {
        return JSON.parse(localStorage.getItem(APPEARANCE_STORAGE_KEY)) || {};
    } catch (e) {
        return {};
    }
}

function saveAppearance(a) {
    try {
        localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(a));
    } catch (e) {}
}

let appearance = loadAppearance();

function applyAppearance() {
    const root = document.documentElement;
    if (appearance.glassBgAlpha != null) {
        root.style.setProperty("--glass-bg-alpha", appearance.glassBgAlpha / 100);
    }
    if (appearance.heroBgAlpha != null) {
        root.style.setProperty("--hero-bg-alpha", appearance.heroBgAlpha / 100);
    }
    if (appearance.glassBlur != null) {
        root.style.setProperty("--glass-blur", appearance.glassBlur + "px");
    }
    if (appearance.glassBorderColor) {
        root.style.setProperty("--glass-border-color", appearance.glassBorderColor);
    }
    if (appearance.glassBorderAlpha != null) {
        root.style.setProperty("--glass-border-alpha", appearance.glassBorderAlpha / 100);
    }
    if (appearance.fontSize != null) {
        root.style.setProperty("--base-font-size", appearance.fontSize + "px");
    }
    if (appearance.fontFamily) {
        root.style.setProperty("--font-family", appearance.fontFamily);
    }
    if (appearance.textColor) {
        root.style.setProperty("--custom-text-color", appearance.textColor);
    }
    if (appearance.accentColor) {
        root.style.setProperty("--primary", appearance.accentColor);
    }
}

function initAppearanceSettings() {
    const tabs = document.querySelectorAll(".settings-tab");
    const panes = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;
            tabs.forEach((t) => t.classList.remove("active"));
            panes.forEach((p) => p.classList.remove("active"));
            tab.classList.add("active");
            document.getElementById("tab-" + target).classList.add("active");
        });
    });

    // 初始化控件值
    document.getElementById("uiOpacity").value = appearance.glassBgAlpha ?? 85;
    document.getElementById("uiOpacityValue").textContent = (appearance.glassBgAlpha ?? 85) + "%";
    document.getElementById("heroOpacity").value = appearance.heroBgAlpha ?? 85;
    document.getElementById("heroOpacityValue").textContent = (appearance.heroBgAlpha ?? 85) + "%";
    document.getElementById("uiBlur").value = appearance.glassBlur ?? 10;
    document.getElementById("uiBlurValue").textContent = (appearance.glassBlur ?? 10) + "px";
    document.getElementById("uiBorderColor").value = appearance.glassBorderColor ?? "#ffffff";
    document.getElementById("uiBorderOpacity").value = appearance.glassBorderAlpha ?? 30;
    document.getElementById("uiBorderOpacityValue").textContent = (appearance.glassBorderAlpha ?? 30) + "%";
    document.getElementById("fontSize").value = appearance.fontSize ?? 15;
    document.getElementById("fontSizeValue").textContent = (appearance.fontSize ?? 15) + "px";
    document.getElementById("fontFamily").value = appearance.fontFamily ?? "system";
    document.getElementById("textColor").value = appearance.textColor ?? "#1e293b";
    document.getElementById("textColorValue").textContent = appearance.textColor ?? "#1e293b";
    document.getElementById("accentColor").value = appearance.accentColor ?? "#2563eb";
    document.getElementById("accentColorValue").textContent = appearance.accentColor ?? "#2563eb";

    // 绑定事件
    document.getElementById("uiOpacity").addEventListener("input", (e) => {
        appearance.glassBgAlpha = parseInt(e.target.value, 10);
        document.getElementById("uiOpacityValue").textContent = e.target.value + "%";
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("heroOpacity").addEventListener("input", (e) => {
        appearance.heroBgAlpha = parseInt(e.target.value, 10);
        document.getElementById("heroOpacityValue").textContent = e.target.value + "%";
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("uiBlur").addEventListener("input", (e) => {
        appearance.glassBlur = parseInt(e.target.value, 10);
        document.getElementById("uiBlurValue").textContent = e.target.value + "px";
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("uiBorderColor").addEventListener("input", (e) => {
        appearance.glassBorderColor = e.target.value;
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("uiBorderOpacity").addEventListener("input", (e) => {
        appearance.glassBorderAlpha = parseInt(e.target.value, 10);
        document.getElementById("uiBorderOpacityValue").textContent = e.target.value + "%";
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("fontSize").addEventListener("input", (e) => {
        appearance.fontSize = parseInt(e.target.value, 10);
        document.getElementById("fontSizeValue").textContent = e.target.value + "px";
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("fontFamily").addEventListener("change", (e) => {
        appearance.fontFamily = e.target.value;
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("textColor").addEventListener("input", (e) => {
        appearance.textColor = e.target.value;
        document.getElementById("textColorValue").textContent = e.target.value;
        saveAppearance(appearance);
        applyAppearance();
    });

    document.getElementById("accentColor").addEventListener("input", (e) => {
        appearance.accentColor = e.target.value;
        document.getElementById("accentColorValue").textContent = e.target.value;
        saveAppearance(appearance);
        applyAppearance();
    });
}

// ===== 初始化 =====
document.addEventListener("DOMContentLoaded", () => {
    // 数据迁移(确保版本兼容)
    migrateData();

    renderSkills();
    renderRoadmap();
    renderProjects();
    renderResourceTabs();
    renderResourceList();
    renderInterviewTabs();
    renderInterviewList();
    renderAbout();
    updateStats();
    initMenu();
    initModal();
    initTheme();
    initBackToTop();
    initAdvancedUI();
    initTouchFeedback();
    initEditMode();
    applyBackgroundMedia();
    applyOpacity();
    initBackgroundSettings();
    initAppearanceSettings();
    initDataBackup();
    applyAppearance();
});

// ===== 数据备份 UI 绑定 =====
function initDataBackup() {
    const exportBtn = document.getElementById("exportData");
    const importBtn = document.getElementById("importData");
    if (exportBtn) exportBtn.addEventListener("click", downloadBackup);
    if (importBtn) importBtn.addEventListener("click", restoreBackup);
}
