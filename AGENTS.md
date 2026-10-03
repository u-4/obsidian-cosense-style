# AGENTS.md

AIエージェント（Claude Code・Codex）向けの作業指示です。

## やりとり

- 利用者とのやりとりは日本語で行い、変更内容・確認方法・戻し方を、プログラマでない人にも分かる言葉で説明する。

## 対象

- このリポジトリは、公開用のObsidian CSSスニペット`cosense-scrapbox-style.css`を管理する。
- 公開してよいのは、CSS、公開用の説明、架空のデータだけを使ったスクリーンショットに限る。実在のノート本文・添付・Vault名・個人の絶対パス・認証情報は入れない。
- CSSへ外部URL、`@import`、`url()`を足すときは、通信先とプライバシーへの影響をREADMEに書く。

## 変更と確認

- Obsidianの内部クラスに頼る変更は、確かめたObsidianの版と環境をCHANGELOGに書く。
- ライト／ダーク、デスクトップ／モバイルで表示を確かめる。2Hop Links PlusやKey-Value Listなど、特定のプラグイン向けの調整は任意の機能として扱う。
- 版を上げるときは、CHANGELOGに版と日付を書き、Gitのタグを付ける。GitHubのReleaseは作らない。

## 配置

- `node scripts/deploy.mjs`で、利用者のVault（既定は`~/PalmWiki`、環境変数`PALMWIKI_VAULT`で変更可）の`.obsidian/snippets/`へ配置する。配置前にVaultの外へ控えを取り、配置後にSHA-256で照合する。利用者のメインのVaultへの配置は、毎回の承認なしで行ってよい。
- スニペットの有効化など、Obsidianの設定は変えない。

## ほかのセッションとの連携

- PalmWiki Home・2hop-links-plus・Cosense風CSSは、それぞれのフォルダで開いたClaude Codeのセッションで開発する。ObsidianOpsのセッションは、Vaultの設定・診断・開発状況のページを受け持つ拠点。
- 別のリポジトリの変更が要るとき（クラス名の変更に合わせたCSSなど）は、自分で直さず、`ListAgents`で相手のセッション名を確かめて`SendMessage`で頼む。相手のセッションがないときは、利用者に伝える。
- Vaultに配置したら、ObsidianOpsのセッションに版と変更点を短く知らせる（開発状況のページの更新のため）。
