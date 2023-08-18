-- CreateTable
CREATE TABLE "FavoriteCharts" (
    "id" SERIAL NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,

    CONSTRAINT "FavoriteCharts_pkey" PRIMARY KEY ("id")
);
