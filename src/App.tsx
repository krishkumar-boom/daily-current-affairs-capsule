type Topic = {
  title: string;
  background: string;
  currentDevelopment: string;
  whyItMatters: string;
  examFocus: string[];
  keyFacts: string[];
};

const topics: Topic[] = [
  {
    title: "Carbon Credit Trading Scheme (CCTS) Operational Push",
    background:
      "India is building a domestic carbon market to reduce emissions intensity while preserving growth in energy-intensive sectors.",
    currentDevelopment:
      "The government has accelerated compliance architecture for carbon credit trading with phased sectoral coverage and institutional oversight.",
    whyItMatters:
      "A functional carbon market can lower decarbonization costs, attract green finance, and improve India's climate negotiation credibility.",
    examFocus: ["NDA/CDS: Energy security and climate strategy", "UPSC GS3: Environment, economy, policy instruments"],
    keyFacts: [
      "Anchored in Energy Conservation Act amendments and climate commitments.",
      "Targets high-emission sectors first, then broader market linkage.",
      "Uses tradable credits to incentivize low-carbon technology upgrades.",
      "Requires robust MRV (measurement, reporting, verification) systems.",
    ],
  },
  {
    title: "Implementation Phase of New Criminal Laws",
    background:
      "India replaced colonial-era criminal codes with new frameworks emphasizing justice delivery, procedure modernization, and evidence reform.",
    currentDevelopment:
      "States and agencies are aligning police, prosecution, and digital case systems to implement the Bharatiya Nyaya framework.",
    whyItMatters:
      "Legal transition quality will determine investigation efficiency, conviction quality, and citizen trust in rule of law.",
    examFocus: ["NDA/CDS: Internal security administration", "UPSC GS2: Polity, governance, justice reforms"],
    keyFacts: [
      "Three pillars: substantive law, procedure, and evidence.",
      "Pushes digitization in FIRs, records, and forensic use.",
      "Demands state-level training and infrastructural adaptation.",
      "Raises debate on safeguards against misuse and delays.",
    ],
  },
  {
    title: "India-EFTA Trade and Investment Architecture",
    background:
      "India has expanded trade diplomacy beyond tariff cuts toward investment-linked growth partnerships.",
    currentDevelopment:
      "The India-EFTA framework has moved into implementation planning with focus on investment commitments, services, and market access.",
    whyItMatters:
      "This can diversify export destinations, improve technology inflows, and create high-quality jobs in manufacturing and services.",
    examFocus: ["NDA/CDS: Strategic economic partnerships", "UPSC GS2/GS3: IR, trade, growth"],
    keyFacts: [
      "EFTA includes Switzerland, Norway, Iceland, and Liechtenstein.",
      "Investment commitments are a major differentiator.",
      "Supports integration into global value chains.",
      "Requires domestic competitiveness reforms for full gains.",
    ],
  },
  {
    title: "RBI's Inflation-First Monetary Stance",
    background:
      "Inflation management remains central to macroeconomic stability as food and commodity volatility persist.",
    currentDevelopment:
      "The RBI has maintained a cautious stance, balancing inflation control with credit support for growth.",
    whyItMatters:
      "Stable inflation protects household purchasing power and reduces uncertainty for investment planning.",
    examFocus: ["NDA/CDS: National economic resilience", "UPSC GS3: Monetary policy, inflation, banking"],
    keyFacts: [
      "Monetary Policy Committee targets CPI inflation around 4% (+/-2%).",
      "Liquidity tools remain active alongside rate policy.",
      "Food inflation remains a key transmission risk.",
      "Core inflation trends shape medium-term policy trajectory.",
    ],
  },
  {
    title: "Defence Modernization: Long-Range Strategic Capability",
    background:
      "India's deterrence posture is evolving through indigenous missile and delivery-system advancements.",
    currentDevelopment:
      "Recent strategic-system user validation strengthened confidence in long-range precision and survivable deterrence capability.",
    whyItMatters:
      "Credible deterrence and indigenous capability reduce external vulnerability and support strategic autonomy.",
    examFocus: ["NDA/CDS: Deterrence, tri-service preparedness", "UPSC GS3: Defence technology and security"],
    keyFacts: [
      "Indigenous R&D and production are central to modernization.",
      "Enhances second-strike credibility and strategic stability.",
      "Complements Atmanirbhar Bharat in defence manufacturing.",
      "Requires doctrine, command, and safety integration.",
    ],
  },
  {
    title: "IndiaAI Mission and Public Digital Compute",
    background:
      "AI policy focus has shifted from startup grants to foundational infrastructure and responsible innovation ecosystems.",
    currentDevelopment:
      "Public support for shared AI compute, datasets, and skilling is being operationalized to widen domestic innovation capacity.",
    whyItMatters:
      "Affordable compute access can prevent concentration, accelerate public-interest AI, and strengthen digital sovereignty.",
    examFocus: ["NDA/CDS: Emerging technology and national capability", "UPSC GS3: S&T, innovation, digital governance"],
    keyFacts: [
      "Compute infrastructure is a strategic economic asset.",
      "Responsible AI frameworks emphasize safety and accountability.",
      "Skilling and applied research are crucial for adoption.",
      "Public digital platforms can scale AI use in governance.",
    ],
  },
  {
    title: "Wetland and Mangrove Conservation as Climate Adaptation",
    background:
      "Wetlands and mangroves provide flood buffering, coastal protection, biodiversity support, and livelihood security.",
    currentDevelopment:
      "Conservation mapping, restoration, and wetland management planning have gained momentum under national and state initiatives.",
    whyItMatters:
      "Nature-based adaptation is cost-effective for disaster risk reduction and climate resilience in vulnerable districts.",
    examFocus: ["NDA/CDS: Disaster preparedness geography", "UPSC GS3: Environment, disaster management"],
    keyFacts: [
      "Wetlands act as natural sponges in extreme rainfall events.",
      "Mangroves reduce cyclone and storm-surge impacts.",
      "Ramsar designations improve conservation attention.",
      "Community-led management improves long-term outcomes.",
    ],
  },
];

const prelimsQuestions = [
  {
    type: "Standard MCQ",
    question: "Which policy instrument directly works through tradable permits to reduce emissions at lower aggregate cost?",
    options: ["A. Universal fossil-fuel subsidy", "B. Carbon credit trading market", "C. Quantitative easing", "D. Import quota on electronics"],
  },
  {
    type: "Standard MCQ",
    question: "The primary objective of replacing legacy criminal codes with new statutes is to:",
    options: [
      "A. Shift all criminal law to state legislatures",
      "B. End judicial review in criminal cases",
      "C. Modernize justice delivery and procedure",
      "D. Replace all imprisonment with monetary penalties",
    ],
  },
  {
    type: "Standard MCQ",
    question: "In monetary policy, persistent food inflation mainly affects the economy by:",
    options: [
      "A. Automatically reducing fiscal deficit",
      "B. Weakening household real consumption",
      "C. Increasing forex reserves directly",
      "D. Eliminating core inflation pressures",
    ],
  },
  {
    type: "Standard MCQ",
    question: "A key strategic advantage of indigenous defence production is:",
    options: [
      "A. Complete elimination of maintenance costs",
      "B. Reduced dependence on external supply chains",
      "C. Automatic compliance with all global treaties",
      "D. Removal of need for military training",
    ],
  },
  {
    type: "Standard MCQ",
    question: "Ramsar-tagged wetlands are most directly associated with:",
    options: [
      "A. Nuclear safety governance",
      "B. Maritime boundary arbitration",
      "C. International wetland conservation",
      "D. Global telecom spectrum coordination",
    ],
  },
  {
    type: "Analytical MCQ",
    question: "If India expands carbon market coverage without robust MRV standards, the most likely policy risk is:",
    options: [
      "A. Over-compliance by firms",
      "B. Increased grid frequency stability",
      "C. Low environmental integrity of credits",
      "D. Immediate reduction in food inflation",
    ],
  },
  {
    type: "Analytical MCQ",
    question: "Investment-linked trade agreements are often preferred because they:",
    options: [
      "A. Remove need for domestic reforms",
      "B. Link market access with long-term capital inflow",
      "C. Prohibit technology transfer",
      "D. Replace bilateral diplomacy with military pacts",
    ],
  },
  {
    type: "Statement-Based MCQ",
    question: "Consider the following statements on domestic carbon markets: 1) They can incentivize cost-effective emission reductions. 2) Their credibility depends on transparent monitoring and verification. 3) They are unrelated to industrial competitiveness. Which is correct?",
    options: ["A. 1 and 2 only", "B. 2 and 3 only", "C. 1 and 3 only", "D. 1, 2 and 3"],
  },
];

const deepAnalysisMcqs = [
  {
    question: "A well-designed carbon market improves efficiency primarily because it:",
    options: [
      "A. Fixes an identical technology for all firms",
      "B. Allows least-cost abatement across firms",
      "C. Eliminates need for regulation",
      "D. Works only in the power sector",
    ],
    answer: "B",
  },
  {
    question: "Which combination best strengthens carbon market credibility?",
    options: [
      "A. Weak disclosure and flexible baselines",
      "B. High penalties but no emissions data",
      "C. Transparent MRV, registry integrity, and phased coverage",
      "D. Voluntary pledges without compliance architecture",
    ],
    answer: "C",
  },
];

export function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_20%,#fbe7c6_0%,transparent_36%),radial-gradient(circle_at_85%_5%,#c9e4de_0%,transparent_32%),linear-gradient(145deg,#f8f4ee_0%,#f3efe5_45%,#ede8de_100%)] px-4 py-10 text-stone-800 sm:px-6 lg:px-8">
      <main className="mx-auto w-full max-w-6xl">
        <header className="reveal rounded-3xl border border-amber-900/10 bg-white/80 p-6 shadow-[0_20px_60px_-28px_rgba(56,36,20,0.35)] backdrop-blur sm:p-10">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-amber-900">TELEGRAM READY BRIEF</p>
          <h1 className="font-serif-display text-3xl leading-tight text-amber-950 sm:text-5xl">DAILY CURRENT AFFAIRS CAPSULE</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">
            Curated for NDA, CDS, and UPSC CSE aspirants from PIB, PRS, ministry updates, and verified public policy developments. Focus is strictly on exam-relevant analysis.
          </p>
        </header>

        <section className="mt-8 space-y-4">
          <h2 className="font-serif-display text-2xl text-amber-950 sm:text-3xl">Section 1: Core Analysis</h2>
          <div className="grid gap-4">
            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className="reveal rounded-2xl border border-stone-300/70 bg-white/85 p-5 shadow-[0_16px_40px_-30px_rgba(50,40,30,0.35)]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <h3 className="text-lg font-semibold text-amber-900 sm:text-xl">{topic.title}</h3>
                <div className="mt-3 grid gap-2 text-sm leading-relaxed sm:text-[15px]">
                  <p>
                    <span className="font-semibold text-stone-900">Background:</span> {topic.background}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-900">Current Development:</span> {topic.currentDevelopment}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-900">Why It Matters:</span> {topic.whyItMatters}
                  </p>
                  <div>
                    <p className="font-semibold text-stone-900">Exam Focus:</p>
                    <ul className="list-disc pl-5">
                      {topic.examFocus.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Key Facts:</p>
                    <ul className="list-disc pl-5">
                      {topic.keyFacts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 reveal rounded-2xl border border-stone-300/70 bg-white/85 p-5 shadow-[0_16px_40px_-30px_rgba(50,40,30,0.35)] sm:p-7">
          <h2 className="font-serif-display text-2xl text-amber-950 sm:text-3xl">Section 2: Prelims Practice</h2>
          <div className="mt-4 space-y-4 text-sm sm:text-[15px]">
            {prelimsQuestions.map((item, idx) => (
              <div key={item.question} className="rounded-xl border border-stone-200 bg-stone-50/70 p-4">
                <p className="font-semibold text-stone-900">
                  Q{idx + 1}. ({item.type}) {item.question}
                </p>
                <ul className="mt-2 space-y-1 pl-0">
                  {item.options.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 reveal rounded-2xl border border-stone-300/70 bg-white/85 p-5 shadow-[0_16px_40px_-30px_rgba(50,40,30,0.35)] sm:p-7">
          <h2 className="font-serif-display text-2xl text-amber-950 sm:text-3xl">Section 3: Mains Practice</h2>
          <p className="mt-4 rounded-xl border border-amber-800/20 bg-amber-50/60 p-4 text-sm leading-relaxed sm:text-[15px]">
            Assess the potential and limitations of India's Carbon Credit Trading Scheme as a policy tool for balancing climate commitments with industrial growth. Suggest institutional safeguards required for credibility and equity. (15 marks)
          </p>
        </section>

        <section className="mt-10 reveal rounded-2xl border border-stone-300/70 bg-white/85 p-5 shadow-[0_16px_40px_-30px_rgba(50,40,30,0.35)] sm:p-7">
          <h2 className="font-serif-display text-2xl text-amber-950 sm:text-3xl">Section 4: Deep Analysis (Most Important Topic)</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed sm:text-[15px]">
            <p>
              <span className="font-semibold">1. Historical Background:</span> India moved from command-and-control environmental regulation toward market-linked efficiency tools as industrial growth and climate responsibility converged. Energy efficiency trading under PAT provided a policy learning base for broader carbon credit mechanisms.
            </p>
            <p>
              <span className="font-semibold">2. Constitutional / Legal Provisions:</span> Article 48A and Article 51A(g) provide environmental duties to the State and citizens. Statutory backing emerges through the Energy Conservation Act (as amended), enabling carbon credit frameworks. Internationally, design is aligned with Paris Agreement commitments and India's NDC trajectory.
            </p>
            <p>
              <span className="font-semibold">3. Important Data / Reports:</span> India remains among the top total emitters but with comparatively low per-capita emissions. Renewable capacity has expanded rapidly, yet hard-to-abate sectors still need transition finance. IEA and UNEP assessments underline the need for transparent carbon pricing and credible accounting.
            </p>
            <p>
              <span className="font-semibold">4. Key Challenges:</span> Baseline setting disputes, uneven sectoral readiness, weak MRV capacity, and risk of low-quality credits can dilute impact. Smaller firms may face compliance costs without targeted support. Federal coordination between Union regulators and state institutions remains critical.
            </p>
            <p>
              <span className="font-semibold">5. Way Forward:</span> Adopt phased sector onboarding, independent verification architecture, digital registries with public disclosure, and safeguards against double counting. Provide transition support for MSMEs, align with green taxonomy and climate finance, and integrate carbon market design with industrial policy.
            </p>
            <div>
              <p className="font-semibold">6. Advanced Concept-Based MCQs (with answers):</p>
              <div className="mt-2 space-y-3">
                {deepAnalysisMcqs.map((mcq, i) => (
                  <div key={mcq.question} className="rounded-xl border border-stone-200 bg-stone-50/70 p-4">
                    <p className="font-medium">{i + 1}. {mcq.question}</p>
                    <ul className="mt-1 space-y-1">
                      {mcq.options.map((opt) => (
                        <li key={opt}>{opt}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-xs uppercase tracking-wider text-emerald-700">Answer: {mcq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 reveal rounded-2xl border border-stone-300/70 bg-white/90 p-5 shadow-[0_16px_40px_-30px_rgba(50,40,30,0.35)] sm:p-7">
          <h2 className="font-serif-display text-2xl text-amber-950 sm:text-3xl">Answer Key</h2>
          <ol className="mt-3 grid list-decimal gap-1 pl-5 text-sm sm:text-[15px]">
            <li>B</li>
            <li>C</li>
            <li>B</li>
            <li>B</li>
            <li>C</li>
            <li>C</li>
            <li>B</li>
            <li>A</li>
          </ol>
          <p className="mt-5 border-t border-stone-200 pt-4 text-sm font-semibold tracking-wide text-amber-900">-- DAILY CURRENT AFFAIRS CAPSULE</p>
        </section>
      </main>
    </div>
  );
}
