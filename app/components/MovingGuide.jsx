"use client";

import { useSyncExternalStore, useState } from "react";
import {
  FaBoxesStacked,
  FaBoxOpen,
  FaCalendarDays,
  FaTruckFast,
  FaCircleCheck,
  FaCircleQuestion,
  FaChevronDown,
  FaClipboardList,
  FaLightbulb,
} from "react-icons/fa6";
import { BUSINESS } from "../../lib/business";
import { PACKING_PHASES, MOVE_FAQS } from "../../lib/movingGuide";

const STORAGE_KEY = "dsi-packing-list-v1";

/* Tiny localStorage-backed store for checklist progress. Using
   useSyncExternalStore keeps loading/persisting out of render-blocking
   effects and avoids server/client hydration mismatches. */
let cachedChecks = null;
const checkListeners = new Set();

function getChecksSnapshot() {
  if (cachedChecks === null) {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      cachedChecks = saved ? JSON.parse(saved) : {};
    } catch {
      // Storage unavailable (e.g. private browsing) — start empty
      cachedChecks = {};
    }
  }
  return cachedChecks;
}

const EMPTY_CHECKS = Object.freeze({});

function getServerChecksSnapshot() {
  // React requires getServerSnapshot to return a cached reference.
  // Returning a fresh object each call causes an infinite render loop.
  return EMPTY_CHECKS;
}

function subscribeToChecks(listener) {
  checkListeners.add(listener);
  return () => checkListeners.delete(listener);
}

function setChecksState(next) {
  cachedChecks = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable — progress simply will not persist
  }
  checkListeners.forEach(listener => listener());
}

const PHASE_ICONS = {
  calendar: FaCalendarDays,
  boxes: FaBoxesStacked,
  "box-open": FaBoxOpen,
  truck: FaTruckFast,
};

/* Accessible FAQ accordion row (smooth height via grid-template-rows) */
function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer group"
        >
          <span className="flex items-start gap-3">
            <FaCircleQuestion
              className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0"
              aria-hidden="true"
            />
            <span className="font-semibold text-sm sm:text-base text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
              {faq.question}
            </span>
          </span>
          <FaChevronDown
            className={`text-blue-600 dark:text-blue-400 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-12 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* One packing-phase card with checkable tasks */
function PhaseCard({
  phase,
  phaseIndex,
  checkedMap,
  onToggle,
  isExpanded,
  onToggleExpanded,
}) {
  const Icon = PHASE_ICONS[phase.icon] || FaBoxOpen;
  const doneCount = phase.items.filter(
    (_, itemIndex) => checkedMap[`${phaseIndex}-${itemIndex}`]
  ).length;
  const isComplete = doneCount === phase.items.length;

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-lg shadow-blue-900/5 dark:shadow-black/20 overflow-hidden transition-colors duration-300">
      {/* Phase header — tap to expand/collapse the checklist */}
      <h3>
        <button
          type="button"
          onClick={onToggleExpanded}
          aria-expanded={isExpanded}
          aria-controls={`phase-panel-${phaseIndex}`}
          className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Icon className="text-lg" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold text-slate-800 dark:text-white tracking-tight leading-tight group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
              {phase.title}
            </span>
            <span className="block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-0.5">
              {phase.timeframe}
            </span>
          </span>
          {isComplete ? (
            <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400">
              <FaCircleCheck aria-hidden="true" />
              Done
            </span>
          ) : (
            <span className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-gray-300">
              {doneCount}/{phase.items.length}
            </span>
          )}
          <FaChevronDown
            className={`shrink-0 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>

      {/* Collapsible checkable task list */}
      <div
        id={`phase-panel-${phaseIndex}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="p-2 sm:p-3 border-t border-gray-100 dark:border-slate-700">
        {phase.items.map((item, itemIndex) => {
          const key = `${phaseIndex}-${itemIndex}`;
          const isChecked = Boolean(checkedMap[key]);
          return (
            <li key={key}>
              <button
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                onClick={() => onToggle(key)}
                className="w-full flex items-start gap-3 text-left px-3 py-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors duration-200 group"
              >
                <FaCircleCheck
                  className={`mt-0.5 shrink-0 text-lg transition-colors duration-200 ${
                    isChecked
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-300 dark:text-slate-600 group-hover:text-blue-400"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`text-sm leading-relaxed transition-colors duration-200 ${
                    isChecked
                      ? "text-gray-400 dark:text-gray-500 line-through"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function MovingGuide() {
  const checkedMap = useSyncExternalStore(
    subscribeToChecks,
    getChecksSnapshot,
    getServerChecksSnapshot
  );
  const [openFaq, setOpenFaq] = useState(0);
  // Which phase card is expanded (first phase open by default)
  const [expandedPhase, setExpandedPhase] = useState(0);

  const toggleItem = key =>
    setChecksState({ ...checkedMap, [key]: !checkedMap[key] });

  const toggleFaq = index =>
    setOpenFaq(current => (current === index ? null : index));

  const togglePhase = index =>
    setExpandedPhase(current => (current === index ? null : index));

  const totalItems = PACKING_PHASES.reduce(
    (sum, phase) => sum + phase.items.length,
    0
  );
  const doneItems = PACKING_PHASES.reduce(
    (sum, phase, phaseIndex) =>
      sum +
      phase.items.filter((_, i) => checkedMap[`${phaseIndex}-${i}`]).length,
    0
  );
  const progressPct = totalItems ? (doneItems / totalItems) * 100 : 0;

  // FAQPage structured data for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MOVE_FAQS.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section
      id="moving-guide"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Moving Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mt-3 tracking-tight">
            Plan, Pack &amp; Move Like a Pro
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Everything you need to stay organized before the truck arrives — a
            step-by-step packing timeline and straight answers to the questions
            we hear most from {BUSINESS.primaryServiceArea} and Atlanta-metro
            movers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Interactive Packing Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <FaClipboardList className="text-lg" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                  Packing Timeline
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tap a phase to open its checklist — progress is saved on this
                  device.
                </p>
              </div>
            </div>

            {/* Overall progress bar — pinned below the navbar while scrolling */}
            <div className="sticky top-20 z-20 mb-6 p-3 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-gray-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Packing progress
                </span>
                <span
                  className="text-blue-600 dark:text-blue-400"
                  aria-live="polite"
                >
                  {progressPct >= 100
                    ? "All done! 🎉"
                    : `${Math.round(progressPct)}% packed`}
                </span>
              </div>
              <div
                className="h-2.5 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden"
                role="progressbar"
                aria-valuenow={Math.round(progressPct)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Packing checklist progress"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            <div className="space-y-5">
              {PACKING_PHASES.map((phase, phaseIndex) => (
                <PhaseCard
                  key={phase.id}
                  phase={phase}
                  phaseIndex={phaseIndex}
                  checkedMap={checkedMap}
                  onToggle={toggleItem}
                  isExpanded={expandedPhase === phaseIndex}
                  onToggleExpanded={() => togglePhase(phaseIndex)}
                />
              ))}
            </div>

            {/* Completion banner — appears when every task is checked */}
            {progressPct >= 100 && (
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 p-4 text-green-800 dark:text-green-300 transition-colors duration-300">
                <FaCircleCheck
                  className="text-2xl shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold">
                  You&apos;re all packed and ready for moving day!
                </p>
              </div>
            )}
          </div>
          {/* Right: Pre-Move FAQs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <FaCircleQuestion className="text-lg" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Straight answers from our {BUSINESS.yearsInBusiness}-year
                  veteran crew.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {MOVE_FAQS.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  isOpen={openFaq === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>

            {/* Help CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-6 shadow-lg shadow-blue-500/25 dark:shadow-blue-900/50 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <FaLightbulb
                  className="text-xl text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-white">Still have questions?</p>
                <p className="text-sm text-blue-100 dark:text-blue-200">
                  We respond within 24 hours — usually much faster.
                </p>
              </div>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="sm:ml-auto w-full sm:w-auto bg-white text-blue-700 dark:bg-blue-500 dark:text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-50 dark:hover:bg-blue-400 transition-all duration-300 whitespace-nowrap"
              >
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}