import { BusinessOwnerArticlePage } from "@/components/business-owner-article-page";
import { buildEditorialMetadata } from "@/data/editorial-article-types";
import { getEditorialArticle } from "@/data/editorial-articles";

const article = getEditorialArticle(
  "hotel-direct-booking-search-leakage-audit",
)!;

export const metadata = buildEditorialMetadata(article);

export default function Page() {
  return <BusinessOwnerArticlePage article={article} />;
}
