# 配信状態・依存関係・ログ診断

配信状態、シーン依存、設定履歴、ログ、エラー原因候補を1つのダッシュボードで確認する。

| 項目 | 内容 |
| --- | --- |
| Rank | 63 |
| Domain | OBSStreaming |
| Idea No. | 1 |
| Repository | obs-status-dependency-log-diagnostics |
| 主な公開先 | GitHub Release / BOOTH |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: UI/レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/cli.mjs`: CLI。

## Validation

`npm test` で代表シナリオ、QCDS、docs ZIP、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
