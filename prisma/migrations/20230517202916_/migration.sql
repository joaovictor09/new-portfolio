-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "comments_id_key" ON "comments"("id");
