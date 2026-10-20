# Changelog

All notable changes to this project will be documented in this file.

## [0.4.3] - 2026-10-20

### Fixed

- On Windows (and Linux) with Obsidian's default hidden window frame, the note tabs and the sidebar tab icons (file explorer, search, calendar, properties and so on) were covered by a plain green bar. Obsidian lays its title bar over the top row there as a transparent layer that holds only the window buttons, and the snippet painted that layer green. The snippet no longer paints the title bar; Obsidian paints it from `--titlebar-background`, which is still the tab bar green, so the window buttons and the separate title bar of the "Obsidian frame" style keep that color. macOS was not affected, because Obsidian hides that layer there.

### Verified

- Checked against Obsidian 1.14.4's `app.css` in a local test page (light and dark): with the Windows hidden frame the title bar layer was green over the tabs before this change and is transparent after it, and the tab shows through; the window button area stays green; the "Obsidian frame" title bar stays green. Not yet checked in the Windows app itself.

## [0.4.2] - 2026-10-15

### Fixed

- In Live Preview, clicking a table cell to edit it painted the cell's text area in the blue canvas color, so blue link text sat on dark blue (seen on the desktop app). Obsidian edits the cell in a small editor of its own, and its `.cm-scroller` matched the snippet's canvas rule for the note's scroller. Table cell editors are now transparent and keep the cell's white or striped background.

### Verified

- Checked the computed background of the note's scroller and of a table cell editor against Obsidian 1.14.4's `app.css` in a local test page (light and dark): the cell editor was the canvas color before this change and is transparent after it; the note's scroller keeps the canvas color. Not yet checked in the desktop app itself.

## [0.4.1] - 2026-10-14

### Fixed

- On phones and tablets, menus (file and link menus, the ribbon menu, dropdowns) were the blue canvas color at 90% opacity with a blur, so notes showed through and dark text sat on blue (seen on the iPad). They now use the card color, solid and without the blur.
- Prompts (search screens, command palette, quick switcher) and suggestion popups were still 90% opaque after 0.3.1 removed their blur, so notes showed through more clearly than before. Obsidian's mobile mix values (`--blur-opacity-m` 90%, `--blur-opacity-s` 65% for raised buttons and bars) are now 100%, so these and the floating buttons are solid.
- The search options box on mobile, and on phones the Bases toolbar menu and nested dialogs, used the blue canvas; they now use the card color.

### Verified

- Checked the computed background and backdrop filter of menus, prompts, suggestions, raised buttons and the search options box against Obsidian 1.14.4's `app.css` in a local test page (light and dark, tablet and phone body classes): all solid, before this change 90% or 65%. Not yet checked on the iPad itself.

## [0.4.0] - 2026-10-14

### Added

- Site and file-type icons before external links (and internal links to PDF, image, text and code files) in reading view, previews, and Live Preview callouts and tables (Obsidian renders those as `.markdown-rendered`): the classic blue Twitter bird for X and Twitter links (in its own color, from Simple Icons 10), GitHub, YouTube, Wikipedia, PubMed, DOI, Google Drive/Docs/Sheets/Slides/Maps/Calendar/Gmail, Google Scholar, Rakuten, Tabelog, Qiita, Hatena, note, Zenn, Dropbox, Facebook, Instagram, Notion, iCloud, LINE, Obsidian, Scrapbox, a book icon for major journal sites, UpToDate, Amazon, Gyazo, Japanese government sites, PDF, images, text and code files, mail. They replace the earlier text badges. Icons are SVG `data:` URLs painted in the link color through a mask; no network access. Plain Live Preview links carry no URL attribute, so they get no icon. `scripts/build-link-icons.mjs` regenerates the section from the vendored SVGs (Simple Icons CC0, Lucide ISC).
- Cosense-style text: bold in SteelBlue (light `#4682b4`, dark `#8ab4dc`, through `--bold-color`; plain on the blue related regions), `==highlight==` as Cosense's orange marker band, and tables with a blue-tinted header row and light row stripes (Obsidian's `--table-*` variables, so Live Preview tables match).
- List threads like Logseq's bullet threading: the items on the path to the current one are joined by a line with a rounded turn into each bullet, and those bullets are bigger and take the link color. In reading view the path follows the pointer over the nested `<li>`s (CSS only). In Live Preview the new Cosense Style Helper plugin draws it from the cursor; an earlier CSS-only version with `:has()` was dropped because Obsidian gives two-space-indented lists (about half of the vault) no indent elements to draw on. Bullets also fade slightly with depth, and Obsidian's own Live Preview guides now sit under the bullets.
- Live Preview link icons through the Cosense Style Helper plugin's `.cosense-link-icon[data-href]` span (from helper 0.2.0 also in Key-Value List rows, whose missing-note links the helper marks with `is-unresolved` for section 9); `scripts/build-link-icons.mjs` emits those selectors next to the reading-view ones.
- Completed tasks (`data-task="x"`) get a pale red 処理済 stamp beside their first line, in reading view and Live Preview. It is positioned outside the text flow, sits in the card's side padding when it fits (desktop widths) and otherwise overlaps the line end, so checking a task moves no text.

### Fixed

- In the dark theme the accent color (checkboxes, toggles, buttons) was Obsidian's purple because Obsidian's `.theme-dark` rule outranked this snippet's mapping; it is now the green of the light theme. The iPad dark title bar uses the tab bar green for the same reason.
- Removed the `--background-secondary-alt` mapping, which Obsidian's theme rules always overrode.

### Verified

- Checked the list thread path in both views (bullets lit, straight lines and turns exactly on the path to the active or hovered item) against list DOM taken from Obsidian, and the bold, marker and table colors, in light and dark themes in a local test page.
- Checked icons, stamp placement and line heights (checked and unchecked task lines are the same height) in light and dark themes with Obsidian 1.14.4's `app.css` in a local test page with fictional links and tasks. Not yet checked inside Obsidian; phone and tablet unverified.

## [0.3.2] - 2026-10-14

### Changed

- Quotes look like Cosense's while editing too: the snippet now sets Obsidian's blockquote variables (gray background, 4px gray left line, upright text), which Obsidian uses in reading view and Live Preview alike. Before, only reading view had the Cosense look.

## [0.3.1] - 2026-10-13

### Fixed

- On phones and tablets, prompts (command palette, quick switcher, plugin search screens), suggestion popups, the settings screen and buttons used Obsidian's mobile `--background-secondary`, which this snippet maps to the blue canvas, and prompts and suggestions also blurred what was behind them. They now use the card color without the blur, so the text is readable and notes no longer show through (seen on the iPad).

## [0.3.0] - 2026-10-04

### Changed

- Rebuilt the tab bar on Obsidian's own `--tab-*` variables. The bar is a deeper green, inactive tabs have no fill and white text, and the active tab takes the note header's top color with dark bold text, so it reads as one piece with the header below. The header no longer draws a top border between them.
- Removed the overrides on the active tab's corner pseudo-elements, which left small dark triangles at its bottom corners, along with the tab outline and drop shadow.
- Sidebar tab icons use Obsidian's active marker with a light tint that shows on the blue sidebar.

- Reorganized the snippet into numbered sections and moved link styling onto Obsidian's `--link-*` variables, which removed most `!important` overrides outside the mobile section (108 to 70) and five unused color tokens. Computed styles are unchanged except for the fixes listed under Fixed.

- Set the lit icon color of 2Hop Links Plus 0.49.0's round header button through `--twohop-elevator-lit` (light `#1a7f26`, 5.1:1 on its white face; dark `#7ed67a`), since the default accent green was faint. The mobile header-button overrides no longer repaint that button.

- Backlinks and 2Hop regions are now added below the card's bottom padding instead of replacing it, so the text area and the white space under it no longer change when they render after the note opens. In reading view the footer's padding repeats the card's bottom padding and the backlinks inside it are the blue region; in Live Preview each region opens and closes with matching margins in the flex-column `.cm-sizer`. This relies on Obsidian 1.13.7 creating `.mod-footer` on demand and laying out `.cm-sizer` as a flex column.
- Card padding and margins scale with the window width between the previous phone and desktop values instead of switching at 720px. The largest change between widths 20px apart is now under 1px (previously 30px at 720px). The card's top and bottom margins on phones are now the intended 14px and 28px; an earlier override never applied them.

### Fixed

- A hidden backlinks element in Live Preview no longer removes the top padding and rounded corners of the 2Hop region after it.
- Links in the reading-view backlinks under a note now use the light link color of the blue region, as they already did in Live Preview, instead of blue on blue.
- External links in Live Preview no longer turn Obsidian's purple accent color on hover.

### Verified

- Measured the white gap between the note text and the first region before and after inserting backlinks, 2Hop, both, and hidden backlinks with 2Hop, in reading view and Live Preview at 1280, 700, and 390px: the gap stays equal to the card's bottom padding (it previously dropped to 0 in Live Preview and grew from 44 to 88px in reading view).
- Measured paint and layout time while changing line heights in a 3,000-line Live Preview fixture with and without this snippet: layout and pre-paint time are the same within run-to-run noise, and the card shadow adds about 0.1ms of raster time per frame. The snippet is not the main cost of Live Preview scrolling or typing, so the shadow is unchanged.
- Compared computed styles of every element in a fixture of Obsidian 1.13.7 DOM (tabs, sidebars, note header, reading and Live Preview content, backlinks, 2Hop regions, hover previews, mobile drawer) before and after the reorganization, in light and dark, desktop and tablet classes, at 1280 and 700px, including forced hover on links, tabs, and header buttons.
- Checked tab colors, contrast (active 6.95:1 light / 5.03:1 dark, inactive 4.80:1 light), corner rendering at 3x zoom, and the join with the note header in light and dark themes with Obsidian 1.13.7's `app.css` in a local test page.
- Confirmed the tabs, note header, related regions, and resizing in Obsidian 1.13.7 on macOS with the default light and dark themes. Phone and tablet layouts are unverified.

## [0.2.5] - 2026-10-04

### Changed

- Gave every button on the green note header one icon color and hover: Obsidian's back/forward buttons (previously `--text-muted` gray), PalmWiki Home's header buttons, and view actions now use the top-bar text color, with a darker translucent hover. Disabled back/forward keep Obsidian's reduced opacity.

### Verified

- Checked the header icon colors, hover, and title centering at 600, 800, and 1200px in light and dark themes with Obsidian 1.13.7's `app.css`, PalmWiki Home 1.11.0, and 2Hop Links Plus 0.48.2 in a local test page.
- Confirmed the header buttons and hover in Obsidian 1.13.7 on macOS. The active note title keeps Obsidian's dark text in the light theme, by choice.

### Fixed

- Corrected the Obsidian version in the 0.2.3 and 0.2.4 notes: the running app was 1.13.7, not 1.12.7.

## [0.2.4] - 2026-10-04

### Changed

- Doubled the light-theme hover tint on shared note cards (6% to 12%) so the card under the pointer stands out on white; the dark theme keeps 6%.

### Verified

- Confirmed the light-theme hover tint in Obsidian 1.13.7 on macOS.

## [0.2.3] - 2026-10-04

### Added

- Defined the shared `--cosense-card-*` color variables (background, title, excerpt, hover) on `body`, so 2Hop Links Plus 0.45.0+ and PalmWiki Home 1.5.1+ cards use the same Cosense palette. Card sizes stay with the plugins' matching defaults, which keeps PalmWiki Home's narrow-screen gap and padding. The colors resolve from the Cosense palette before document-related regions override `--text-normal` for the blue canvas. `--cosense-card-border` keeps its existing theme color.

### Verified

- Checked the resolved card colors and sizes in light and dark themes, and the narrow branches, with the 2Hop Links Plus 0.45.0 and PalmWiki Home 1.5.1 stylesheets in a local test page with fictional cards.
- Confirmed 2Hop Links Plus 0.45.1 and PalmWiki Home 1.5.1 cards in Obsidian 1.13.7 on macOS with the default light and dark themes.

## [0.2.2] - 2026-10-04

### Added

- Added a safe visual boundary between note content and document-related regions from 2Hop Links Plus and Obsidian's in-document backlinks without moving Obsidian or CodeMirror DOM.
- Added scoped light/dark colors for the 2Hop temporary-sort menu and covered the remaining one-pixel editor-card border around its related-links canvas.

### Maintenance

- Added `AGENTS.md` for AI coding agents and `scripts/deploy.mjs`, which installs the snippet into a vault with a backup and a checksum check.

## [0.2.1] - 2026-07-14

### Changed

- Increased compact hover preview frame visibility with a uniform four-pixel, theme-aware outer ring based on the reference card image.

### Verified

- Confirmed the uniform frame width and preserved title-bar colors in Obsidian 1.12.7 on macOS with the default light and dark themes.

## [0.2.0] - 2026-07-14

### Changed

- Removed the nested note-card border, shadow, and oversized spacing from narrow link hover previews while preserving the full card layout in normal note views.
- Matched compact hover preview background and text colors to the normal note card in both light and dark themes.
- Added a theme-aware rounded outer frame and a subdued gray title bar to compact hover previews.
- Verified the compact preview layout with Obsidian 1.12.7 on macOS in the default light and dark themes, including previews managed by the Hover Editor plugin.

## [0.1.0] - 2026-07-11

### Added

- Initial public-ready CSS snippet.
- Automatic light and dark mode palettes.
- Desktop, iPhone, and iPad layout adjustments.
- Styling for note cards, tabs, sidebars, links, code blocks, and mobile controls.
- Optional Key-Value List CSS integration.
