DROP TABLE "followers" CASCADE;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "followers";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "followings";