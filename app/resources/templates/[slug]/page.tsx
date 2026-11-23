import { redirect } from "next/navigation";
import { TEMPLATES_DATA } from "@/data/templatesData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(TEMPLATES_DATA).map((slug) => ({
    slug,
  }));
}

export default async function ResourceTemplateSlugPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/templates/${slug}`);
}
