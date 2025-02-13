export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Project Details</h1>
      <p>`You&apos;re viewing project ID: `{slug}</p>
      {/* Here you can add more details based on the project ID */}
    </div>
  );
}
