// Импорты необходимых модулей
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

// Создание клиента Prisma
const prisma = new PrismaClient();

// Определение типов для данных
interface Category {
    id: number;
    name: string;
    desc?: string;
}

interface Product {
    id: number;
    name: string;
    categoryId: number;
}

interface Nutrient {
    id: string;
    name: string;
    categoryId: number;
}

interface ProductNutrient {
    id: number;
    productId: number;
    nutrientId: string;
    valueString: string;
    valueAmount: number;
    valueExponent: number;
}

interface ProductTotalWeight {
    id: number;
    productId: number;
    value: number;
    desc?: string;
}

interface ProductMeasure {
    id: number;
    productId: number;
    name: string;
    value: number;
    desc?: string;
}

// Функция для загрузки данных из JSON файла
async function loadJson<T>(filename: string): Promise<T> {
    const filePath = path.join(__dirname, filename);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData) as T;
}

// Функция для начального заполнения базы данных
async function seedData(): Promise<void> {
    const productData = await loadJson<Product[]>('product.json');
    const productCategoryData = await loadJson<Category[]>('productCategory.json');
    const nutrientData = await loadJson<Nutrient[]>('nutrient.json');
    const nutrientCategoryData = await loadJson<Category[]>('nutrientCategory.json');
    const productNutrientData = await loadJson<ProductNutrient[]>('productNutrient.json');
    const productTotalWeightData = await loadJson<ProductTotalWeight[]>('productTotalWeight.json');
    const productMeasureData = await loadJson<ProductMeasure[]>('productMeasure.json');

    for (const category of productCategoryData) {
        await prisma.productCategory.upsert({
            where: { id: category.id },
            update: { name: category.name, desc: category.desc },
            create: category
        });
    }
    console.log(`productCategory готов!`);


    // Заполнение таблицы категорий питательных веществ
    for (const nutrientCategory of nutrientCategoryData) {
        await prisma.nutrientCategory.upsert({
            where: { id: nutrientCategory.id },
            update: { name: nutrientCategory.name, desc: nutrientCategory.desc },
            create: nutrientCategory
        });
    }
    console.log(`nutrientCategory готов!`);

    for (const product of productData) {
        await prisma.product.upsert({
            where: { id: product.id },
            update: { name: product.name, categoryId: product.categoryId },
            create: product
        });
    }
    console.log(`product готов!`);

    for (const nutrient of nutrientData) {
        await prisma.nutrient.upsert({
            where: { id: nutrient.id },
            update: { name: nutrient.name, categoryId: nutrient.categoryId },
            create: nutrient
        });
    }
    console.log(`nutrient готов!`);

    for (const productNutrient of productNutrientData) {
        await prisma.productNutrient.upsert({
            where: { id: productNutrient.id },
            update: productNutrient,
            create: productNutrient
        });
    }
    console.log(`productNutrient готов!`);

    for (const productTotalWeight of productTotalWeightData) {
        await prisma.productTotalWeight.upsert({
            where: { id: productTotalWeight.id },
            update: productTotalWeight,
            create: productTotalWeight
        });
    }
    console.log(`productTotalWeight готов!`);

    for (const msr of productMeasureData) {
        await prisma.productMeasure.upsert({
            where: { id: msr.id },
            update: msr,
            create: msr
        });
    }
    console.log(`productMeasure готов!`);
}

// Запуск функции начального заполнения и обработка возможных ошибок
seedData().catch((error) => {
    console.error('Ошибка при начальном заполнении данных:', error);
    prisma.$disconnect();
    process.exit(1);
});
