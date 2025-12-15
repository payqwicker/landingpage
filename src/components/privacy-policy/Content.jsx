"use client";
import React from "react";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "scope", title: "2. Scope of This Policy" },
  { id: "info-we-collect", title: "3. Information We Collect" },
  { id: "how-we-use", title: "4. How We Use Your Information" },
  { id: "how-we-share", title: "5. How We Share Your Information" },
  { id: "data-security", title: "6. Data Security" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "your-rights", title: "8. Your Rights" },
  { id: "cookies", title: "9. Cookies & Tracking" },
  { id: "children", title: "10. Children’s Privacy" },
  { id: "biometric", title: "11. Biometric Data" },
  { id: "marketing", title: "12. Marketing Communications" },
  { id: "changes", title: "13. Changes to This Policy" },
  { id: "contact", title: "14. Contact Us" },
];

const Content = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <div className="w-full max-w-7xl mx-auto md:pt-40 px-6 md:px-12 py-10 md:py-16">
        {/* Header */}
        <div className="w-full flex justify-center text-center mb-8">
          <div>
            <h4 className="text-xs text-[#121212]">PRIVACY POLICY</h4>
            <h1 className="text-2xl xl:text-[35px] font-bold leading-snug mt-1">
              PayQwicker <span className="text-[#71A600]">Privacy Policy</span>
            </h1>
            <p className="text-sm mt-2">
              Last Updated: December 9, 2025 · Effective Date: December 12, 2025
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-[260px] self-start md:sticky md:top-24 bg-white border border-[#F2F2F2] py-6 px-4 rounded-md text-sm">
            <h2 className="font-semibold text-gray-800 mb-3">
              TABLE OF CONTENTS
            </h2>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[#475467] hover:text-[#71A600] transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 text-gray-800 space-y-10">
            {/* 1. Introduction */}
            <section id="introduction">
              <h2 className="font-semibold text-lg">1. Introduction</h2>
              <p className="mt-2">
                Welcome to PayQwicker, a mobile and web-based financial services
                platform operated by Quikito Ltd (“we”, “us”, or “our”). We are
                committed to protecting your privacy and handling your personal
                and financial information with the highest level of care.
              </p>

              <ul className="mt-4 space-y-1">
                <li>
                  <strong>Company:</strong> Quikito Ltd
                </li>
                <li>
                  <strong>Registered:</strong> Lagos, Nigeria
                </li>
                <li>
                  <strong>Email:</strong> Payqwicker.ng@gmail.com
                </li>
                <li>
                  <strong>Address:</strong> 39 Daddy Savage Road, Fagba, Lagos
                </li>
              </ul>
            </section>

            {/* 2. Scope */}
            <section id="scope">
              <h2 className="font-semibold text-lg">2. Scope of This Policy</h2>
              <p className="mt-2">
                This Privacy Policy applies to users and visitors of
                PayQwicker’s websites, mobile applications, and digital
                platforms. It explains:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>What data we collect</li>
                <li>How we use your data</li>
                <li>Who we share data with</li>
                <li>Your data protection rights</li>
                <li>How to contact us</li>
              </ul>
            </section>

            {/* 3. Info We Collect */}
            <section id="info-we-collect">
              <h2 className="font-semibold text-lg">
                3. Information We Collect
              </h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Personal & Identity Data:</strong> Full name, date of
                  birth, NIN, government-issued ID, phone number, email address,
                  and residential address.
                </li>
                <li>
                  <strong>Financial Data:</strong> Bank account details,
                  transaction history, wallet balances, savings and investment
                  records.
                </li>
                <li>
                  <strong>Biometric Data:</strong> Fingerprints and facial
                  recognition data used strictly for authentication.
                </li>
                <li>
                  <strong>Device & Usage Data:</strong> IP address, device type,
                  OS, app usage patterns, and diagnostics.
                </li>
                <li>
                  <strong>Third-Party Sources:</strong> Dojah (KYC) and PAGA
                  (payment processing).
                </li>
              </ul>
            </section>

            {/* 4. How We Use */}
            <section id="how-we-use">
              <h2 className="font-semibold text-lg">
                4. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Account creation and management</li>
                <li>Transaction processing and bill payments</li>
                <li>KYC, AML, and regulatory compliance</li>
                <li>Fraud detection and security monitoring</li>
                <li>Customer support and service improvement</li>
              </ul>
            </section>

            {/* 5. Sharing */}
            <section id="how-we-share">
              <h2 className="font-semibold text-lg">
                5. How We Share Your Information
              </h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Payment processors such as PAGA</li>
                <li>Identity verification partners like Dojah</li>
                <li>Regulators including the Central Bank of Nigeria (CBN)</li>
                <li>Law enforcement when legally required</li>
              </ul>
              <p className="mt-2 font-medium">
                We do not sell your personal information.
              </p>
            </section>

            {/* 6. Security */}
            <section id="data-security">
              <h2 className="font-semibold text-lg">6. Data Security</h2>
              <p className="mt-2">
                We use encryption, access controls, multi-factor authentication,
                and regular audits to safeguard your data. While we take strong
                precautions, no system is 100% secure.
              </p>
            </section>

            {/* 7. Retention */}
            <section id="data-retention">
              <h2 className="font-semibold text-lg">7. Data Retention</h2>
              <p className="mt-2">
                We retain financial records for up to 7 years in line with
                Nigerian regulations. Closed accounts are deleted or anonymized
                within 90 days unless legally required.
              </p>
            </section>

            {/* 8. Rights */}
            <section id="your-rights">
              <h2 className="font-semibold text-lg">8. Your Rights</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Right to access and correction</li>
                <li>Right to deletion (subject to law)</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* 9. Cookies */}
            <section id="cookies">
              <h2 className="font-semibold text-lg">
                9. Cookies & Tracking Technologies
              </h2>
              <p className="mt-2">
                Our website uses essential, performance, functional, and
                security cookies to improve functionality and protect users.
              </p>
            </section>

            {/* 10. Children */}
            <section id="children">
              <h2 className="font-semibold text-lg">10. Children’s Privacy</h2>
              <p className="mt-2">
                PayQwicker is not intended for users under 18. We do not
                knowingly collect children’s data.
              </p>
            </section>

            {/* 11. Biometric */}
            <section id="biometric">
              <h2 className="font-semibold text-lg">11. Biometric Data</h2>
              <p className="mt-2">
                Biometric data is encrypted, never sold, and used solely for
                authentication and fraud prevention.
              </p>
            </section>

            {/* 12. Marketing */}
            <section id="marketing">
              <h2 className="font-semibold text-lg">
                12. Marketing Communications
              </h2>
              <p className="mt-2">
                You may opt out of promotional messages at any time. Transaction
                alerts will still be sent.
              </p>
            </section>

            {/* 13. Changes */}
            <section id="changes">
              <h2 className="font-semibold text-lg">
                13. Changes to This Policy
              </h2>
              <p className="mt-2">
                We may update this policy periodically. Continued use of
                PayQwicker indicates acceptance.
              </p>
            </section>

            {/* 14. Contact */}
            <section id="contact">
              <h2 className="font-semibold text-lg">14. Contact Us</h2>
              <p className="mt-2">
                <strong>Email:</strong> Payqwicker.ng@gmail.com <br />
                <strong>Address:</strong> 39 Daddy Savage Road, Fagba, Lagos{" "}
                <br />
                <strong>Support:</strong> Available via the PayQwicker app
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Content;
