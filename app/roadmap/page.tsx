import { Metadata } from "next";
import { RoadmapClient } from "./roadmap-client";
import { PageWrapper } from "@/components/page-wrapper";
import { db, roadmaps, type Roadmap } from "@/lib/db";
import { asc } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "रोडमैप | Solhun",
  description: "देखें कि हम किस पर काम कर रहे हैं और आगे क्या आने वाला है।",
};

// Fetch data from server
async function getRoadmaps(): Promise<Roadmap[]> {
  noStore(); // Disable caching completely
  try {
    const result = await db
      .select()
      .from(roadmaps)
      .orderBy(asc(roadmaps.order), asc(roadmaps.createdAt));
    return result;
  } catch (error) {
    console.error("Failed to fetch roadmaps:", error);
    return [];
  }
}

export default async function RoadmapPage() {
  const data = await getRoadmaps();

  return (
    <PageWrapper>
      <div className="w-full max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#37322F] mb-4 font-serif">
            डेवलपमेंट रोडमैप
          </h1>
          <p className="text-[#605A57] text-base md:text-lg leading-relaxed font-sans">
            यहां देखें कि हम वर्तमान में किस पर काम कर रहे हैं और आगे क्या बनाने की योजना है।
          </p>
        </div>
        <RoadmapClient roadmaps={data} />
      </div>
    </PageWrapper>
  );
}
