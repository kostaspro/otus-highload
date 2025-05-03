# Описание

В минимальной реализации для хранение и получение данных в модуле диалогов предлагается использовать модуль redis

<details>
<summary>dialogs.lua</summary>
<code>#!lua name=dialogs
local function get_dialogs(keys,args)
    return redis.call('zscan','dialogs',0,'match',args[1])[2]
end
local function set_dialogs(keys,args)
    redis.call('zadd','dialogs',args[1],args[2])
end
redis.register_function('get_dialogs', get_dialogs)
redis.register_function('set_dialogs', set_dialogs)
}'</code>
</details>

Адреса сервисов
  
- API http://localhost:5000/swagger/index.html
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

- Получение диалога между двумя пользователям (GET /dialog/{user_id}/list из спецификации)
- Отправка сообщения пользователю (POST /dialog/{user_id}/send из спецификации)

# Запуск
Выполнить

<code>docker-compose --profile postgres up -d</code>

Надо дождаться когда отработает data-loader-1 (это загрузка данных в таблицы)

Далее авторизуемся и отправляем сообщения под пользователем <strong>Пользователь 1</strong> <strong>Пользователю 2</strong>

Через метод получения диалогов получаем данные

# Тесты

- [До применения In-Memory](https://kostaspro.github.io/otus-highload/homeworks/16/before/report/index.html)
- [После применения In-Memory](https://kostaspro.github.io/otus-highload/homeworks/16/after/report/index.html)

Сравнение времени ответа:
После применения In-Memory время ответа на запросы по 95-му перцентилю для медота <strong>Получение диалога между двумя пользователями</strong> снизилось с 1741 до 3, а для метода <strong>Отправка сообщения пользователю</strong> снизилось с 666 до 37

