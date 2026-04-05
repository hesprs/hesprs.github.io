---
layout: project
title: Obsidian WebDAV Sync
description: WebDAV Sync is a plugin for Obsidian that syncs your vault with a WebDAV server. It excels existing solutions at more robust file handling and better performance without vendor lock-in.
logo: https://github.com/hesprs/obsidian-webdav-sync/raw/main/assets/logo.svg
head:
  - - meta
    - name: keywords
      content: Obsidian, Obsidian plugin, Obsidian WebDAV Sync, Obsidian WebDAV, WebDAV synchronization, cross-device sync
---

<script lang="ts" setup>
import { IconBrandGithub } from '@tabler/icons-vue';
import { useLinks } from '$/composables/links';
useLinks([{
    name: 'GitHub Repository',
    url: 'https://github.com/hesprs/obsidian-webdav-sync',
    icon: IconBrandGithub,
    color: '#010409'
}]);
</script>

## Introduction

Obsidian WebDAV Sync is a general-purpose & bidirectional WebDAV syncing plugin for Obsidian. It is created due to the current landscape that no single plugin can reliably and conveniently sync your vault with a WebDAV server. It has following features:

- 🔄 Bidirectional syncing between local vault and remote WebDAV
- ⚡ Fast syncing mode with cached acceleration for realtime syncing
- 📁 WebDAV explorer for exploring remote directories
- 🔀 Conflict handling:
  - Smart merge
  - Latest survive
  - Use remote
  - Use local
  - Skip
- 🚀 Strict / loose sync modes for different vault sizes
- 📦 Large file skipping via configurable size threshold
- 🔁 Reliable file handling that doesn't mess up your notes
- 📜 Lightweight local database empowers scalability and ensures performance

## Another Syncing Plugin?

As an Obsidian user working across multiple devices, I've personally encountered the sync dilemma: finding a solution that's reliable, flexible, and doesn't compromise data integrity. After trying nearly every syncing plugin in the community, I found that each came with trade-offs that frustrated my daily workflow:

- **Remotely Save** offers comprehensive features but suffers from maintenance issues and bugs—deleted files mysteriously reappearing (which is the **very** reason that drove me quit).
- **Syncthing Integration** provides excellent P2P syncing but requires all devices to be online simultaneously.
- **Live Sync** delivers robustness at the cost of complex server setup.
- **Git-based solutions** excels at version control but is not designed for seamless daily synchronization.

Then I discovered [Nutstore Sync](https://github.com/nutstore/obsidian-nutstore-sync) — an excellent plugin, but designed for Nutstore only. I thought: why not make this general-purpose? So I forked it, extensively overhauled it for no vendor lock-in, better performance, and improved stability. What came out was **Obsidian WebDAV Sync**.

## Technical Breakdown

To sync an Obsidian vault to a WebDAV server is a typical **decentralized coordination** problem, where each client has their own copy and changes of the vault and there's no centralized resolver between. The goal is to synchronize the vaults between clients for maximum data integrity.

To address this, this plugin keeps a record of the last known sync state of local and remote files. During syncing evaluates **four states (current local, current remote, recorded local, recorded remote)** for each file path and decides the sync action accordingly:

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

Now the syncing is reliable enough, but some new issues emerged.

For example, comparing four states before syncing means we need a **whole WebDAV, local vault and record traversal at the start of each sync**, which is impractical for large vaults. To address this, **Fast Mode** is introduced that reuses the remote state in the record as current state. This avoids traversing the whole WebDAV, but it ignores remote changes. So **a normal sync before fast syncs is recommended**.

Moreover, to store the records and content of all files (to compare and decide whether a file is changed) requires a huge and active amount of storage to ensure fidelity. This plugin leverages IndexedDB to store the records and query them on-demand.

Then, more issues emerged: what if the file changes between the time of traversal and execution? What if the file becomes a folder at remote? If later changes to storage are made, how to migrate users' data? There's a lot more to discuss about.

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
