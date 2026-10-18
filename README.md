# ГоркиLand

Проверочный сайт бренда ГоркиLand / ООО «Лабораттория». Русская и английская версии, каталог аттракционов, комплексные решения для парков, проекты и сервис.

## Запуск

Node.js 22: `npm ci`, затем `npm run dev`. Проверки: `npm run verify`, `npm run build`, `npm run test:sites`.

GitHub Actions проверяет сборку и публикует `dist/client` на GitHub Pages. Проверочный адрес: https://esvdox.github.io/gorkiland-website/ . Действующий домен не изменяется.

## Контент

- Публичный источник номенклатуры, параметров и контактов: https://gorkiland.ru/ ; проверено 17.10.2026.
- `src/data.js`: семейства, тексты и проекты. `src/specifications.js`: выбранные параметры опубликованных исполнений; значения разных исполнений не являются единой конфигурацией.
- `src/services.js`: 10 направлений услуг на двух языках. Верхнее меню «Услуги» ведёт к отдельным раскрываемым описаниям; прямые ссылки вида `#service-spares` открывают нужную услугу.
- Наличие изделия в каталоге не означает наличие на складе. Новые направления предлагаются с индивидуальной проработкой.
- `public/assets/provenance.json`: происхождение исходных изображений. Изображение первого экрана — художественная адаптация опубликованной фотографии карусели «Орион»; фотографии в каталоге и проектах взяты из материалов производителя. Подробности в `CONTENT-SOURCES.md`.
- Логотип выбран заказчиком. SVG получен автоматической трассировкой выбранного растрового оригинала, без ручной замены формы.

## Обращения

Форма подготавливает письмо в почтовой программе посетителя. Сайт не отправляет и не сохраняет введённые сведения. Доставка заявки на сервер и CRM не подключены. Получатель: опубликованный адрес `sales@gorkiland.ru`. На сайте доступны прямые ссылки email и телефон.

Аналитика, сторонние трекеры и cookies не подключены. Для полноценного запуска на основном домене нужны согласованные обработка обращений, юридические тексты, статусы исполнений и финальная проверка переводов.

## Материалы

Фотографии и бренд принадлежат их правообладателям; не предназначены для свободного повторного использования сторонними проектами. Inter распространяется по SIL OFL: `src/assets-font/OFL.txt`. Зависимости сохраняют собственные лицензии.

Homepage revision: four photographic entry points. Dedicated screens use ?page=catalog|solutions|projects|manufacturing|service with RU/EN and direct service anchors, supported on GitHub Pages refresh.

## Two independently accessible designs

- Site №1: https://esvdox.github.io/gorkiland-website/ — the retained INTAMIN-inspired version; original snapshot tagged `site-1-intamin`.
- Site №2: https://esvdox.github.io/gorkiland-website/site-2/ — selected second B&M-inspired concept. White approved logo, full-width Orion image, left headline, company section, expandable menu with all ten services.

Both designs share canonical product data and enquiry dialogs. The new design has its own HTML entry, main-bm.jsx, BmHeader/BmHome and scoped bm.css. Query-addressed sections and language state remain within their respective entry paths; refreshing a nested service link is supported by the static HTML entry. Vite builds both index.html and site-2/index.html in one Pages artifact. No third-party ride images or video are used. The hero retains the existing artistic adaptation of the original Orion photograph, as documented in CONTENT-SOURCES.md. No new backend or CRM integration; the request form prepares an email in the visitor's mail application.
