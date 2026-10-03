# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.2.4] - 2026-10-04

### Changed

- Doubled the light-theme hover tint on shared note cards (6% to 12%) so the card under the pointer stands out on white; the dark theme keeps 6%.

### Verified

- Confirmed the light-theme hover tint in Obsidian 1.12.7 on macOS.

## [0.2.3] - 2026-10-04

### Added

- Defined the shared `--cosense-card-*` color variables (background, title, excerpt, hover) on `body`, so 2Hop Links Plus 0.45.0+ and PalmWiki Home 1.5.1+ cards use the same Cosense palette. Card sizes stay with the plugins' matching defaults, which keeps PalmWiki Home's narrow-screen gap and padding. The colors resolve from the Cosense palette before document-related regions override `--text-normal` for the blue canvas. `--cosense-card-border` keeps its existing theme color.

### Verified

- Checked the resolved card colors and sizes in light and dark themes, and the narrow branches, with the 2Hop Links Plus 0.45.0 and PalmWiki Home 1.5.1 stylesheets in a local test page with fictional cards.
- Confirmed 2Hop Links Plus 0.45.1 and PalmWiki Home 1.5.1 cards in Obsidian 1.12.7 on macOS with the default light and dark themes.

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
