# deposit.manage.desktop.app
入金管理帳デスクトップアプリのプロトタイプです

## MySQL コンテナの起動
```console
docker-compose up -d
```

## Laravel ライブラリのインストール
```console
cd ./backend-laravel
```
```console
composer install
```

## .env ファイルの作成
/backend-laravel 直下の .env.example をコピーして .env ファイルを作成
```console
cp ./.env.example ./.env
```

## DB 接続情報の記載
.env ファイルの DB 接続情報を書き直す
```text
DB_CONNECTION=mysql
DB_HOST=192.168.99.100
DB_PORT=13306
DB_DATABASE=products
DB_USERNAME=fsedu
DB_PASSWORD=secret
```

## アプリキーの生成
```console
php artisan key:generate
```

## DB のマイグレーション
```console
php artisan migrate
```

## Laravel Passport をインストール
```console
php artisan passport:install
```

## ダミーデータの生成
```console
php artisan tinker
App\Models\User::factory()->count(10)->create()
App\Models\Product::factory()->count(10)->create()
```

## URL Resource の確認
```console
php artisan route:list
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
```
http://localhost:8081/
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
 
