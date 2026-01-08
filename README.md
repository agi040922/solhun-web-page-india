# CLI Manager India (Solhun India)

CLI Manager 인도 버전 웹사이트 - 힌디어 번역 및 인도 시장용 SEO 최적화

## Overview

이 레포지토리는 [CLI Manager](https://solhun.com) 웹사이트의 인도 버전입니다.

- **도메인**: https://india.solhun.com
- **언어**: 힌디어 (हिंदी)
- **Locale**: hi_IN

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL + Drizzle ORM
- **Payment**: Lemon Squeezy
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Features

- 모든 UI 텍스트 힌디어 번역
- 인도 시장용 SEO 메타데이터
- OpenGraph / Twitter Card 힌디어 지원
- JSON-LD 구조화 데이터

## Environment Variables

```env
DATABASE_URL=postgresql://...
LEMONSQUEEZY_API_KEY=...
LEMONSQUEEZY_STORE_ID=...
LEMONSQUEEZY_VARIANT_ID=...
NEXT_PUBLIC_APP_URL=https://india.solhun.com
ADMIN_API_KEY=...
LEMONSQUEEZY_WEBHOOK_SECRET=...
```

## Development

```bash
pnpm install
pnpm dev
```

## Related

- [CLI Manager (Global)](https://solhun.com)
- [CLI Manager GitHub](https://github.com/agi040922/solhun-web-page)
