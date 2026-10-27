# Nibha Kumari Gupta — Portfolio

A responsive personal portfolio built with React + Vite. Includes an about section, technical skills, experience, education, certificate previews, contact links and a CV download.

## 1. Requirements
- Install Node.js LTS: https://nodejs.org/
- Install Visual Studio Code: https://code.visualstudio.com/

## 2. Open in VS Code
1. Extract the ZIP file.
2. In VS Code, choose **File → Open Folder** and select `nibha-portfolio`.
3. Open **Terminal → New Terminal**.

## 3. Run locally
Run these commands one by one:

```bash
npm install
npm run dev
```

Vite will show a local URL, usually `http://localhost:5173`. Open it in your browser.

## 4. Build to check before publishing

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## 5. Publish free with Vercel (recommended)
1. Create/sign in to GitHub: https://github.com/
2. Create a new repository named `nibha-portfolio`.
3. Upload/push all files from this project to the repository. Do not upload `node_modules`.
4. Sign in at https://vercel.com/ using GitHub.
5. Choose **Add New → Project**, import `nibha-portfolio`.
6. Keep build command `npm run build` and output directory `dist` (Vercel usually detects Vite automatically).
7. Click **Deploy**. You will get a public `*.vercel.app` URL.
8. Later, when you push changes to GitHub, Vercel can redeploy automatically.

Official guide: https://vite.dev/guide/static-deploy

## Alternative free hosting: Cloudflare Pages
1. Push this project to GitHub.
2. Open https://pages.cloudflare.com/ and create a Pages project from the Git repository.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Deploy and use the generated `*.pages.dev` URL.

Official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

## Customize before publishing
- Update the text and skill list in `src/main.jsx`.
- Replace the certificate image files in `public/certificates/` if you have clearer scans.
- The CV download uses `public/Nibha-Kumari-Gupta-CV.pdf`. Replace it with your latest CV using the same filename.
- GitHub link is set to `https://github.com/nibharauniyar123` with whitespace removed by the JSX expression. If your GitHub username/link changes, update both GitHub anchors in `src/main.jsx`.
- Add project cards only for projects you have actually built; include a short description and GitHub/demo link.
- Verify all dates and details against the original documents before sharing with employers.

## Privacy note
The certificate scans contain personal information. Only publish them if you are comfortable making those details publicly accessible. You can remove any certificate card or image from `src/main.jsx` and `public/certificates/`.
