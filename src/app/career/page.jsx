import Hero from "@/components/careers/HeroBanner";
import { careers } from "@/constants/Data";
import Link from "next/link";



const CareerPage = () => {
  return (
    <>
      <Hero />
      <section className="px-6 py-16 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Careers</h1>
          <p className="text-gray-600">
            Ready to kickstart your journey with Payqwicker? Come join us.
          </p>
        </div>

        {/* Job List */}
        <div className="grid gap-6">
          {careers.map((job) => (
            <Link
              key={job.id}
              href={`/career/${job.slug}`}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>📍 {job.location}</span>
                <span>🕒 {job.type}</span>
              </div>

              <p className="mt-4 text-primary font-medium">View details →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerPage;
