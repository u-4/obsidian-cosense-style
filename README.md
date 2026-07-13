# Obsidian Cosense Style

Cosense（旧Scrapbox）の表示に着想を得た、Obsidian用の非公式CSSスニペットです。

ライト／ダークテーマ、デスクトップ、iOS、iPadOSに対応し、ノート本文をカード状に見せながら、リンク、タブ、サイドバー、コードブロックなどをCosense風の配色に調整します。

> [!IMPORTANT]
> このプロジェクトは、Nota Inc.、Cosense、Scrapbox、ObsidianまたはDynalist Inc.とは関係のない非公式プロジェクトです。各製品名は識別と説明のためにのみ使用しています。

## Features

- ライトテーマとダークテーマの自動切り替え
- ノート本文を大きなカードとして表示
- 幅の小さいリンク先プレビューでは内側のカード枠を外し、通常ノートカードと同じ背景・文字色、外周だけの角丸枠で内容幅を確保
- 任意のHover Editorプラグインを使う場合は、プレビューの上部バーをテーマ別の控えめなグレーに調整
- 存在するノート、存在しないノート、外部リンクの配色分け
- 外部URLとファイル種別に応じた簡易ラベル
- タブ、タイトルバー、リボン、左右サイドバーの配色調整
- デスクトップ、iPhone、iPad向けのレスポンシブ調整
- コードブロック、引用、ハイライトの調整
- Key-Value Listプラグイン向けの補助スタイル

## Installation

1. `cosense-scrapbox-style.css`を、対象Vaultの次のフォルダへ配置します。

   ```text
   <Vault>/.obsidian/snippets/cosense-scrapbox-style.css
   ```

2. Obsidianの「設定」→「外観」→「CSSスニペット」を開きます。
3. スニペットを再読み込みし、`cosense-scrapbox-style`を有効にします。

無効化すると、元のテーマ表示へ戻ります。

## Compatibility

このスニペットは、以下の環境で調整・確認しています。

- Obsidian 1.12.7
- macOS
- iOS / iPadOS
- Obsidian標準のライトテーマ／ダークテーマ

Obsidianの内部HTMLクラスを利用している箇所があるため、Obsidianの更新後に一部の表示が変わる可能性があります。また、他のテーマやUIを大きく変更するCSSスニペットと同時に有効化すると、競合する場合があります。

### Hover preview integration

標準のページプレビューでは、通常ノートカードと同じ背景・文字色、外周だけの角丸枠が適用されます。任意のHover Editorプラグインを導入している場合は、アクティブ、非アクティブ、ピン留め状態の上部バーにも補助スタイルが適用されます。Hover Editorは必須ではありません。

Hover Editorの内部HTMLクラスやCSS変数が将来変更された場合は、上部バーの調整だけが効かなくなる可能性があります。

### Key-Value List integration

`.kvl-live-row`向けのスタイルを含みます。存在しないノートの判定には、リンク要素へObsidianの`is-unresolved`クラスが付与されている必要があります。Key-Value Listプラグインのバージョンによっては、Live Preview内でこのクラスが付かず、存在しないノートが正しい色にならない場合があります。

このリポジトリには、プラグイン本体を変更するJavaScriptパッチは含めません。

## Privacy

このCSSは、外部フォント、外部画像、解析サービス、テレメトリーを読み込みません。`@import`、外部URL、`url()`によるネットワーク参照も使用していません。

## Updating

新しい`cosense-scrapbox-style.css`で既存ファイルを置き換え、ObsidianのCSSスニペットを再読み込みしてください。更新前のCSSを残しておくと、問題が起きた場合にすぐ戻せます。

## English summary

An unofficial Obsidian CSS snippet inspired by the visual language of Cosense, formerly Scrapbox. It supports light and dark modes, desktop and mobile layouts, note-card styling, compact link previews, link-state colors, tabs, sidebars, and code blocks.

Install `cosense-scrapbox-style.css` into `<Vault>/.obsidian/snippets/`, then enable it in **Settings → Appearance → CSS snippets**.

This project is not affiliated with Nota Inc., Cosense, Scrapbox, Obsidian, or Dynalist Inc.

## License

MIT License. See [LICENSE](LICENSE).
