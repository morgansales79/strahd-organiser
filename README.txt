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

NEW: Scan statblock (Enemies page)
Photograph a printed statblock and it is read on the tablet, fully offline. The scanner files live in the ocr folder and are about 14 MB, so upload that whole folder to GitHub too. Always check the numbers on the review screen before adding the enemy.

NEW: Scan character sheet (Party page)
Photograph a character sheet to add a new adventurer or update an existing one (it offers the matching name). Ability scores printed in small boxes are the hardest part for the reader, so check them on the review screen. Anything it could not read is listed and left blank.

NEW: Google sync (Sync button, top right)
Keeps your data in step between devices (stored in a hidden app folder in your Google Drive) and keeps the location notes in step with your Google Doc, using one Heading 1 per location. Sign in with the Google account you added as a test user. Sync from the device holding your real campaign data first. Also new: Add location on the Locations page.

PDF scanning (v9): "From photo or PDF" on the Party and Enemies pages also accepts PDF files.
Multi-page PDFs show a page picker (< 1 of 3 >) in the review screen. The PDF reader lives in the pdf/ folder - keep it with the app.

Cloud scanning (optional): in Sync -> Settings, paste a Google Cloud Vision API key. When a key is set and the tablet is online,
Enemies and Party scans use Google's text reader (more accurate than the offline one). Offline or on any error it falls back to the built-in reader.
The key is stored only on that device. The page image is sent to Google for each scan.

Bullets (v11): bulleted and numbered lists in the Google Doc now come into the app as "• item" / "1. item" lines (indent = sub-level),
and lines you start with "- ", "• " or "1. " in the app become real bullets/numbers in the doc.

Maps (v12): pictures placed under a location heading in the Google Doc are pulled out at Sync (the line directly above a picture is its name),
kept on the device for offline use, and shown from the Maps button in a location's full-screen notes. They are not shown in the notes text.

Updating (v15): Sync -> Settings -> "Get the latest app version" clears the app's cached copy and reloads it from the internet. Data is kept.

Maps fix (v18): if the browser blocks saving a map picture normally, it is kept in a separate offline cache instead; if that also fails the map loads
from Google when you open it while online. The Sync log says how many maps could not be saved for offline use and why.

Maps v20: Google blocks pictures from being downloaded directly, so maps are now read through Google Drive. In Sync > Settings tick
"Allow map pictures" (one extra Google permission: read-only access to Drive files), then press Sync now. "Test map download" shows what happens.
v21: Encounter attack buttons (toggle, target AC, advantage/disadvantage, crits double dice).
v22: all checkboxes restyled as ON/OFF toggle switches.
v23: Party cards: saving throws, skills, passive Perception/Insight/Investigation, rogue lock picking, wizard Mage Armor toggle.
v24: Spell save DC and spell attack tile on Party cards for casters.
v25: Spell DC is now a normal-size tile in the AC/HP row.
v26: Active Session tab: movable/resizable panes, pane picker, dice, log, rules reference popout.
v27: Yes/No switches where it reads better (Visited, Met, Hide..., Show detailed statblocks, Allow map pictures).
v28: Active Session layout, notes and log now stored in the main data (sync and backup).
v29: Active Session Maps pane + Maps button in Location pane.
v30: Name dropdowns (locations, Strahd attitude, damage target, scan target) sorted A-Z.
v31: Locations edit mode: drag cards to reorder, Sort A-Z button; order is remembered.
v32: Death House location restored with summarised notes (areas 1-38, endings).
v33: Attack results shown in a popup; Party race field now full width.
v34: Import PDF reads the PDF's own text layer (falls back to picture scanning for scanned PDFs); camera buttons no longer force the camera.
v35: Import PDF reads D&D Beyond fillable-form fields directly (stats, saves and skills proficiency).

v36: Initiative prompt now asks for current HP (auto-filled, tracked fight to fight and on the Party tab). Dashboard Short rest / Long rest buttons (hit dice, Arcane Recovery, Natural Recovery, Warlock pact slots). Druid Wild Shape on encounters, ranger companion on the Party tab and in encounters.

v37: Spell slot blobs now also appear on the Encounter page. New "Prepared encounters" card on the Encounter page: build, save, and load encounters before the session.

v38: Smaller spell slot blobs shown on each caster's own card in the Encounter window (separate slots card removed). Two sample casters (Wizard, Warlock) in a fresh install. Fixed fresh installs missing the encounter plans list.

v39: Favourite Wild Shapes per druid (basic rules beasts or custom), chosen from a dropdown on the Encounter page; beast HP tracked between fights; cleared on a long rest.

v40: Druid favourite Wild Shapes list also offers beasts saved in Enemies; "Only forms this druid can use" toggle (max CR, fly/swim by level) and a Circle of the Moon switch.
