const fs = require('fs');
const FILE_NAME = 'productTotalWeight.json';
// Чтение данных из JSON-файла
fs.readFile(FILE_NAME, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    try {
        // Преобразование JSON в объект JavaScript
        const jsonData = JSON.parse(data);

        // Удаление поля "name" из каждого объекта
        const newData = jsonData.map(obj => {
            delete obj.name;
            return obj;
        });

        // Преобразование обновленных данных в формат JSON
        const updatedData = JSON.stringify(newData, null, 2);

        // Запись обновленных данных в новый JSON-файл
        fs.writeFile(FILE_NAME, updatedData, 'utf8', (err) => {
            if (err) {
                console.error('Ошибка при записи в файл:', err);
                return;
            }
            console.log('Данные успешно обновлены и записаны в ' +  FILE_NAME);
        });
    } catch (error) {
        console.error('Ошибка при обработке JSON:', error);
    }
});
