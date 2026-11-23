import { redirect } from "next/navigation";

export default async function ResourcesFreeToolSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/free-tools/${slug}`);
}
