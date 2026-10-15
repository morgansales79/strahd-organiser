CURSE OF STRAHD ORGANISER - install on an Android tablet
=========================================================

The app is a "progressive web app": you put these files on a free web host ONCE,
open the link in Chrome on the tablet, tap Install, and from then on it runs
fully offline from the home screen. Your campaign data is saved on the tablet.

1. Host the files (pick one, all free)
   - Netlify Drop: go to app.netlify.com/drop and drag this whole folder onto the page.
   - GitHub Pages: upload these files to a new public repository, then
     Settings > Pages > deploy from the main branch.
   - Any web host that serves files over https works.
2. On the tablet, open the link in Chrome. Wait for the page to load fully once.
3. Chrome menu (three dots) > "Install app" (or "Add to Home screen").
4. Open the app from the home screen. Turn on airplane mode to confirm it works offline.

Updating the app: upload the new files over the old ones, then open the app once
while online. Close and reopen it to get the new version.

YOUR DATA
- Everything is stored inside the app on the tablet, nowhere else.
- Clearing Chrome's site data or uninstalling the app erases it.
- Use "Create backup" regularly: it saves a .json file to the tablet's Downloads.
  "Restore file" loads one back (also how you move data to a new tablet).
