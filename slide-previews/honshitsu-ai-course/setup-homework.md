# 任意宿題: 開発環境セットアップ

このマニュアルは、Day 2のVibe Codingや簡易ツール試作を手元で試したい人向けの任意準備です。講座参加の必須条件ではありません。

## ゴール

Day 2前に、できる範囲で次の状態を目指します。

- GitHubアカウントを作り、ログインできる
- Antigravityをインストールし、起動できる
- 任意でClaude Codeをインストールし、`claude --version` が確認できる
- 講座用の作業フォルダを1つ作り、次に開ける状態にする

## Day 1後: できれば準備すること

### 1. GitHubアカウントを作る

1. <https://github.com/> を開く
2. `Sign up` から個人アカウントを作成する
3. メール認証を完了する
4. 可能なら2要素認証も設定する

講座では、GitHubを「コードを書く人だけの場所」ではなく、試作品、メモ、プロンプト、学習ログを残す場所として扱います。

### 2. Gitを使える状態にする

すでにGitが入っている人は、この確認だけで十分です。

```bash
git --version
```

初めて使う場合は、GitHub公式の「Set up Git」を見ながら、名前とメールアドレスを設定してください。

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 3. Antigravityを入れる

1. 公式ダウンロードページを開く: <https://antigravity.google/download>
2. 自分のOSに合うインストーラーを選ぶ
3. インストール後、Antigravityを起動する
4. 空のフォルダを1つ開けるか確認する

講座用のフォルダ名は、例として `honshitsu-ai-practice` で構いません。

### 4. 任意でClaude Codeを入れる

Claude Codeは任意です。ターミナル操作に抵抗がない人、または講座後にコーディングAgentを試したい人だけ進めてください。

macOS / Linux / WSLの場合:

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

Windows PowerShellの場合:

```powershell
irm https://claude.ai/install.ps1 | iex
claude --version
```

インストール後は、作業フォルダで次を実行し、ブラウザ認証へ進みます。

```bash
claude
```

Claude Codeは利用可能なプランやアカウント条件があります。使えない場合は無理に進めず、AntigravityとGitHubだけで問題ありません。

## Day 2後: できれば残すこと

Day 2で作った試作品やメモは、次に開ける場所へ残します。

1. GitHubで練習用リポジトリを1つ作る
2. ローカルに `honshitsu-ai-practice` フォルダを作る
3. Antigravityでそのフォルダを開く
4. 次のファイルを入れる

```text
README.md
prompts.md
notes.md
prototype/
```

最低限、`README.md` に次の3つを書いておけば十分です。

```markdown
# 本質のAI講座 試作メモ

## 試したい業務課題

## AIに渡した文脈

## 次に直すこと
```

## 確認チェックリスト

- GitHubにログインできる
- メール認証が終わっている
- `git --version` が表示される
- Antigravityを起動できる
- 講座用フォルダを開ける
- 任意: `claude --version` が表示される

## うまくいかないとき

- GitHubのメール認証が終わっていない場合、リポジトリ作成など一部操作が進められないことがあります。
- Gitの認証で迷う場合は、まずブラウザでGitHubにログインできることを確認してください。
- Antigravityの画面やボタン名は更新される可能性があります。公式ダウンロードページの最新表示を優先してください。
- Claude Codeが使えない場合は、アカウント条件やプランを確認してください。講座では必須にしません。

## 公式リンク

- GitHubアカウント作成: <https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github>
- Gitのセットアップ: <https://docs.github.com/en/get-started/git-basics/set-up-git>
- GitHub SSH接続: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>
- GitHub CLIログイン: <https://cli.github.com/manual/gh_auth_login>
- Antigravity公式ダウンロード: <https://antigravity.google/download>
- Claude Codeセットアップ: <https://code.claude.com/docs/en/setup>
