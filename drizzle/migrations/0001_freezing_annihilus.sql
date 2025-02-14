ALTER TABLE "users" ADD COLUMN "followers" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "followings" uuid NOT NULL;