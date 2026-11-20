import { redirect } from "next/navigation";
import featuresData from "@/data/features.json";

export async function generateStaticParams() {
  return featuresData.map((f: any) => ({
    slug: f.slug,
  }));
}

export default async function ProductSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/features/${slug}`);
}
