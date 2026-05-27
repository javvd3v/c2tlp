/*
  Warnings:

  - You are about to drop the column `nombre` on the `evento` table. All the data in the column will be lost.
  - Added the required column `imagen` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lugar` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topePersonas` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `evento` DROP COLUMN `nombre`,
    ADD COLUMN `imagen` VARCHAR(255) NOT NULL,
    ADD COLUMN `lugar` VARCHAR(150) NOT NULL,
    ADD COLUMN `titulo` VARCHAR(100) NOT NULL,
    ADD COLUMN `topePersonas` INTEGER NOT NULL,
    ADD COLUMN `valor` INTEGER NOT NULL;
