const fs = require('fs');
const path = require('path');

// Функция для модификации значения
function valueModificate(value) {
  return parseFloat((100 / value).toFixed(3)); // Модифицируем значение 
}

// Функция для чтения и записи файла
function modifyProductMeasure() {
  const filePath = path.join(__dirname, 'productClearWeight.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Ошибка при чтении файла:", err);
      return;
    }

    // Парсим JSON из файла
    let productMeasures;
    try {
      productMeasures = JSON.parse(data);
    } catch (parseErr) {
      console.error("Ошибка при парсинге JSON:", parseErr);
      return;
    }

    // Модифицируем каждый объект в массиве
    const modifiedMeasures = productMeasures.map(measure => {
      if (measure.value) {
        measure.value = valueModificate(measure.value);
      }
      return measure;
    });

    // Сериализуем массив обратно в JSON
    const jsonToWrite = JSON.stringify(modifiedMeasures, null, 2);

    // Записываем модифицированные данные обратно в файл
    fs.writeFile(filePath, jsonToWrite, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error("Ошибка при записи файла:", writeErr);
      } else {
        console.log("Данные успешно обновлены и сохранены.");
      }
    });
  });
}

// Вызываем функцию
modifyProductMeasure();
