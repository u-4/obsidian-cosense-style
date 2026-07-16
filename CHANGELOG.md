# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Added a safe visual boundary between note content and document-related regions from 2Hop Links Plus and Obsidian's in-document backlinks without moving Obsidian or CodeMirror DOM.
- Added scoped light/dark colors for the 2Hop temporary-sort menu and covered the remaining one-pixel editor-card border around its related-links canvas.

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
