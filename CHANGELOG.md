# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed

- Rebuilt the tab bar on Obsidian's own `--tab-*` variables. The bar is a deeper green, inactive tabs have no fill and white text, and the active tab takes the note header's top color with dark bold text, so it reads as one piece with the header below. The header no longer draws a top border between them.
- Removed the overrides on the active tab's corner pseudo-elements, which left small dark triangles at its bottom corners, along with the tab outline and drop shadow.
- Sidebar tab icons use Obsidian's active marker with a light tint that shows on the blue sidebar.

- Reorganized the snippet into numbered sections and moved link styling onto Obsidian's `--link-*` variables, which removed most `!important` overrides outside the mobile section (108 to 70) and five unused color tokens. Computed styles are unchanged except for the fixes listed under Fixed.

- Set the lit icon color of 2Hop Links Plus 0.49.0's round header button through `--twohop-elevator-lit` (light `#1a7f26`, 5.1:1 on its white face; dark `#7ed67a`), since the default accent green was faint. The mobile header-button overrides no longer repaint that button.

### Fixed

- Links in the reading-view backlinks under a note now use the light link color of the blue region, as they already did in Live Preview, instead of blue on blue.
- External links in Live Preview no longer turn Obsidian's purple accent color on hover.

### Verified

- Compared computed styles of every element in a fixture of Obsidian 1.13.7 DOM (tabs, sidebars, note header, reading and Live Preview content, backlinks, 2Hop regions, hover previews, mobile drawer) before and after the reorganization, in light and dark, desktop and tablet classes, at 1280 and 700px, including forced hover on links, tabs, and header buttons.
- Checked tab colors, contrast (active 6.95:1 light / 5.03:1 dark, inactive 4.80:1 light), corner rendering at 3x zoom, and the join with the note header in light and dark themes with Obsidian 1.13.7's `app.css` in a local test page. Not yet checked inside Obsidian; tablet tab bars are unverified.

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
