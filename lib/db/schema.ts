import { pgTable, serial, text, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";

// Changelog 아이템 타입 (improvements, fixes, patches에 들어가는 항목)
export type ChangelogItem = {
  text: string;
};

// changelogs 테이블 정의
export const changelogs = pgTable("changelogs", {
  id: serial("id").primaryKey(),
  version: text("version").notNull(),
  date: text("date").notNull(), // "Dec 17, 2025" 형식
  title: text("title").notNull(),
  description: text("description").notNull(),
  // JSON 배열로 저장 (각각 { text: string } 형태)
  improvements: jsonb("improvements").$type<ChangelogItem[]>().default([]),
  fixes: jsonb("fixes").$type<ChangelogItem[]>().default([]),
  patches: jsonb("patches").$type<ChangelogItem[]>().default([]),
  // 주요 changelog 여부 및 유튜브 URL (선택)
  isFeatured: boolean("is_featured").default(false).notNull(),
  youtubeUrl: text("youtube_url"),
  // 생성/수정 시간
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// TypeScript 타입 추출
export type Changelog = typeof changelogs.$inferSelect;
export type NewChangelog = typeof changelogs.$inferInsert;
