# Описание

В минимальной реализации сервис счетчиков имеет три метода Increment/Decrement/Current для обновления/получения текущего значения [counter.proto(GRPC)](../../src/Otus.Highload.Counter/Protos/counter.proto)


Адреса сервисов
  
- API http://localhost:5000/swagger/index.html
- Dialogs API http://localhost:5001/swagger/index.html
- Counter http://localhost:7001
- RabbitMQ http://localhost:15672  (highload/password)
- Postresql localhost:6543  (highload/password)
- Hangfire http://localhost:5000/hangfire

Авторизация:
<details>
<summary>Пользователь 1</summary>
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
<summary>Пользователь 2</summary>
<code>curl -X 'POST' \
  'http://localhost:5000/login' \
  -H 'accept: text/plain' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "id": "00001fa9-9063-4c4c-ac67-df5e409ba626",
  "password": "string"
}'</code>
</details>

Далее в методах отправки сообщения и получения диалога с пользователем используем этот токен

Реализован функционал:

- Разработан сервис счетчиков
- Обеспечена консистентность между счетчиком и реальным числом непрочитанных сообщений. Использован паттерн SAGA.
- Добавлен метод API для получения текущего числа непрочитанных сообщений

# Запуск
Выполнить

<code>docker-compose --profile postgres up -d</code>

Надо дождаться когда отработает data-loader-1 (это загрузка данных в таблицы)

- Авторизуемся под пользователем <strong>Пользователь 1</strong>
- Через метод dialog/{user_id}/send отправляем сообщение <strong>Пользователь 2</strong>
- Авторизуемся под пользователем <strong>Пользователь 2</strong>
- Через метод dialog/{user_id}/unread получаем количество непрочитанных сообщений от <strong>Пользователь 1</strong>

Имитируем сбой в сервисе счетчиков
<code>docker-compose --profile postgres stop counter</code>

- Авторизуемся под пользователем <strong>Пользователь 1</strong>
- Через метод dialog/{user_id}/send отправляем сообщение <strong>Пользователь 2</strong>
- Получаем ошибку, т.к. сообщение сначала было сохранено, а потом удалено на этапе выполнения компенсационных действий в связи с отказом сервиса счетчиков
- Авторизуемся под пользователем <strong>Пользователь 2</strong>
- Через метод dialog/{user_id}/unread получаем количество непрочитанных сообщений от <strong>Пользователь 1</strong>

Результат: Обеспечена консистентность между счетчиком и реальным числом отправленных сообщений

# Описание реализации

Сервис счетчиков использует redis [incr](https://redis.io/docs/latest/commands/incr)/[decr](https://redis.io/docs/latest/commands/decr) для изменения значения
При вызове метода dialog/{user_id}/send в Dialogs API сначала происходит сохранение сообщения, далее вызывается метод Increment в сервисе счетчиков, если он выполнился с ошибкой тогда вызывается компенсирующий код который удаляет только что сохраненное сообщение.

Взаимодействие с сервисом счетчиков происходит по GRPC
