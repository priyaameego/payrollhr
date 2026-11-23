import { redirect } from "next/navigation";

export default async function ResourcesGlossarySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/glossary/${slug}`);
}
