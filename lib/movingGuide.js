// Content for the Moving Guide section (app/components/MovingGuide.jsx):
// a pre-move packing timeline plus FAQs about the moving / pre-moving process.
// Kept in lib/ so the UI and structured data share one source of truth.

import { BUSINESS } from "./business";

export const PACKING_PHASES = [
  {
    id: "4-weeks",
    icon: "calendar",
    title: "Get Organized",
    timeframe: "4+ Weeks Out",
    items: [
      "Get your free, no-obligation moving quote",
      "Lock in your moving date — end-of-month slots fill up fast",
      "Declutter and donate anything you won't take along",
      "Start packing rarely used rooms: garage, attic, guest room",
      "Gather school, medical and vet records for the move",
    ],
  },
  {
    id: "2-weeks",
    icon: "boxes",
    title: "Pack With a System",
    timeframe: "2 Weeks Out",
    items: [
      "Label every box with its room and a short contents list",
      "Number your boxes and keep a simple inventory list",
      "Schedule utility shut-off and turn-on dates",
      "Use up pantry, freezer and cleaning supplies",
      "Reserve parking or elevator time for the truck",
    ],
  },
  {
    id: "1-week",
    icon: "box-open",
    title: "Finalize the Details",
    timeframe: "1 Week Out",
    items: [
      "Reconfirm your move details and arrival window",
      "Pack an \"open first\" box: bedding, toiletries, chargers, snacks",
      "Defrost the freezer and empty mini-fridges",
      "Set aside valuables, documents and medications",
      "Photograph electronics wiring before unplugging",
    ],
  },
  {
    id: "moving-day",
    icon: "truck",
    title: "Hand It to the Pros",
    timeframe: "Moving Day",
    items: [
      "Keep essentials, medications and documents with you",
      "Point out special-care items to the crew lead",
      "Do a final walkthrough of every room and closet",
      "Check cabinets, drawers and the dishwasher one last time",
      "Record final meter readings and lock up",
    ],
  },
];

export const MOVE_FAQS = [
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking 4–6 weeks ahead, especially for end-of-month and summer dates, which fill up fastest. That said, plans change — call us and we will do our best to accommodate shorter notice. Your quote is free and our team responds within 24 hours.",
  },
  {
    question: "When should I start packing, and how long does it take?",
    answer:
      "Most households need 3–4 weeks of relaxed packing. Start with the rooms you use least — garage, guest room, seasonal storage — and work toward everyday spaces using the timeline above. On moving day, our uniformed crew arrives with pads, tools and all the materials needed for the heavy lifting.",
  },
  {
    question: "What should I keep with me on moving day?",
    answer:
      "Pack a personal essentials bag: important documents, medications, chargers, valuables, a change of clothes, plus anything your children or pets need. Keep it in your own vehicle rather than the truck, so everything is within reach the moment you arrive.",
  },
  {
    question: "How should I label my boxes?",
    answer:
      "Mark each box with its destination room and a short contents note, then number boxes and keep a simple inventory list. Write on the sides — not just the top — so labels stay visible when boxes are stacked. An \"open first\" box with bedding, toiletries and chargers will save your first night.",
  },
  {
    question: "What is included in my quote? Are there hidden fees?",
    answer:
      "Your quote is free and comes with zero obligation, so you will know exactly what to expect before moving day. We do not add surprise charges — the price we agree on is the price you pay. If anything about your inventory changes, just let us know and we will update the estimate up front.",
  },
  {
    question: "My new home is not ready yet. Do you offer storage?",
    answer:
      `Yes. ${BUSINESS.brandName} offers short-term and long-term storage in secure, climate-controlled facilities, so your belongings stay protected between homes. We can build storage into your move or provide it as a standalone service.`,
  },
  {
    question: "Are you licensed and insured? Do you move long-distance?",
    answer:
      `Yes to both. ${BUSINESS.legalName} is fully licensed and insured, and we have been moving families and businesses since ${BUSINESS.foundingYear} — ${BUSINESS.yearsInBusiness} years of local Atlanta-metro and long-distance relocations.`,
  },
];