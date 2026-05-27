/*
  Warnings:

  - You are about to drop the column `cursoId` on the `estudiante` table. All the data in the column will be lost.
  - You are about to drop the `curso` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eventoId` to the `Estudiante` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `estudiante` DROP FOREIGN KEY `Estudiante_cursoId_fkey`;

-- DropIndex
DROP INDEX `Estudiante_cursoId_idx` ON `estudiante`;

-- AlterTable
ALTER TABLE `estudiante` DROP COLUMN `cursoId`,
    ADD COLUMN `eventoId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `curso`;

-- CreateTable
CREATE TABLE `Evento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `hora` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Estudiante_eventoId_idx` ON `Estudiante`(`eventoId`);

-- AddForeignKey
ALTER TABLE `Estudiante` ADD CONSTRAINT `Estudiante_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Evento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
