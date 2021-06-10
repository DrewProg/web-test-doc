# web-test-doc

Дипломный проект: веб-система составления документации тестирования ПО

Технологии:

- Backend: Node.js Express
- Frontend: React.js
- DB: PostgreSQL
- "dotenv" - переменные окружения
- "express-fileupload" - загрузка файлов на сервер
- "jsonwebtoken" - генерация JWT
- "sequelize" - ORM
- "uuid" - генерация уникальных id для именования файлов на сервере

Предварительная схема клиентской части архитектуры:

![architecture_schema](/figure/ClientSideDiagramm.png "Схема архитектуры")

Предварительная схема серверной части архитектуры:

![serverside_schema](/figure/ServerSideDiagramm.png "Схема серверной архитектуры")

Актуальная логическая схема БД:

<https://drive.google.com/file/d/1MU6eR53hcKwdtQLTESOTN70TSykz7gPy/view?usp=sharing>

Актуальная физическая схема БД:

<https://drive.google.com/file/d/1W4h-VFuiDJ0_2QRXt3HaBl5ZtsKMarp6/view?usp=sharing>

Актуальная Use Case диаграмма:

<https://drive.google.com/file/d/1FK2O3TtplfR0NXfIZy9UYcJ00FeeQgdx/view?usp=sharing>

Второстепенные задачи:

- Полноценная валидация nickname и password на сервере
- Добавить удаление и обновление

UPD 29.05.2021:

- Создан "каркас" приложения: React, Node.js Express
- Спроектированы схемы приложения
- Логическая схема БД (на доработке)
- Физическая схема БД (на доработке)

UPD 07.06.2021:

- Серверная часть: добавлены контролеры, модели, роутеры, middlewares, обработчик ошибок
- Создана БД
- Клиентская часть: выбрана другая архитектура: React.js+Mobx. Добавлена часть компонентов: topbar, login form
