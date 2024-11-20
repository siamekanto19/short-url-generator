/*
  Warnings:

  - A unique constraint covering the columns `[modifiedUrlPath]` on the table `ShortUrl` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_modifiedUrlPath_key" ON "ShortUrl"("modifiedUrlPath");
