### test mindbox
---------------------------
### <a href="https://test-minbox.vercel.app/"> Live Demo</a>
---------------------------

Запуск приложения

```bash
npm i 
# или
npm install
#далее
npm run start
# для запуска тестов
nmp run test
```

###### перед ручным запуском приложения на хосте http://localhost:3000/ рекомендую очистить локальное хранилище, чтобы не произошло внезапных ошибок

###### Дизайн я придумывал на ходу, надеюсь он подойдет)
###### Адаптив отсутствует, решил не тратить на него время и сделать упор на функционал
---------------------------
### Архитектура приложения
###### за основу взята архитектура <a href="https://feature-sliced.design/ru/docs/get-started/overview">FSD</a>, и была немного упрощена для данного проекта, так как оригинальная методолгия, на мой взгляд, слишком сложная для данного приложения
#### !основное изменение в архитектуре! 
##### в папке pages лежат все компоненты относящиеся к данной странице, я не разбивал на entities/features/widgets
