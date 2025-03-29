# Описание

В минимальной реализации Онлайн обновление ленты новостей предлагается следующим образом:

- websocket сервер интегрирован в приложение api
- Для маршрутизации сообщений RabbitMQ используется routing key
- Клиент websocket реализован в консольном приложении

Адреса сервисов
  
- API http://localhost:5000/swagger/index.html
- RabbitMQ http://localhost:15672  (highload/password)
- Postresql localhost:6543  (highload/password)
- Hangfire http://localhost:5000/hangfire

Авторизация:
<details>
<summary>Пользователь</summary>
<code>curl -X 'POST' \
  'http://localhost:5000/login' \
  -H 'accept: text/plain' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "id": "00001c75-ea07-4a8b-b9a7-fa4814a5f4e3",
  "password": "string"
}'</code>
</details>

<details>
<summary>Пользователь 1 (друг)</summary>
<code>curl -X 'POST' \
  'http://localhost:5000/login' \
  -H 'accept: text/plain' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "id": "00001fa9-9063-4c4c-ac67-df5e409ba626",
  "password": "string"
}'</code>
</details>

<details>
<summary>Пользователь 2 (друг celebrity)</summary>
<code>curl -X 'POST' \
  'http://localhost:5000/login' \
  -H 'accept: text/plain' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "id": "00005f77-a4a1-48e8-b064-f974afcd1c66",
  "password": "string"
}'</code>
</details>

Далее в методах создания поста и получения ленты из кэша используем этот токен

Реализован функционал:

- Создание поста (метод метод /post/create из спецификации)
- Асинхронное API с websocket
- Отложенная материализация ленты
- Формирование ленты производится через постановку задачи в очередь на часть друзей

# Запуск
Выполнить

<code>docker-compose --profile postgres up -d</code>

Надо дождаться когда отработает data-loader-1 (это загрузка данных в таблицы)
Контейнер ws-client-1 это клиент websocketa, который подписывается на обновление ленты (можно запустить несколько добавив в конец <code> --scale ws-client=2</code>)

Далее авторизуемся и создаем посты под пользователем <strong>Пользователь 1</strong>
В логах контейнера ws-client-1 видим что приходят сообщения
В логах hangfire <code>http://localhost:5000/hangfire/jobs/succeeded</code> видим задачи на формирование ленты и задачи на отправку события в RabbitMQ

Далее авторизуемся и создаем посты под пользователем <strong>Пользователь 2 (celebrity)</strong>
В логах контейнера ws-client-1 видим что сообщения не приходят
В логах hangfire <code>http://localhost:5000/hangfire/jobs/succeeded</code> также задачи на формирование ленты и задачи на отправку события в RabbitMQ не создаются
