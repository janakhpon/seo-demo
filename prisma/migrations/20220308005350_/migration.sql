/*
  Warnings:

  - You are about to drop the column `distribution` on the `member` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_member" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "name_jp" TEXT,
    "image" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "devilfruit" TEXT NOT NULL
);
INSERT INTO "new_member" ("age", "devilfruit", "image", "name", "name_jp", "origin") SELECT "age", "devilfruit", "image", "name", "name_jp", "origin" FROM "member";
DROP TABLE "member";
ALTER TABLE "new_member" RENAME TO "member";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
