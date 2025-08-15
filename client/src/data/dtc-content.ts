import type { PatientTestimonial, Benefit, TreatmentComparison, FAQItem } from "@shared/schema";

export const patientTestimonials: PatientTestimonial[] = [
  {
    id: "testimonial-1",
    name: "Robert M.",
    age: 58,
    location: "Phoenix, AZ",
    beforeStory: "I was getting up 4-5 times every night to use the bathroom. I couldn't sit through a movie or drive more than 30 minutes without stopping.",
    afterStory: "Now I sleep through the night completely. I took a 6-hour road trip last month without a single bathroom stop - my wife couldn't believe it!",
    quote: "The Spring System gave me my life back. I feel like I'm 40 again.",
    timeframe: "3 months after procedure"
  },
  {
    id: "testimonial-2",
    name: "James T.",
    age: 65,
    location: "Dallas, TX",
    beforeStory: "BPH was controlling my life. I mapped out every bathroom everywhere I went. Golf rounds took forever because of constant breaks.",
    afterStory: "I played 18 holes last weekend without a single bathroom break. My buddies were amazed - they're asking about the procedure now!",
    quote: "I wish I had done this years ago. The procedure was easier than going to the dentist.",
    timeframe: "6 weeks after procedure"
  },
  {
    id: "testimonial-3",
    name: "Michael R.",
    age: 72,
    location: "Miami, FL",
    beforeStory: "The medications weren't working anymore, and I was afraid of surgery. My quality of life was terrible - I felt like a prisoner in my own body.",
    afterStory: "Within two weeks, I noticed a huge difference. Now I can enjoy time with my grandchildren without constantly looking for the nearest restroom.",
    quote: "It's amazing how something so simple can change everything. I'm finally free.",
    timeframe: "2 months after procedure"
  },
  {
    id: "testimonial-4",
    name: "David L.",
    age: 61,
    location: "Seattle, WA",
    beforeStory: "I was embarrassed to travel with friends or go to events. The constant urgency and frequency made me anxious and isolated.",
    afterStory: "Last month I went on a cruise with my wife - something I hadn't done in years because of bathroom anxiety. It was incredible.",
    quote: "The Spring System didn't just fix my prostate - it gave me my confidence back.",
    timeframe: "4 months after procedure"
  }
];

export const springBenefits: Benefit[] = [
  {
    id: "sleep-through-night",
    title: "Sleep Through the Night",
    description: "Wake up refreshed instead of exhausted from multiple nighttime trips to the bathroom.",
    icon: "moon",
    stat: "90% of patients report significantly improved sleep quality",
    color: "blue"
  },
  {
    id: "no-cutting-burning",
    title: "No Cutting or Burning",
    description: "Minimally invasive procedure that works with your natural anatomy - no tissue removal or heat damage.",
    icon: "shield-check",
    stat: "100% tissue preservation",
    color: "green"
  },
  {
    id: "sexual-function-preserved",
    title: "Sexual Function Preserved",
    description: "Clinical studies show no negative impact on erectile or ejaculatory function.",
    icon: "heart",
    stat: "No new sexual side effects reported in clinical trials",
    color: "red"
  },
  {
    id: "rapid-recovery",
    title: "Rapid Recovery",
    description: "Most patients return to normal activities within 2-3 days with minimal discomfort.",
    icon: "zap",
    stat: "Average return to activities: 2.5 days",
    color: "yellow"
  },
  {
    id: "lasting-relief",
    title: "Lasting Relief",
    description: "Clinical data shows durable symptom improvement that lasts for years, not months.",
    icon: "calendar-check",
    stat: "Benefits maintained at 3+ year follow-up",
    color: "purple"
  },
  {
    id: "freedom-from-meds",
    title: "Freedom from Daily Pills",
    description: "One-time procedure can eliminate the need for ongoing BPH medications and their side effects.",
    icon: "pill-off",
    stat: "85% of patients reduce or eliminate BPH medications",
    color: "orange"
  }
];

export const treatmentComparisons: TreatmentComparison[] = [
  {
    treatment: "Zenflow Spring System",
    procedure: "Minimally invasive spring implant placement",
    recovery: "2-3 days to normal activities",
    durability: "Long-term relief (3+ years proven)",
    sexualFunction: "Preserved - no negative impact",
    notes: "No cutting, burning, or tissue removal"
  },
  {
    treatment: "UroLift",
    procedure: "Permanent implants to lift prostate tissue",
    recovery: "Few days to normal activities",
    durability: "Moderate durability, some retreat",
    sexualFunction: "Generally preserved",
    notes: "Limited effectiveness for larger prostates"
  },
  {
    treatment: "Rezūm (Steam Therapy)",
    procedure: "Steam injection to shrink prostate",
    recovery: "Several weeks with catheter",
    durability: "Good long-term results",
    sexualFunction: "Generally preserved",
    notes: "Longer recovery period, temporary worsening"
  },
  {
    treatment: "TURP Surgery",
    procedure: "Surgical removal of prostate tissue",
    recovery: "Several weeks with catheter",
    durability: "Very durable",
    sexualFunction: "High risk of sexual side effects",
    notes: "Most invasive option with highest risks"
  },
  {
    treatment: "Medications Only",
    procedure: "Daily pills (Flomax, finasteride, etc.)",
    recovery: "No procedure needed",
    durability: "Temporary - only while taking",
    sexualFunction: "Often causes sexual side effects",
    notes: "Side effects include dizziness, fatigue"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "what-is-bph",
    question: "What is BPH and how do I know if I have it?",
    answer: "Benign Prostatic Hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland that affects about 50% of men by age 50. Common symptoms include frequent urination (especially at night), weak urine stream, difficulty starting urination, feeling like you can't completely empty your bladder, and sudden urges to urinate.",
    category: "general"
  },
  {
    id: "how-common-bph",
    question: "How common is BPH?",
    answer: "BPH is extremely common - affecting about 40 million men in the US alone. By age 80, up to 90% of men experience BPH symptoms. Many men think these symptoms are just a normal part of aging, but effective treatments are available.",
    category: "general"
  },
  {
    id: "spring-system-explained",
    question: "How does the Spring System work?",
    answer: "The Spring System uses a small, permanent implant that is placed in the prostate through the urethra (no incisions needed). The spring gently props open the compressed urethra, allowing urine to flow freely again - like opening a door that was stuck shut.",
    category: "procedure"
  },
  {
    id: "procedure-duration",
    question: "How long does the Spring System procedure take?",
    answer: "The procedure typically takes 15-30 minutes and is performed as an outpatient procedure. You'll go home the same day with minimal discomfort.",
    category: "procedure"
  },
  {
    id: "recovery-time",
    question: "What is the recovery like?",
    answer: "Most patients return to normal activities within 2-3 days. You may experience some temporary mild discomfort or blood in urine for the first few days, but this typically resolves quickly. Unlike some other procedures, there's usually no need for a catheter.",
    category: "recovery"
  },
  {
    id: "sexual-function-impact",
    question: "Will the Spring System affect my sexual function?",
    answer: "Clinical studies show no negative impact on erectile or ejaculatory function. In fact, some patients report improved sexual satisfaction due to reduced anxiety about urinary symptoms. This is a key advantage over some medications and surgical procedures.",
    category: "benefits"
  },
  {
    id: "results-timeline",
    question: "When will I see results?",
    answer: "Most patients notice significant improvement in their symptoms within 2-4 weeks after the procedure. The full benefits typically develop over the first few months as any initial swelling resolves.",
    category: "benefits"
  },
  {
    id: "durability",
    question: "How long do the results last?",
    answer: "Clinical studies show durable symptom improvement lasting 3+ years and counting. The Spring System is designed to be a long-term solution, not a temporary fix.",
    category: "benefits"
  },
  {
    id: "vs-medications",
    question: "Can I stop taking BPH medications after the procedure?",
    answer: "Many patients are able to reduce or eliminate their BPH medications after the Spring System procedure, but this decision should always be made in consultation with your urologist based on your individual response to treatment.",
    category: "benefits"
  },
  {
    id: "candidate-eligibility",
    question: "Am I a candidate for the Spring System?",
    answer: "The Spring System is appropriate for many men with BPH symptoms, but the best way to determine if you're a candidate is to consult with a urologist who is trained in the procedure. Factors like prostate size, overall health, and symptom severity all play a role in treatment selection.",
    category: "general"
  }
];

export const heroStats = {
  menAffected: "40 million",
  ageGroup: "50% by age 50",
  nightlyWakeups: "2-6 times per night",
  yearsOfStudying: "Limited by fear and embarrassment"
};

export const procedureSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "Meet with a trained urologist to discuss your symptoms and determine if you're a candidate",
    icon: "user-doctor"
  },
  {
    step: 2,
    title: "Simple Procedure",
    description: "15-30 minute outpatient procedure using local anesthesia - no incisions needed",
    icon: "clock"
  },
  {
    step: 3,
    title: "Rapid Recovery",
    description: "Go home the same day and return to normal activities within 2-3 days",
    icon: "home"
  },
  {
    step: 4,
    title: "Lasting Relief",
    description: "Enjoy improved symptoms and quality of life with results that last for years",
    icon: "heart-handshake"
  }
];