/*
  Warnings:

  - The primary key for the `estudiante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `run` to the `Estudiante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estudiante` DROP PRIMARY KEY,
    ADD COLUMN `run` VARCHAR(20) NOT NULL,
    MODIFY `eventoId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`run`);
