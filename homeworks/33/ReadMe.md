# Описание

В минимальной реализации бизнес-метрик по принципу RED реализованы 3 метрики на в методе 

POST /dialog/{user_id}/send:

- Счетчик успешно отправленных сообщений <strong>(R)</strong>
- Счетчик сообщений при отправке которых произошла ошибка (ошибка эмулируется остановкой сервиса <strong>Counter</strong> ) <strong>(E)</strong>
- Длина отправляемого сообщения для эмуляции duration <strong>(D)</strong>


Адреса сервисов
  
- API http://localhost:5000/swagger/index.html
- Dialogs API http://localhost:5001/swagger/index.html
- Counter http://localhost:7001
- RabbitMQ http://localhost:15672  (highload/password)
- Postresql localhost:6543  (highload/password)
- Hangfire http://localhost:5000/hangfire

Мониторинг

- Prometheus http://localhost:9090/targets
- Grafana http://localhost:3000
- Zabbix http://localhost- 

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

- Развернут Zabbix
- Развернут Prometheus
- Развертута Grafana
- Реализованы бизнес метрики в сервисе <strong>Dialogs API</strong> по принципу RED (http://api-dialogs:5067/metrics⁠)
- Техничекие метрики сервера (docker) собираются через zabbix-agent (с шаблоном [Docker by Zabbix agent 2](https://www.zabbix.com/ru/integrations/docker)) 
- Организован дашборд [дашборд](../../docker/grafana/dashboards/app_dashboard.json) в Grafana

# Запуск
Выполнить

<code>docker-compose --profile postgres up -d</code>

Надо дождаться когда отработает data-loader-1 (это загрузка данных в таблицы)

- Авторизуемся под пользователем <strong>Пользователь 1</strong>
- Через метод dialog/{user_id}/send отправляем сообщение <strong>Пользователь 2</strong>

Имитируем сбой в сервисе счетчиков
<code>docker-compose --profile postgres stop counter</code>

- Авторизуемся под пользователем <strong>Пользователь 1</strong>
- Через метод dialog/{user_id}/send отправляем сообщение <strong>Пользователь 2</strong>

# Скриншоты 

## Grafana

![message_added](https://kostaspro.github.io/otus-highload/homeworks/33/grafana/message_added.png)

![message_error](https://kostaspro.github.io/otus-highload/homeworks/33/grafana/message_error.png)

![message_duration](https://kostaspro.github.io/otus-highload/homeworks/33/grafana/message_duration.png)

## Zabbix

![data_collection_hosts](https://kostaspro.github.io/otus-highload/homeworks/33/zabbix/data_collection_hosts.png)

![cpu_usage](https://kostaspro.github.io/otus-highload/homeworks/33/zabbix/cpu_usage.png)

![memory_usage](https://kostaspro.github.io/otus-highload/homeworks/33/zabbix/memory_usage.png)

![network](https://kostaspro.github.io/otus-highload/homeworks/33/zabbix/network.png)