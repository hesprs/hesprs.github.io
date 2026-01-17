---
title: Pointeract
description: 一个前端库，用于解析用户交互并派发平移缩放事件，是 Hammer.js 的轻量级且可扩展的替代方案。
---

<script setup>
import ProjectCard from '$/components/projectCard.vue';
import { IconBrandGithub, IconBrandNpm, IconHome }  from '@tabler/icons-vue';
import { useData } from 'vitepress';
const { page } = useData();
const meta = {
    name: page.value.title,
    description: page.value.description,
    logo: 'https://pointeract.consensia.cc/logo.svg  ',
    links: [
        {
            name: '主页',
            url: 'https://www.npmjs.com/package/pointeract  ',
            icon: IconHome,
            color: '#425aef'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/hesprs/pointeract  ',
            icon: IconBrandGithub,
            color: '#010409'
        },
        {
            name: 'npm',
            url: 'https://www.npmjs.com/package/pointeract  ',
            icon: IconBrandNpm,
            color: '#EA2039'
        },
    ]
}
</script>

<ProjectCard :meta />

## 简介

Pointeract 是一个专注于处理 DOM 元素用户交互的小型工具库，可作为 [Hammer.js](https://hammerjs.github.io) 等库的替代品。你只需绑定 DOM 元素并加载一些模块，它便会开始监控用户交互，并派发如 `trueClick` 和 `pan` 这样的事件及其数据。

它采用可扩展的架构构建，核心包体积仅 **1KB**（压缩后），功能则来自同样小巧的模块。它完全支持 **摇树优化（tree-shaking）**，使用的模块越少，最终打包体积就越小。

主页与文档：[pointeract.consensia.cc](https://pointeract.consensia.cc)。

## 优势

- **🐣 超小体积**：核心仅 **1KB**（压缩后），常规使用约 **1-2KB**。
- **💪 强大稳健**：在复杂手势处理上表现出色，而大多数交互库在此类场景下会失败，[原因何在？](https://pointeract.consensia.cc/development/testing#chaotic-testing)
- **🧩 高度可扩展**：可通过模块 API 轻松扩展 Pointeract 功能。
- **🔌 运行时灵活**：配置项可响应式更新，可在运行时随时停止或启动任意模块。
- **🛡️ 安全可靠**：不直接修改 DOM（`PreventDefault` 模块除外），细致的清理机制可防止内存泄漏。

## Pointeract 如何脱颖而出？

市面上已有许多交互库，其中最著名的当属 `Interact.js` 和 `Hammer.js`，但 Pointeract 截然不同。

| 判定标准                                                                                     |                      Pointeract                       |     [Hammer.js](https://hammerjs.github.io)      |        [Interact.js](https://interactjs.io)         |
| :------------------------------------------------------------------------------------------- | :---------------------------------------------------: | :----------------------------------------------: | :-------------------------------------------------: |
| 使用 TypeScript 编写？                                                                       |                          ✅                           |                        ❌                        |                         ✅                          |
| 支持摇树优化？                                                                               |   [✅](https://bundlephobia.com/package/pointeract)   | [❌](https://bundlephobia.com/package/hammerjs)  |  [❌](https://bundlephobia.com/package/interactjs)  |
| 包体积（压缩后）                                                                             | 👑 [2KB](https://bundlephobia.com/package/pointeract) | [7KB](https://bundlephobia.com/package/hammerjs) | [28KB](https://bundlephobia.com/package/interactjs) |
| 最近更新时间                                                                                 |                     👑 持续维护中                     |                     2015 年                      |                       2023 年                       |
| 功能范围                                                                                     |                    指针及滚轮相关                     |                     指针相关                     |         👑 指针及滚轮相关 + 全面的实用工具          |
| 稳健性？（参见 [测试](https://pointeract.consensia.cc/development/testing#chaotic-testing)） |                          ✅                           |                   ❌ 元素抖动                    |                  ❌ 忽略第二次触摸                  |
| 可扩展性？                                                                                   |                          ✅                           |                        ❌                        |                         ❌                          |

## 许可证

Pointeract 采用 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html) 授权。
