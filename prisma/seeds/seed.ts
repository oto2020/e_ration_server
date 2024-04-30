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
    number: number;
    title: string;
    categoryId: number;
}

interface Nutrient {
    id: string;
    number: number;
    name: string;
    categoryId: number;
}

interface ProductNutrient {
    id: number;
    productId: number;
    nutrientId: string;
    valueString?: string;
    valueAmount?: number;
    valueExponent?: number;
}

interface ProductNetWeight {
    id: number;
    productId: number;
    name: string;
    value: number;
    desc?: string;
}

interface ProductMsr {
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
    const productNetWeightData = await loadJson<ProductNetWeight[]>('productNetWeight.json');
    const productMsrData = await loadJson<ProductMsr[]>('productMsr.json');

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
            update: { title: product.title, categoryId: product.categoryId },
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

    for (const netWeight of productNetWeightData) {
        await prisma.productNetWeight.upsert({
            where: { id: netWeight.id },
            update: netWeight,
            create: netWeight
        });
    }
    console.log(`productNetWeight готов!`);

    for (const msr of productMsrData) {
        await prisma.productMsr.upsert({
            where: { id: msr.id },
            update: msr,
            create: msr
        });
    }
    console.log(`productMsr готов!`);
}

// Запуск функции начального заполнения и обработка возможных ошибок
seedData().catch((error) => {
    console.error('Ошибка при начальном заполнении данных:', error);
    prisma.$disconnect();
    process.exit(1);
});
