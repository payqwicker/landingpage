import SinglePageBanner from "@/components/careers/SinglePageBanner";
import { careers } from "@/constants/Data";
import Link from "next/link";
import { notFound } from "next/navigation";





const SingleCareerPage = ({ params }) => {

  const { slug } = params;
    const job = careers.find((item) => item.slug === slug);
    
  if (!job) {
    notFound();
  }

    return (
      <>
        <SinglePageBanner slug={params.slug} />
        <section className="px-6 py-16 max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/career"
            className="text-sm text-gray-600 hover:underline"
          >
            ← Back to Careers
          </Link>

          {/* Job Header */}
          <div className="mt-6 mb-10">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>📍 {job.location}</span>
              <span>🕒 {job.type}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <a
            href="mailto:careers@yourcompany.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Apply for this role
          </a>
        </section>
      </>
    );
};

export default SingleCareerPage;
