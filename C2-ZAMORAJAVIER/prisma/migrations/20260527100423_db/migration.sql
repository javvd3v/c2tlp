/*
  Warnings:

  - The primary key for the `estudiante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fechaNac` on the `estudiante` table. All the data in the column will be lost.
  - You are about to drop the column `run` on the `estudiante` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `estudiante` DROP PRIMARY KEY,
    DROP COLUMN `fechaNac`,
    DROP COLUMN `run`,
    MODIFY `eventoId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`eventoId`);
