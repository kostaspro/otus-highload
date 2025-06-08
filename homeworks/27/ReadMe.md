# Описание

Для организации master-slave конфигурации использован образ от bitnami

Адреса сервисов
  
- API http://localhost:5000/swagger/index.html
- RabbitMQ http://localhost:15672  (highload/password)
- Postresql (master) localhost:6543  (highload/password)
- Postresql (slave) localhost:6544  (highload/password)
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

Далее в методе поиска анкет пользователей используем этот токен

Реализован функционал:

- Настроена балансировка slave postgresql через haproxy [haproxy.cfg](../../docker/simple-replication/haproxy.cfg)
- Настроена балансировка api через nginx [nginx.conf](../../docker/simple-replication/nginx.conf)

# Запуск
Выполнить

<code>docker-compose --profile postgres-replication up -d</code>

Надо дождаться когда отработает data-postgres-replication-1 (это загрузка данных в таблицы)

В качестве нагрузки используем метод поиска анкет пользователей (user/search)

# Тесты

- [Отключение один из слейвов PostgreSQL](https://kostaspro.github.io/otus-highload/homeworks/27/kill-postgresql/report/index.html)
- [Отключение одного из инстансов API](https://kostaspro.github.io/otus-highload/homeworks/27/kill-api/report/index.html)

В обоих случаях количество ошибочных запросов было примерно 3% (система осталась работоспособной)
