/*
  Warnings:

  - Added the required column `dateCreated` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notes` ADD COLUMN `dateCreated` VARCHAR(191) NOT NULL;
