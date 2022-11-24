## ITSumma. Тестовое задание для фронтенд-разработчика 
Разработать примитивный менеджер директорий (IDE style), обладающий следующим функционалом:
- Построение дерева каталогов.
- Раскрытие / скрытие содержимого отдельного каталога.
- Создание нового каталога.
- Редактирование существующего каталога.
- Удаление каталога со всем его содержимым.

Требования:
- Сделать пулреквест в публичный репозиторий
- Использование React, Typescript
- Соответсвие кода правилам Tslint
- Для манипуляции с данными требуется взаимодействовать с REST API.
- Формы редактирования и добавления требуется реализовать с помощью всплывающих окон.
- Перед удалением необходимо показать всплывающее окно для подтверждения.
>
Так же следует учесть, что любая директория не может содержать две и более поддиректории с одинаковым именем. (Провалидировать перед отправкой данных)

Пожелания:
- Использование react hooks вместо классов
- Использование context + useReducer вместо redux
## Запустить приложение:
```
    npm run start
```

## Directory API

Host указан в **.env.example**
>
Endpoint **/dir**

##
* ##### Получение списка директори
    ```
    GET /dir
    ```
    ```
    Response
    [] {
      id string
      name string
      parent_id string
    }
    ```

* ##### Создание директории 
    ```
    POST /dir
    Body
    {
      id string
      name string
      parent_id string
    }
    ```
  ```
  Response
  {
    id string
    name string
    parent_id string
  }
  ```
* ##### Редактирование директории 
    ```
    PATCH /dir/{id}
    Body
    {
      name string
      parent_id string
    }
    ```
  ```
  Response
  {
    id string
    name string
    parent_id string
  }
  ```
* ##### Удаление директории 
    ```
    DELETE /dir/{id}
    ```
  ```
  Response
  {
  }
  ```
