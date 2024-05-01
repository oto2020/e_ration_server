import fs from 'fs';
import crypto from 'crypto'

// Функция для генерации случайного API ключа
const generateApiKey = () => {
    return crypto.randomBytes(32).toString('hex');
}

// Путь к файлу .env
const envFilePath = './.env';

// Чтение содержимого файла .env
const existingEnv = fs.readFileSync(envFilePath, 'utf-8');

// Разделение содержимого файла на строки
const lines = existingEnv.split('\n');

// Переменная для отслеживания того, был ли найден API_KEY в файле
let apiKeyFound = false;

// Поиск строки с API_KEY и её замена
const updatedLines = lines.map(line => {
    if (line.startsWith('API_KEY=')) {
        // Генерация нового API ключа
        const newApiKey = generateApiKey();
        apiKeyFound = true;
        return `API_KEY="${newApiKey}"`; // Замена только значения, сохраняя кавычки
    }
    return line;
});

// Если API_KEY не был найден, добавляем новую строку в конец файла
if (!apiKeyFound) {
    const newApiKey = generateApiKey();
    updatedLines.push(`API_KEY="${newApiKey}"`);
}

// Сохранение обновленных строк в файл .env
const updatedEnv = updatedLines.join('\n');
fs.writeFileSync(envFilePath, updatedEnv);

console.log(`API key updated and saved to .env file.`);
