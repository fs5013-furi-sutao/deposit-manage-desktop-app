# deposit.manage.desktop.app
入金管理帳デスクトップアプリのプロトタイプです

## MySQL コンテナの起動
```console
docker-compose up -d
```

## Laravel ライブラリのインストール
```console
composer install
```

## アプリキーの生成
```console
php artisan key:generate
```

## DB のマイグレーション
```console
php artisan migrate
```

## ダミーデータの生成
```console
php artisan tinker
App\Models\User::factory()->count(10)->create()
App\Models\Product::factory()->count(10)->create()
```

## バックエンドサーバの起動
```console
php artisan serve
```

## APIにアクセス
POST http://localhost:8000/api/register
POST http://localhost:8000/api/login

ページャー:  
GET http://localhost:8000/api/products/list

## Vue パッケージのインストール
```console
yarn
```

## Web アプリの起動
```console
yarn serve
```

## Electron のインストール
```console
vue add electron-builder
```

## Electron の起動
```console
yarn electron:serve
```

## インストーラ exe ファイルのビルド
```console
yarn electron:build
```
 electron-dist フォルダ内にインストーラが生成される。
 
