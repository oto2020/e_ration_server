git clone https://github.com/oto2020/e_ration_server.git

cd e_ration_server

cp .env_copy .env

nano .env
DATABASE_URL задать своё имя/пароль пользователя БД

mysql > CREATE DATABASE foods;

npm i
npm install -g ts-node

npm run generate-api-key

Пересборка БД:
npx prisma generate && rm -rf prisma/migrations && npx prisma migrate reset --force && npx prisma migrate dev --name auto_migration && npm run seed && npm run server


В процессе работы сервера можно менять PRODUCTION_MODE в .env для управления необходимостью предоставления api-key в заголовке запроса

Для генерации src/graphql.tsx хуков (при запущенном сервере):
npm run codegen && git add . && git commit -m "graphql.tsx generate codegen" && git push


