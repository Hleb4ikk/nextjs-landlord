import { AdvertisementsTable } from './advertisements';
import { pgTable, timestamp, varchar, uuid } from 'drizzle-orm/pg-core';

export const ImagesTable = pgTable('ad-images', {
  id: uuid('image_id').primaryKey().defaultRandom(),
  adId: uuid('advertisement_id')
    .notNull()
    .references(() => AdvertisementsTable.id),
  imageUrl: varchar('image_url', { length: 1024 }).notNull(),
  addedAt: timestamp('added_at').defaultNow(),
});
