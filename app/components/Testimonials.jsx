import { BUSINESS } from "../../lib/business";

const StarRow = () => (
  <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.217-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    quote:
      "The crew showed up right on time, wrapped everything carefully, and had us loaded in under three hours. Best moving experience I've had — hands down.",
    name: "Sarah M.",
    detail: "Local Move · Buckhead",
  },
  {
    quote:
      "We hired DSI for an office relocation and they handled our equipment like it was glass. Zero downtime for our team. Worth every penny.",
    name: "James T.",
    detail: "Commercial Move · Midtown",
  },
  {
    quote:
      "From the first phone call to the last box unpacked, everything was professional. No hidden fees, no surprises — exactly the quote they gave me.",
    name: "Priya K.",
    detail: "Long Distance Move · Charlotte",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mt-3 tracking-tight">
            What Our Neighbors Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRow />
            <span className="text-sm font-semibold text-slate-700 dark:text-gray-200">
              Trusted by families & businesses across Atlanta since{" "}
              {BUSINESS.foundingYear}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map(t => (
            <figure
              key={t.name}
              className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg shadow-slate-900/5 dark:shadow-black/30 border border-gray-100 dark:border-slate-700 flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <span
                aria-hidden="true"
                className="absolute top-5 right-7 text-6xl leading-none font-serif text-blue-100 dark:text-slate-700 select-none"
              >
                &rdquo;
              </span>
              <StarRow />
              <blockquote className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm grow">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-gray-100 dark:border-slate-700 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-800 dark:text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {t.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
