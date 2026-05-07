export const productProfile = {
  "repository": "obs-status-dependency-log-diagnostics",
  "title": "配信状態・依存関係・ログ診断",
  "domain": "OBSStreaming",
  "hostApp": null,
  "rank": 63,
  "tier": "P2",
  "ideaNo": 1,
  "overview": "配信状態、シーン依存、設定履歴、ログ、エラー原因候補を1つのダッシュボードで確認する。",
  "problem": "配信不調時に、シーン構成、ログ、設定、原因候補を別々に探す必要がある。",
  "differentiation": "配信中や録画前に見るべき状態と修復候補を同じパネルに出す。",
  "publish": "GitHub Release / BOOTH",
  "surface": "OBSStreaming product spec + CLI validation core",
  "entity": "stream diagnostic",
  "requiredFields": [
    "id",
    "title",
    "obsScene",
    "sourceName",
    "logPath",
    "expectedState"
  ],
  "warningField": "recoveryHint",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
