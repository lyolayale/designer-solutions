const QuoteIcon = () => (
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.651.12-1.322.2-1.99.2-.673 0-1.339-.08-1.99-.2a48.59 48.59 0 00-1.123.08C4.095 4.01 3.25 4.973 3.25 6.108V16.5a2.25 2.25 0 002.25 2.25h.75m0-15.75h6m-6 15.75v.75a2.25 2.25 0 002.25 2.25h.75"
    />
  </svg>
);

const BoxIcon = () => (
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
  </svg>
);

const HomeIcon = () => (
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

const steps = [
  {
    number: "01",
    icon: <QuoteIcon />,
    title: "Get Your Free Quote",
    description:
      "Use our instant calculator or give us a call. Two minutes, zero obligation — you'll know exactly what to expect.",
  },
  {
    number: "02",
    icon: <BoxIcon />,
    title: "We Plan & Pack",
    description:
      "Pick a date that works for you. Our uniformed crew arrives on time with pads, tools, and all the materials needed.",
  },
  {
    number: "03",
    icon: <HomeIcon />,
    title: "Sit Back & Settle In",
    description:
      "We load, transport, and place every item exactly where you want it. All you have to do is enjoy your new space.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mt-3 tracking-tight">
            Moving Made Simple
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            No hidden fees, no surprises, no stress. Just a straightforward
            process refined over {`26`} years of moves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-9 left-[calc(50%+3.5rem)] w-[calc(100%-7rem)] border-t-2 border-dashed border-blue-200 dark:border-slate-600"
                />
              )}

              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 dark:shadow-blue-900/50 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
