import { BUSINESS } from "../../lib/business";

export default function CtaBand() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 dark:from-blue-900 dark:via-blue-950 dark:to-slate-900 px-8 py-14 md:px-16 text-center shadow-2xl shadow-blue-900/30 dark:shadow-black/50">
          {/* Decorative glows */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready for a Move That Feels This Easy?
            </h2>
            <p className="mt-4 text-blue-100 dark:text-blue-200 text-lg leading-relaxed">
              Join hundreds of happy families and businesses who trusted{" "}
              {BUSINESS.brandName}. Your free, no-obligation quote is two
              minutes away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#estimate"
                className="w-full sm:w-auto bg-white text-blue-800 dark:bg-blue-500 dark:text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-50 dark:hover:bg-blue-400 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
              >
                Get My Free Estimate
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="w-full sm:w-auto border-2 border-white/40 dark:border-blue-300/40 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/10 dark:hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
            <p className="mt-6 text-xs text-blue-200/80 dark:text-blue-300/70 uppercase tracking-widest font-semibold">
              No hidden fees · Licensed & Insured · Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
