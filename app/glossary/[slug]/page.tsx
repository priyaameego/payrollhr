import { redirect } from "next/navigation";

export default async function GlossarySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/resources/glossary/${slug}`);
}
