# MCbrowser
[![Build Status](https://github.com/pipesWBS/MCbrowser/workflows/CI/badge.svg)](https://github.com/pipesWBS/MCbrowser/actions)

| 🇺🇸 [English](README.md) | 🇷🇺 [Russian](README_RU.md) | 🇵🇹 [Portuguese](README_PT.md) |
| ----------------------- | -------------------------- | ---------------------------- |

A Minecraft Java client running directly in any modern web browser.

## How it Works
MCbrowser runs a lightweight Minecraft client in the browser using WebAssembly and WebGL. It connects via WebSocket to translate browser network traffic into standard TCP protocol, allowing seamless connection to Minecraft Java Edition servers directly from your web browser.

## Features
* **Cross-Browser Compatibility:** Runs on any modern desktop browser (Chrome, Firefox, Edge, Safari, Brave).
* **Game Mechanics:** Move around, place, and break blocks in real time.
* **Entities:** Display mobs and other online players dynamically.
* **Offline & Server Modes:** Play local web worlds or connect to remote servers.

## Usage

### Direct Web Hosting (No Local Server Needed)
You can deploy MCbrowser using static web hosting platforms like **GitHub Pages** or **Vercel**:

1. Build the production files:
   ```bash
   npm run build
