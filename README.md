## document
- [react_typescript 설명](#react_typescript-설명)
- [react_typescript説明](#react_typescript説明)
- [how to use react_typescript](#how-to-use-react_typescript)

## react_typescript 설명
react_typescript는 React(리액트)에서 Typescript(타입스크립트)를 사용하기 위한 설정에 관해 정리한 저장소(Repository)입니다. 이 저장소(Repository)를 제작하면서 작성한 블로그가 있습니다. 자세한 내용은 아래에 링크를 통해 확인하시기 바랍니다.

- [React에서 Typescript 사용하기](https://dev-yakuza.github.io/ko/react/typescript/)

### 사용 방법
아래에 명령어를 통해 react_typescript 저장소(Repository)를 복사(Clone)합니다.

```bash
git clone https://github.com/dev-yakuza/react_typescript.git
```

아래에 명령어로 필요한 라이브러리르 설치합니다.

```bash
npm install
```

아래에 명령어로 Webpack(웹팩) 개발 서버를 실행시킵니다.

```bash
npm start
```

개발 서버가 시작되면, 브라우저를 열고 `http://localhost:8080/`로 이동하여 `Hello World!`가 표시되는지를 확인합니다.

개발 서버를 중지시키고, 아래의 명령어로 React(리액트) 프로젝트를 빌드해 봅니다.

```bash
npm run build
```

빌드가 완료되면, `./dist/` 폴더를 확인할 수 있습니다.

## react_typescript説明
react_typescriptはReact(リアクト)でTypescript(タイプスクリプト)を使うため設定に関してまとめたレポジトリ(Repository)です。このレポジトリ(Repository)を作る時作成したブログポストがあります。詳しく内容は下記のリンクを確認してください。

- [ReactでTypescriptを使う](https://dev-yakuza.github.io/react/typescript/)

### 使い方
下記のコマンドでreact_typescriptレポジトリ(Repository)をコピー(Clone)します。

```bash
git clone https://github.com/dev-yakuza/react_typescript.git
```

下記のコマンドで必要なライブラリをインストールします。

```bash
npm install
```

下記のコマンドでWebpack(ウェブパック)開発サーバーを起動します。

```bash
npm typescript
```

開発サーバーが起動したら、ブラウザを開いて`http://localhost:8080/`に移動したら`Hello World!`が表示されることが確認できます。

開発サーバーを止めて、下記のコマンドでReact(リアクト)プロジェクトをビルドしてみます。

```bash
npm run build
```

ビルドが完了されたら、`./dist/`フォルダが生成されたことが確認できます。

## how to use react_typescript
react_typescript repository is about how to configure to use Typescript in React. there are blog posts about this repository. if you want to know more details, see the link below.

- [Use Typescript In React](https://dev-yakuza.github.io/en/react/typescript/)

### How to use
execute the command below to copy(clone) react_typescript repository.

```bash
git clone https://github.com/dev-yakuza/react_typescript.git
```

execute the command below to install libraries required the project.

```bash
npm install
```

execute the command below to typescript Webpack dev-server.

```bash
npm typescript
```

after typescripting the test server, open the browser and go to `http://localhost:8080/`. you can see `Hello World!` on the screen.

stop the dev server, and execute the command below to buidl React project.

```bash
npm run build
```

after building, you can see `./dist/` folder is created.