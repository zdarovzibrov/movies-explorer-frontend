#### *movies-explorer-frontend*
---
###### *Фронтенд. Диплом. Зибров Михаил*
#### https://github.com/zdarovzibrov/movies-explorer-frontend
###### *Ссылка на макет:* ``` Яндекс диск: https://disk.yandex.ru/d/uZEH13qfWJvquQ ```
# Приложение Movies Explorer
| Метод запроса | Описание |
|-----------|----------------|
| `name `      | «Жак-Ив Кусто»; |
| `about `      | «Исследователь»; |
| `avatar`      |<img width="130" src="https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png">  |
#### *Описание*
---
Приложение Movies Explorer - сервис с поиском фильмов и сохранением их в личном кабинете.

Дипломный проект Яндекс.Практикума по специальности "Веб-разработчик".

## Запуск APP

* git clone https://github.com/zdarovzibrov/movies-explorer-frontend
* git clone https://github.com/zdarovzibrov/movies-explorer-api
* в папке `movies-explorer-api`
  - для установки зависимостей в терминале набрать `npm i`
  - набрать в терминале `npm run dev` для запуска режима разработчика
  - набрать в терминале `npm start` для запуска в режиме "Продакшн"
  - набрать в терминале `npm run lint` для тестирования на ошибки линтера

* в папке `movies-explorer-frontend`
  - набрать в терминале `npm i`
  - набрать в терминале `npm start` для запуска режима разработчика
  - набрать в терминале `npm build` для сборки проекта
  - набрать в терминале`npm run test` для тестирования на ошибки линтера

```shell
npm install
````

* Для запуска в dev-режиме:

```shell
npm run start
```

* Для сборки в production-режиме:

```shell
npm run build
```

#### *Используемые технологии*
---
![https://img.shields.io/badge/-Mongo%20DB-brightgreen](https://img.shields.io/badge/-Mongo%20DB-brightgreen)
![https://img.shields.io/badge/-Express-important](https://img.shields.io/badge/-Express-important)
![https://img.shields.io/badge/-React%20JS-blue](https://img.shields.io/badge/-React%20JS-blue)
![https://img.shields.io/badge/-Node%20JS-success](https://img.shields.io/badge/-Node%20JS-success)
* React Context
* адаптивная верстка: Flexbox, Grid layout, CSS media queries
* семантическая верстка HTML5
* сборка с помощью CRA (webpack)
* Javascript: классы, промисы, ES6 modules, etc
* переиспользуемые компоненты React
* React Hooks (useState, useEffect, useContext, useRef, кастомные хуки)
* работа с HTTP сервером с помощью fetch
* Динамическая валидация форм средствами React
* React-router-dom (Route, Redirect, Link), protected routes
* Авторизация через передачу JWT-токена в cookies
