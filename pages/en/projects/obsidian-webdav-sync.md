---
layout: project
title: Obsidian WebDAV Sync
titleTemplate: WebDAV Syncing Plugin for Obsidian
description: WebDAV Sync is a plugin for Obsidian that syncs your vault with a WebDAV server. It excels existing solutions at reliable bidirectional syncing, better performance and the freedom from vendor lock-in.
logo: https://github.com/hesprs/obsidian-webdav-sync/raw/main/assets/logo.svg
links:
  - name: GitHub Repository
    url: https://github.com/hesprs/obsidian-webdav-sync
    color: '#010409'
head:
  - - meta
    - name: keywords
      content: Obsidian, Obsidian plugin, Obsidian WebDAV Sync, Obsidian WebDAV, WebDAV synchronization, cross-device sync
---

<script lang="ts" setup>
import { IconBrandGithub } from '@tabler/icons-vue';
import useLinkIcons from '$/composables/link-icons';
import canvas from '$/assets/encryption.canvas';
import Viewer from '$/components/CanvasViewer.vue';
useLinkIcons({ 'GitHub Repository': IconBrandGithub });
</script>

## Introduction

Obsidian WebDAV Sync is a general-purpose & bidirectional WebDAV syncing plugin for Obsidian. It is created due to the current landscape that no single plugin can reliably and conveniently sync your vault with a WebDAV server. It excels existing solutions at reliable bidirectional syncing, better performance and the freedom from vendor lock-in:

🔄 **Reliable Bidirectional Syncing**:

- This plugin syncs your vault with a WebDAV storage.
- It does three-way comparison: remote state, local state, and recorded local & remote states of last sync
- Then it follows a decision matrix for maximum precision and data integrity, detail see [below](#technical-breakdown).

🔀 **Auto Sync and Conflict Handling**:

- The plugin supports automatically triggered sync as follows:
  - **Startup sync**: trigger a sync when Obsidian starts.
  - **Scheduled sync**: trigger syncs periodically.
  - **Real-time sync**: trigger syncs immediately when a change is detected.
- The plugin supports conflict handling methods:
  - Smart merge
  - Latest survive
  - Use remote
  - Use local
  - Skip

🔐 Client-side Encryption:

- This plugin supports encrypting your files before uploading.
- It prevents unauthorized file access, and detects unintended file modification and movement at remote side.
- The encryption pipeline assumes stricter threat model, and achieves **theoretically higher security, faster performance and smaller plugin size** than similar solutions (like Remotely Save), see detail in the [encryption specification](https://github.com/hesprs/obsidian-webdav-sync/blob/main/docs/encryption.md).

⚡ **Maximum Performance**:

- Most sync operations are performed via parallelized network requests.
- Real-time sync uses cached remote states by default, allowing it to complete syncing within seconds.
- **10 times** smaller size than Remotely Save, **8 times** faster startup loading time.

🧰 **Detailed Config**:

- The plugin allows users to adjust various parameters to adapt for various services:
  - **Max concurrent WebDAV requests**: deal with service rate limiting.
  - **Min time between WebDAV requests**: deal with service rate limiting.
  - **Skip large files**: handle low storage space.
  - **Max concurrent sync tasks**: control CPU and disk usage.
  - **Max concurrent throughput**: control memory usage and prevent crashes.

📦 **Production-Level Scalability**:

- Handles vaults with more than 3000 files smoothly.
- Load balancing and download chunking allows the plugin to handle gigabytes at once.
- Large file downloading is resumable.

🎨 **Excellent UI and Observability**:

- Four ways (modals, status bar, notices, logs) to keep you aware of the syncing progress.
- File changes are rendered as a file tree to allow granular selective syncing.
- Log utility outputs human-readable markdown documents.

## Another Syncing Plugin?

As an Obsidian user working across multiple devices, I've personally encountered the sync dilemma: finding a solution that's reliable, flexible, and doesn't compromise data integrity. After trying nearly every syncing plugin in the community, I found that each came with trade-offs that frustrated my daily workflow:

- **Remotely Save** offers comprehensive features but suffers from maintenance issues and bugs—deleted files mysteriously reappearing (which is the **very** reason that drove me quit).
- **Syncthing Integration** provides excellent P2P syncing but requires all devices to be online simultaneously.
- **Live Sync** delivers robustness at the cost of complex server setup.
- **Git-based solutions** excels at version control but is not designed for seamless daily synchronization.

Then I discovered [Nutstore Sync](https://github.com/nutstore/obsidian-nutstore-sync) — an excellent plugin, but designed for Nutstore only. I thought: why not make this general-purpose? So I forked it, extensively overhauled it for no vendor lock-in, better performance, and improved stability. What came out was **Obsidian WebDAV Sync**.

## Technical Breakdown

### File Handling

To sync an Obsidian vault to a WebDAV server is a typical **distributed coordination** problem, where each client has their own copy and changes of the vault and there's no centralized resolver between. The goal is to synchronize the vaults between clients for maximum data integrity.

To address this, this plugin keeps a record of the last known sync state of local and remote files. During syncing evaluates **three states (current local, current remote, recorded local and remote in last sync)** for each file path and decides the sync action accordingly:

> ✅ = Exists, ❌ = Doesn't Exist, ✏️ = Changed Compared to Record

| Cases | Local File |        Remote File        | Sync Record | Action                                   |
| ----- | :--------: | :-----------------------: | :---------: | ---------------------------------------- |
| 1     |     ✅     |            ✅             |     ✅      | ⏭️ **Skip** (already synced)             |
| 2     |     ✏️     |            ✏️             |     ✅      | ⚠️ **Resolve Conflict** (apply strategy) |
| 3     |     ✅     |            ✏️             |     ✅      | ⬇️ **Pull** (download remote)            |
| 4     |     ✏️     |            ✅             |     ✅      | ⬆️ **Push** (upload local)               |
| 5     |     ✅     |            ❌             |     ✅      | 🗑️ **Delete Local** (cleanup)            |
| 6     |     ❌     |            ✅             |     ✅      | 🗑️ **Delete Remote** (cleanup)           |
| 7     |     ❌     |            ✏️             |     ✅      | ⬇️ **Pull** (restore from remote)        |
| 8     |     ✏️     |            ❌             |     ✅      | ⬆️ **Push** (restore to remote)          |
| 9     |     ✅     | ✅ (comparing with local) |     ❌      | 📝 **Record** (capture unrecorded file)  |
| 10    |     ✅     | ✏️ (compared with local)  |     ❌      | ⚠️ **Resolve Conflict** (first sync)     |
| 11    |     ❌     |            ✅             |     ❌      | ⬇️ **Pull** (new remote file)            |
| 12    |     ✅     |            ❌             |     ❌      | ⬆️ **Push** (new local file)             |
| 13    |     ❌     |            ❌             |     ✅      | 🧹 **Clean Record** (database cleanup)   |

### Encryption

Client-side encryption is the **most rigorously designed** part in the plugin. Encryption is not as simple as using a key to encode a part of file, which can be broken by attackers within minutes. The real encryption process in WebDAV Sync involves **multiple layers of confusion and diffusion**, as shown in the diagram below.

<Viewer :canvas />

The use of WebDAV server information in salting user's password avoids risks brought by Rclone-style universal fixed salt. By choosing `AES-GCM-SIV-256` as the deterministic algorithm for file path encryption, and directly weaving files paths and sizes into file encryption keys, the algorithm can maximally validate the integrity of downloaded files, as well as detecting malicious file movement and truncation.

The resulting encryption pipeline is **theoretically more secure, fast, and Obsidian-native** than similar solutions (like Rclone Crypt), and competitor plugins (like Remotely Save, which uses Crypt under the hood).

### Something More

There's more things to delve into the technological aspect of this plugin.

For example, comparing four states before syncing means we need a **whole WebDAV, local vault and record traversal at the start of each sync**, which is impractical for large vaults. To address this, **Fast Mode** is introduced that reuses the remote state in the record as current state, which avoids traversing the whole WebDAV each sync. Fast mode is enabled by default for real-time syncs and a normal sync (which is triggered by manual, periodic, or startup sync) is recommended before fast mode syncs.

Moreover, to store the records and content of all files (to compare and decide whether a file is changed) requires a huge and active amount of storage to ensure fidelity. This plugin leverages IndexedDB to store the records and query them on-demand.

Also, to control memory usage and prevent crashes when downloading large files, this plugin has specialized **load balancing and download chunking** mechanisms. When a file has size larger than a user-configured threshold, the plugin will split the files into chunks and download in parallel, and save them immediately in local cache when each chunk is finished. In the final pass, the plugin sorts the cache and writes the complete file incrementally. This not only ensures the memory consumption at a constant low level when handling gigabytes of file, also makes large file downloading fully resumable.

## Installation & Setup

Since the plugin is currently in beta, installation requires the **BRAT** (Beta Reviewer Auto-update Tool) plugin:

### Step 1: Install BRAT

1. Open Obsidian Settings → Community Plugins
2. Search for and install **BRAT**
3. Enable the plugin

### Step 2: Add Obsidian WebDAV Sync

1. Open BRAT settings
2. Click **Add beta plugin**
3. Paste repository URL: `https://github.com/hesprs/obsidian-webdav-sync`
4. Select the latest version and click **Add plugin**

### Step 3: Configure WebDAV Connection

1. Enter your WebDAV server URL
2. Provide account credentials
3. Click **Check connection** to verify
4. Select your remote directory
5. Initiate your first sync

> Always backup important notes before your initial sync. While the plugin handles file presence resolution robustly, having a backup provides peace of mind during first-time setup.

## License

Obsidian WebDAV Sync is licensed under the [AGPL-3.0 License](https://www.gnu.org/licenses/agpl-3.0.en.html).
