---
layout: project
title: Pointeract
description: Pointeract 是一个前端库，用于解析用户交互并派发平移缩放事件，是 Hammer.js 的轻量级且可扩展的替代方案。
logo: https://pointeract.consensia.cc/logo.svg
---

<script setup>
import { IconBrandGithub, IconBrandNpm, IconVocabulary }  from '@tabler/icons-vue';
import { useLinks } from '$/composables/links';
useLinks([
    {
        name: '文档',
        url: 'https://www.npmjs.com/package/pointeract  ',
        icon: IconVocabulary,
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
]);
</script>

## 简介

Pointeract 是一个轻量级的 JavaScript/TypeScript 工具库，专注于一件事——处理 DOM 元素的用户交互，例如多点触控和触控板操作。

借助 TypeScript 独特而灵活的类型系统及其动态特性，Pointeract 实现了高度**模块化、可扩展且高效**的架构。其核心包体积仅 **1KB**（压缩后），功能则由同样小巧的模块提供。它完全支持 **摇树优化（tree-shaking）**，使用的模块越少，最终打包体积就越小。

主页与文档：[pointeract.consensia.cc](https://pointeract.consensia.cc)。

## 支持的功能

- **点击**（双击、三击、四击、任意次数点击）
- **拖拽**
- **滑动（全方向，单指/多指）**
- **滚轮与触摸板支持的平移与缩放**（支持 `Ctrl`/`Shift` 键绑定）
- **多指触控支持的平移与缩放**（平移、捏合）
- **一键式默认行为阻止**
- **全交互平滑处理**（包括拖拽、平移、缩放及任何涉及数值变化的交互）

这些交互功能均以模块化形式提供，可灵活组合，从简单的拖放操作到复杂的画布应用皆能胜任。

若缺少您所需的功能？[请编写您的自定义模块](https://pointeract.consensia.cc/development/custom-modules)！

## 优势

- **🐣 超小体积**：核心仅 **1KB**（压缩后），常规使用约 **1-2KB**。
- **💪 强大稳健**：在复杂手势处理上表现出色，而大多数交互库在此类场景下会失败，[原因何在？](https://pointeract.consensia.cc/development/testing#monkey-test)
- **🧩 高度可扩展**：可通过模块 API 轻松扩展 Pointeract 功能。
- **🔌 运行时灵活**：配置项可响应式更新，可在运行时随时停止或启动任意模块。
- **🛡️ 安全可靠**：不直接修改 DOM（`PreventDefault` 模块除外），细致的清理机制可防止内存泄漏。

## Pointeract 如何脱颖而出？

市面上已有众多交互库，其中最著名的包括 `d3-drag` + `d3-zoom`、`Interact.js` 和 `Hammer.js`，但 Pointeract 却与众不同。

| 标准                                                                                          |                       Pointeract                        |                         D3 Drag + D3 Zoom                         |                    Hammer.js                    |                     Interact.js                      |
| :-------------------------------------------------------------------------------------------- | :-----------------------------------------------------: | :---------------------------------------------------------------: | :---------------------------------------------: | :--------------------------------------------------: |
| **使用 TypeScript 编写？**                                                                    |                           ✅                            |                                ❌                                 |                       ❌                        |                          ✅                          |
| **支持摇树优化 (Tree-shakeable)？**                                                           |                           ✅                            |                                ❌                                 |                       ❌                        |                          ❌                          |
| **总包大小 (压缩后)**                                                                         | 👑 [2.7KB](https://bundlejs.com/?q=pointeract%40latest) | [17KB](https://bundlejs.com/?q=d3-drag%403.0.0%2Cd3-zoom%403.0.0) | [7KB](https://bundlejs.com/?q=hammerjs%402.0.8) | [28KB](https://bundlejs.com/?q=interactjs%401.10.27) |
| **最后更新时间**                                                                              |                      👑 活跃维护中                      |                               2021                                |                      2015                       |                         2023                         |
| **多功能性**                                                                                  |                指针与滚轮操作 + 部分工具                |                   👑 指针与滚轮操作 + 生态系统                    |                  仅限指针相关                   |                指针相关 + 全面工具集                 |
| **支持的设备**                                                                                |               👑 鼠标、滚轮、触控、触摸板               |                          ⚠️ 不支持触摸板                          |            ⚠️ 不支持触摸板或鼠标滚轮            |              ⚠️ 不支持触摸板或鼠标滚轮               |
| **稳健性 (通过 [猴子测试](https://pointeract.consensia.cc/development/testing#monkey-test))** |                           ✅                            |                                ✅                                 |                   ❌ 元素抖动                   |                  ❌ 忽略第二次触摸                   |
| **可扩展性？**                                                                                |                           ✅                            |                                ❌                                 |                       ❌                        |                          ❌                          |

## 许可证

Pointeract 采用 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html) 授权。
