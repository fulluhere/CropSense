# CropSense — CropSense Frontend

A React + Vite frontend-only prototype for previewnstrating a farmer-friendly crop insurance UI. The navigation intentionally keeps only four complete pages:

1. **My crop & farm** — choose crop, scheme, problem, add a description, try browser voice input, and choose placeholder photo/video/audio files. Saving stores a temporary preview report in session storage so the notification page can reflect the crop and description.
2. **Notifications** — sample crop and scheme alerts, with temporary photo/audio/video explanation controls. Audio uses the browser's speech synthesis where available; video/photo are UI placeholders only.
3. **Learn & help** — how to use the website, what to check in an insurance policy, parametric insurance basics, and accessibility guidance, with read-aloud buttons.
4. **Settings & accessibility** — English/Hindi/Marathi buttons, larger text, high contrast, reduced motion, and screen-reader-friendly focus mode.

## Run locally

```bash
npm install
npm run dev
```

## Important preview limits

- No backend, insurer API, real claim submission, prediction service, or payment decision is connected.
- All alerts and policy information are illustrative. A saved report stays in the current browser session only.
- Voice input depends on browser support and microphone permission. Read-aloud depends on the browser's speech synthesis voices.
- Uploaded media is selected locally only; it is not uploaded or stored by a server. Notification media explainers are temporary UI placeholders.
