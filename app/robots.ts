import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/", "/test/"],
      },
    ],
    sitemap: "https://solhun.com/sitemap.xml",
  }
}
