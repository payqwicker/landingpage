import React from "react";

/**
 * Converts a slug like "mobile-developer" to "Mobile Developer"
 */
const formatSlug = (slug = "") => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

const SinglePageBanner = ({ slug }) => {
  return (
    <section className="relative w-full bg-primary overflow-hidden pb-20">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.10) 0.3px, transparent 0.15px),
            linear-gradient(180deg, rgba(255,255,255,0.10) 0.3px, transparent 0.15px)
          `,
          backgroundSize: "250px 250px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto max-w-[1100px] min-h-[60vh] flex flex-col justify-center items-center gap-5 pt-40 px-4 text-white text-center">
        <h4 className="font-bold tracking-widest">CAREERS</h4>

        <h1 className="text-[40px] md:text-[50px] lg:text-[72px] font-bold leading-tight">
          {formatSlug(slug)}
        </h1>
      </div>
    </section>
  );
};

export default SinglePageBanner;
