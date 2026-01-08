import type { Metadata } from "next";
import { db, changelogs, type Changelog } from "@/lib/db";
import { desc } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";
import { PageWrapper } from "../../components/page-wrapper";
import { ChangelogClient } from "./changelog-client";

export const metadata: Metadata = {
  title: "बदलाव लॉग",
  description: "CLI Manager के लिए नवीनतम सुधार, नई सुविधाएं, बग फिक्स, और अपडेट्स के साथ अपडेट रहें।",
  openGraph: {
    title: "CLI Manager बदलाव लॉग - नवीनतम अपडेट्स और रिलीज़",
    description: "CLI Manager के लिए नवीनतम सुधार, नई सुविधाएं, बग फिक्स, और अपडेट्स के साथ अपडेट रहें।",
    images: [
      {
        url: "/cli-main.png",
        width: 1200,
        height: 630,
        alt: "CLI Manager बदलाव लॉग",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLI Manager बदलाव लॉग - नवीनतम अपडेट्स और रिलीज़",
    description: "CLI Manager के लिए नवीनतम सुधार और अपडेट्स के साथ अपडेट रहें।",
    images: ["/cli-main.png"],
  },
  alternates: {
    canonical: "/changelog",
  },
};

// Fetch data from server
async function getChangelogs(): Promise<Changelog[]> {
  noStore(); // Disable caching completely
  try {
    const result = await db
      .select()
      .from(changelogs)
      .orderBy(desc(changelogs.createdAt));
    return result;
  } catch (error) {
    console.error("Failed to fetch changelogs:", error);
    return [];
  }
}

// --- Main Page (Server Component) ---
export default async function ChangelogPage() {
  const data = await getChangelogs();

  return (
    <PageWrapper>
      <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
        {/* Page Header */}
        <div className="pt-8 pb-12 md:pb-20 border-b border-[rgba(55,50,47,0.12)] mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#37322F] mb-4">
            बदलाव लॉग
          </h1>
          <p className="text-lg text-[#605A57] font-sans max-w-2xl">
            CLI Manager के लिए नवीनतम सुधार, फिक्स और अपडेट्स
            के साथ अपडेट रहें।
          </p>
        </div>

        {/* Changelog List */}
        <div className="flex flex-col">
          <div className="flex md:hidden text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-1">
            <span className="w-1/4">वर्शन</span>
            <span className="w-3/4 pl-8">विवरण</span>
          </div>

          {/* Desktop Header for columns */}
          <div className="hidden md:flex text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-1">
            <div className="w-1/4">वर्शन</div>
            <div className="w-3/4">विवरण</div>
          </div>

          <div className="w-full h-[1px] bg-[rgba(55,50,47,0.08)] mb-4"></div>

          {data.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              अभी तक कोई बदलाव लॉग उपलब्ध नहीं है।
            </div>
          ) : (
            <ChangelogClient changelogs={data} />
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
