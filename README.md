# Aranas

## Framework: LitJS (Project Overview)
This project is an **Alumni Hub** web application built using **Lit JS (LitElement)**, designed specifically for Ateneo de Davao University (ADDU). It features a document request system, user authentication, and real-time status tracking.

---

## PWA Transformation
**Branch:** `feature/pwa-ready`

This project has been upgraded to a Progressive Web Application (PWA). This transformation enables offline capabilities, standalone display mode, and persistent caching of branding assets, ensuring the app is accessible even without an active network connection.

### PWA Checklist
- [x] **Manifest:** Integrated `manifest.json` with ADDU branding (#081478).
- [x] **Service Worker:** Custom implementation (`sw.js`) for background caching.
- [x] **Offline Support:** Verified via DevTools offline stress testing.
- [x] **Installability:** App triggers native browser "Install" prompts.

---

## AI Collaboration & Vibe Coding Log

### Master Prompt (Initial PWA Conversion)
> "I am a 2nd year IT student building the 'Alumni Hub' web app using the Lit JS framework. Please help me convert this into a PWA. Create a valid manifest.json with ADDU branding (Royal Blue #081478), a Service Worker for offline caching of my branding assets (knight.png and seal.png), and the registration script for index.html so the app becomes installable and passes the offline stress test."

### Troubleshooting & Hallucinations Log
AI-generated code requires manual calibration for real-world production. The following technical hurdles were addressed:

1. **The "Greedy Cache" (HMR Interference):** The initial Service Worker cached all network requests, including Vite’s internal Hot Module Replacement files, which crashed the app in development.
   - *Fix:* Manually implemented a filter in the `fetch` listener to ignore Vite-specific paths, isolating the cache to only critical application assets.
2. **Vite Hashing Conflict:** The initial AI suggestion to hard-code static JS filenames (e.g., `alumni-hub.js`) failed because Vite’s production build generates hashed filenames (e.g., `index-xyz123.js`).
   - *Fix:* Refactored the Service Worker to use a dynamic fetch-and-cache strategy, allowing the worker to capture assets based on runtime requests rather than static lists.
3. **The "Ghost Cache":** Browser storage often persisted old Service Worker versions, causing "White Screen" errors during testing.
   - *Fix:* Established a manual "Clean-Start" workflow using the DevTools *Application* tab to unregister service workers and clear cache storage before each production test.

---

## Installation and Execution

## Installation and Execution

### 1. Clone the repository:
```bash
git clone [INSERT YOUR REPO LINK HERE]
cd [INSERT YOUR FOLDER NAME HERE]
```
### 2. Install dependencies:
```bash
npm install
```
### 3. Launch the development server:
```Bash
npm run dev
```
### AI Tools Log
ChatGPT: Brainstorming and structural planning.

Gemini: Primary technical partner for Lit JS component architecture, ADDU branding integration, and PWA Service Worker debugging.

Architecture Deep-Dive
Video Walkthrough: [Insert link to your unlisted video here]
Gemini: Primary technical partner for Lit JS component architecture, ADDU branding integration, and PWA Service Worker debugging.
Plaintext
Architecture Deep-Dive
Video Walkthrough: [Insert link to your unlisted video here]
cd [INSERT YOUR FOLDER NAME HERE]
