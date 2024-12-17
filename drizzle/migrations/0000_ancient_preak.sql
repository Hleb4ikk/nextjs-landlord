CREATE TYPE "public"."role" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(128) NOT NULL,
	"email" varchar(256) NOT NULL,
	"age" integer NOT NULL,
	"hashed_password" varchar NOT NULL,
	"role" "role" DEFAULT 'user' NOT NULL,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "advertisements" (
	"advertisement_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"author_id" uuid NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(1024) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ad-images" (
	"image_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"advertisement_id" uuid NOT NULL,
	"image_url" varchar(1024) NOT NULL,
	"added_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "advertisements" ADD CONSTRAINT "advertisements_author_id_users_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ad-images" ADD CONSTRAINT "ad-images_advertisement_id_advertisements_advertisement_id_fk" FOREIGN KEY ("advertisement_id") REFERENCES "public"."advertisements"("advertisement_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
