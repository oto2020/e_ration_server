git clone https://github.com/oto2020/e_ration_server.git

cd e_ration_server

cp .env_copy .env

nano .env
DATABASE_URL задать своё имя/пароль пользователя БД

mysql > CREATE DATABASE foods;

npm i
npm install -g ts-node

npm run generate-api-key

npx prisma generate && npx prisma migrate reset --force && npx prisma migrate dev --name auto_migration
npm run seed 
npm run server


pm2 start "cd /root/e_ration_server && npm run server" -n "e_ration_server3006"
pm2 status
pm2 save

В процессе работы сервера можно менять PRODUCTION_MODE в .env для управления необходимостью предоставления api-key в заголовке запроса