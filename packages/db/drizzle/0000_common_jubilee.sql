CREATE TABLE IF NOT EXISTS "urls" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"short_code" text NOT NULL,
	"long_url" text NOT NULL,
	"custom_alias" text,
	"user_id" uuid NOT NULL,
	"expiration_date" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "urls_short_code_unique" UNIQUE("short_code"),
	CONSTRAINT "urls_custom_alias_unique" UNIQUE("custom_alias")
);
