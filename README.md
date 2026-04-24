
Alumni Hub (Aranas Framework)

Project Overview

This project is an Alumni Hub web application built using Lit JS (LitElement), designed specifically for Ateneo de Davao University (ADDU). It features a document request system, user authentication, and real-time status tracking.

PWA Transformation (Feature: feature/pwa-ready)

This project has been upgraded to a Progressive Web Application (PWA). This transformation enables offline capabilities, standalone display mode, and persistent caching of branding assets.

PWA Checklist Completed

Manifest: Added manifest.json with ADDU branding and theme colors.

Service Worker: Implemented sw.js for background asset caching and offline fetch handling.

Offline Support: Verified that the application remains functional without an active internet connection.

Installability: Verified that the application triggers the browser's install prompt for desktop and mobile.

Documentation: The Vibe Coding Log

Master Prompt (PWA Conversion):
"I am a 2nd year IT student building the 'Alumni Hub' web app using the Lit JS framework. Please help me convert this into a PWA. Create a valid manifest.json with ADDU branding (Royal Blue #081478), a Service Worker for offline caching of my branding assets (knight.png and seal.png), and the registration script for index.html."

Troubleshooting Log:

Issue: Git integration was unavailable in the local VS Code environment.

Fix: Manually initialized the feature/pwa-ready branch via the GitHub web interface and utilized direct file uploads to sync the PWA architecture.

Issue: Initial script placement caused a race condition where the component loaded before the worker registered.

Fix: Adjusted index.html to register the Service Worker in the document head, ensuring the caching layer is active during the initial render.

Installation and Execution

To replicate and run this project, follow these steps:

Clone or download the repository.

Open the terminal in the project folder and execute:

npm install


Launch the development server:

npm run dev


Follow the local link provided in the terminal to view the application.

AI Tools and Collaboration Log

This project was developed using a Vibe Coding workflow, utilizing Generative AI for architectural implementation and debugging.

ChatGPT: Provided initial logic; required manual conversion from Vanilla JS to Lit JS.

Gemini (Primary Partner): Used for Lit JS component structure, ADDU branding accuracy, and the PWA Service Worker implementation.

Architecture Deep-Dive

[Insert link to your unlisted video here]
