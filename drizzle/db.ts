import { drizzle } from 'drizzle-orm/postgres-js';

import * as ImagesTable from './schemas/ad-images';
import * as AdvertisementsTable from './schemas/advertisements';
import * as UsersTable from './schemas/users';

import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL!, { idle_timeout: 30 });
export const db = drizzle(client, { schema: { ImagesTable, AdvertisementsTable, UsersTable }, logger: true });
