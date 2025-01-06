import { useRouter } from 'next/router';

export default function JobDetails() {
  const router = useRouter();
  const { description } = router.query;

  if (!description) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Job Details</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: description as string }}
      ></div>
    </div>
  );
}