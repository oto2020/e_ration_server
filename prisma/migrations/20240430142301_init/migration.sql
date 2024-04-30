/*
  Warnings:

  - You are about to drop the column `number` on the `nutrient` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `nutrient` DROP COLUMN `number`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `number`;
