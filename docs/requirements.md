# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 63 |
| Domain | OBSStreaming |
| Idea No. | 1 |
| Repository | obs-status-dependency-log-diagnostics |
| 主な公開先 | GitHub Release / BOOTH |

## 背景

配信不調時に、シーン構成、ログ、設定、原因候補を別々に探す必要がある。

## 目的

配信状態、シーン依存、設定履歴、ログ、エラー原因候補を1つのダッシュボードで確認する。

## 必須要件

- stream diagnostic を複数件まとめて検証できる。
- required fields: `id`, `title`, `obsScene`, `sourceName`, `logPath`, `expectedState`。
- warning field: `recoveryHint`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
