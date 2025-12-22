import Link from "next/link";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import Step from "@/components/steps/page";

export default function HomePage() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="black"/><g><circle cx="16" cy="16" r="10" fill="white"/><rect x="13" y="8" width="6" height="14" rx="3" fill="black"/><rect x="10" y="24" width="12" height="3" rx="1.5" fill="black"/><rect x="14.5" y="11" width="3" height="6" rx="1.5" fill="white"/></g></svg>
      ),
      title: "Smart Document Generation",
      description: "Choose from NDA, rental agreements, affidavits, and legal notices tailored to Indian law.",
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="black"/><circle cx="16" cy="16" r="10" fill="white"/><rect x="13" y="8" width="6" height="14" rx="3" fill="black"/><rect x="10" y="24" width="12" height="3" rx="1.5" fill="black"/></svg>
      ),
      title: "Verified Clause Library",
      description: "All clauses sourced from verified legal frameworks, ensuring accuracy and compliance.",
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="black"/><circle cx="16" cy="16" r="10" fill="white"/><rect x="13" y="8" width="6" height="14" rx="3" fill="black"/></svg>
      ),
      title: "Jurisdiction-Aware",
      description: "Documents automatically adapted for your specific jurisdiction with relevant legal standards.",
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="black"/><circle cx="16" cy="16" r="10" fill="white"/><rect x="13" y="8" width="6" height="14" rx="3" fill="black"/><rect x="10" y="24" width="12" height="3" rx="1.5" fill="black"/></svg>
      ),
      title: "Clause-Level Editing",
      description: "Regenerate individual clauses with feedback like 'Make stricter' or 'More balanced'.",
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="black"/><circle cx="16" cy="16" r="10" fill="white"/><rect x="13" y="8" width="6" height="14" rx="3" fill="black"/><rect x="10" y="24" width="12" height="3" rx="1.5" fill="black"/></svg>
      ),
      title: "Compliance Warnings",
      description: "Get instant alerts about missing clauses, mismatches, or risky language.",
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="black"/><circle cx="16" cy="16" r="10" fill="white"/><rect x="13" y="8" width="6" height="14" rx="3" fill="black"/><rect x="10" y="24" width="12" height="3" rx="1.5" fill="black"/></svg>
      ),
      title: "Multi-Format Export",
      description: "Download your document as PDF or DOCX with proper legal formatting and numbering.",
    },
  ];

  const faqs = [
    {
      question: "Is LDG a substitute for a lawyer?",
      answer: "No. LDG helps you draft documents using verified clauses but does not provide legal advice. Always consult a qualified lawyer before finalizing important legal documents.",
    },
    {
      question: "What document types are supported?",
      answer: "Currently, we support NDAs, Rental Agreements, Affidavits, and Legal Notices. More document types are coming soon.",
    },
    {
      question: "Can I edit the generated document?",
      answer: "Yes! You have full control. Edit clauses, regenerate sections, add custom text, and review everything before export.",
    },
    {
      question: "Is my data secure?",
      answer: "We take security seriously. All documents are processed securely and are not retained without your consent.",
    },
    {
      question: "Can I use these documents internationally?",
      answer: "Our documents are currently tailored for Indian jurisdiction. International templates are in development.",
    },
    {
      question: "How much does it cost?",
      answer: "Pricing details coming soon. We're committed to making legal document drafting affordable and accessible.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      content: "LDG saved us thousands in legal fees. The NDA was perfect and ready to use immediately.",
    },
    {
      name: "Priya Sharma",
      role: "Property Manager",
      content: "Creating rental agreements has never been easier. The jurisdiction-aware features are incredibly helpful.",
    },
    {
      name: "Amit Patel",
      role: "Freelancer",
      content: "The interface is so intuitive. Generated my first legal notice without any confusion.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-black rounded-full">
                <span className="text-sm font-medium text-white bg-black px-3 py-1 rounded-full">
                  Legal Documents Made Simple
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/legal-logo.svg" alt="Legal Logo" className="h-12 w-12" />
                <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black">
                  Generate legally
                  <br />
                  <span className="text-black">
                    structured documents
                  </span>
                </h1>
              </div>
              <p className="mt-6 text-lg text-black max-w-xl leading-relaxed">
                Create NDAs, agreements, affidavits, and notices using jurisdiction-aware templates and clause-level AI drafting — designed for India. Always reviewed by you, never a substitute for legal counsel.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-lg bg-black text-white px-8 py-3 font-medium border border-black hover:bg-white hover:text-black transition"
                >
                  Create a document
                  <span className="ml-2">→</span>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition"
                >
                  See how it works
                </Link>
              </div>
            </div>
            {/* Hero Preview Card */}
            <div className="relative">
              <div className="relative rounded-2xl border border-black bg-white p-8 shadow-xl hover:shadow-2xl transition">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm font-semibold text-black">Document Preview</p>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-black" />
                    <div className="h-3 w-3 rounded-full bg-black" />
                    <div className="h-3 w-3 rounded-full bg-black" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-black/10 rounded-lg" />
                  <div className="h-4 w-full bg-black/10 rounded-lg" />
                  <div className="h-4 w-5/6 bg-black/10 rounded-lg" />
                  <div className="pt-4 space-y-2">
                    <div className="h-3 w-full bg-black/5 rounded-lg" />
                    <div className="h-3 w-full bg-black/5 rounded-lg" />
                    <div className="h-3 w-2/3 bg-black/5 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A straightforward 4-step process to draft your legal document
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <Step
              number={1}
              title="Choose document type"
              description="Select NDA, rental agreement, affidavit, or legal notice based on your needs."
              colorClass="bg-black text-white border-black"
            />
            <Step
              number={2}
              title="Add your details"
              description="Fill a simple form with names, dates, duration, and other required information."
              colorClass="bg-black text-white border-black"
            />
            <Step
              number={3}
              title="AI drafts safely"
              description="Our system assembles clauses from verified legal sources—no free-form invention."
              colorClass="bg-black text-white border-black"
            />
            <Step
              number={4}
              title="Review & export"
              description="Edit individual clauses, check compliance warnings, and download as PDF or DOCX."
              colorClass="bg-black text-white border-black"
            />
          </div>

          {/* Connection line */}
          <div className="hidden md:block mt-12">
            <svg className="w-full h-2 text-gray-200 dark:text-slate-800" viewBox="0 0 1000 10" preserveAspectRatio="none">
              <line x1="0" y1="5" x2="1000" y2="5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Powerful features
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Everything you need to draft legal documents with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-black bg-white p-8 hover:shadow-lg transition hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-black">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Loved by users
            </h2>
            <p className="text-lg text-gray-600">
              See what our users have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border border-black bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-black">★</span>
                  ))}
                </div>
                <p className="text-black mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-black">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about LDG
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-black bg-white p-6 hover:shadow-md transition cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-black select-none">
                  {faq.question}
                  <span className="ml-4 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-black leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to draft your legal document?
          </h2>
          <p className="text-lg text-white mb-8 opacity-80">
            Join hundreds of users creating legally structured documents with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-white text-black px-8 py-4 font-semibold hover:shadow-lg transition transform hover:scale-105"
            >
              Start drafting now
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition"
            >
              Contact sales
            </Link>
          </div>

          <p className="mt-8 text-sm text-white opacity-70">
            💡 Not legal advice. Always consult a qualified lawyer.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
