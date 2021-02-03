# Проект на Реакте с авторизацией и регистрацией
 
### Обзор

* Figma
* Описание
* GitHub Pages

**Figma**

* [Ссылка на макет в Figma](https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1)

**Описание**

Проект "Место" - это адаптивный одностраничный сайт про места в России. Страница сверстана с использованием flex и grid-layout. Адаптирована под разрешения 320px и выше. Используется React и хуки.

Функциональность предыдущих спринтов:
- получение инфо о профиле с сервера;
- прлучение карточек для отрисовки с сервера;
- открытие попапов при нажатии на соответствующие кнопки;
- возможность редактирования имени и описания профиля; 
- плавно всплывающие попапы, закрываются при нажатии на кнопку в виде крестика. 
- обновление данных на странице;
- возможность удаления фото;
- возможность лайкать фото;
- валидация форм;
- возможность закрытия попапов при нажатии на overlay и на кнопку Esc.

Добавленые фичи:
- регистрация;
- авторизация;
- авторизация при повторном посещении сайта (localStorage).

Все запросы на авторизацию, регистрацию и проверку токена работают через сервис `https://auth.nomoreparties.co`. Остальные запросы, не относящиеся к этой проектной работе - к бэкенду из предыдущих спринтов.

**GitHub Pages**

* [Ссылка на проект в GitHub Pages](https://kozhevatova.github.io/react-mesto-auth/)

