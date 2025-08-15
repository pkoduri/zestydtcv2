import type { GTMPhase, TimelinePhase, CustomerSegment } from "@shared/schema";

export const customerSegments: CustomerSegment[] = [
  {
    segment: "Innovator Surgeons",
    characteristics: "Early adopters, KOLs, often affiliated with teaching hospitals",
    implications: "Focused pilot sites, co-development of data"
  },
  {
    segment: "Volume Community Urologists",
    characteristics: "Practice efficiency, procedure turnover, economic incentives matter",
    implications: "Focus on short procedure time, reimbursement simplicity"
  },
  {
    segment: "ASC Administrators",
    characteristics: "Cost-sensitive, prefer capital-light setups",
    implications: "Frame Zenflow as an office-based or low-capex ASC play"
  },
  {
    segment: "Hospital VACs",
    characteristics: "Demand strong clinical and economic evidence",
    implications: "Build VAC dossiers with modeled economic advantages"
  }
];

export const timelinePhases: TimelinePhase[] = [
  {
    id: "clinical-validation",
    title: "Clinical Validation",
    timeframe: "-36 to -24 months",
    description: "Design pivotal trial for claims differentiation",
    actions: ["Clinical Trials", "Regulatory"],
    color: "red",
    icon: "microscope"
  },
  {
    id: "segmentation",
    title: "Segmentation & Early Adopter ID",
    timeframe: "-24 to -18 months",
    description: "Build targeting lists, KOL engagement",
    actions: ["Market Research", "KOL Identification"],
    color: "orange",
    icon: "users"
  },
  {
    id: "commercial-build",
    title: "Commercial Build & Pilot",
    timeframe: "-18 to -12 months",
    description: "Rep hiring, early market prep, VAC submission kits",
    actions: ["Sales Team", "Market Access"],
    color: "yellow",
    icon: "building"
  },
  {
    id: "launch-readiness",
    title: "Launch Readiness",
    timeframe: "-12 to 0 months",
    description: "Execute playbooks, sales training, DTC rollout",
    actions: ["Training", "Marketing"],
    color: "green",
    icon: "rocket"
  },
  {
    id: "post-launch",
    title: "Post-Launch Optimization",
    timeframe: "0 to +24 months",
    description: "Field feedback loops, pricing refinement, expansion",
    actions: ["Optimization", "Expansion"],
    color: "blue",
    icon: "chart-line"
  }
];

export const gtmPhases: GTMPhase[] = [
  {
    id: 1,
    title: "Launch Situation Assessment (LSA)",
    subtitle: "Comprehensive market analysis and strategic readiness evaluation",
    description: "Before any GTM strategy is developed, L.E.K. would conduct a comprehensive LSA tailored to Zenflow:",
    content: {
      sections: [
        {
          title: "Key Assessment Areas",
          description: "Critical areas for comprehensive evaluation",
          type: "grid",
          items: [
            {
              title: "Product Differentiation",
              description: "How differentiated is Zenflow's mechanism (e.g., minimally invasive, durability, ease-of-use, adverse event profile)?",
              icon: "microscope",
              color: "blue"
            },
            {
              title: "Evidence Requirements",
              description: "What evidence is needed to support reimbursement and clinician preference?",
              icon: "chart-line",
              color: "green"
            },
            {
              title: "Target Population",
              description: "What is the target patient population (e.g., prostate size, comorbidities, setting of care)?",
              icon: "users",
              color: "purple"
            },
            {
              title: "Decision Makers",
              description: "Who are the primary decision-makers (urologists, ASC administrators, hospital VACs)?",
              icon: "user-tie",
              color: "orange"
            }
          ]
        },
        {
          title: "Strategic Impact",
          description: "This informs clinical, commercial, and organizational readiness strategy.",
          type: "text",
          items: []
        }
      ]
    }
  },
  {
    id: 2,
    title: "Differentiated Positioning vs. Entrenched Competitors",
    subtitle: "Strategic positioning against established market leaders",
    description: "Given the dominance of UroLift, Rezum, and PROCEPT (Aquablation), L.E.K. would:",
    content: {
      sections: [
        {
          title: "Competitive Landscape",
          description: "Understanding established market leaders",
          type: "grid",
          items: [
            {
              title: "UroLift",
              features: ["Fast procedure", "Office-based", "Limited durability"],
              color: "red"
            },
            {
              title: "Rezum",
              features: ["Steam technology", "Durable results", "Long recovery time"],
              color: "blue"
            },
            {
              title: "PROCEPT (Aquablation)",
              features: ["Capital-intensive", "Strong clinical data", "High procedure complexity"],
              color: "green"
            }
          ]
        },
        {
          title: "Strategic Approach",
          description: "Key strategies for market positioning",
          type: "list",
          items: [
            {
              title: "Gap Identification",
              description: "Identify gaps in clinical utility, patient satisfaction, or procedural logistics where Zenflow could own a niche (e.g., retreatment cases, same-day return to function)."
            },
            {
              title: "Claims Strategy",
              description: "Develop claims strategy and clinical trial design that demonstrates superiority or non-inferiority in a targeted subsegment."
            },
            {
              title: "Economic Modeling",
              description: "Use economic modeling tools to compare cost-per-QALY, retreatment rates, and ASC/hospital cost structures to existing options."
            }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Customer Segmentation & Early Adopter Targeting",
    subtitle: "Strategic segmentation of urology providers and stakeholders",
    description: "L.E.K. would segment urology providers based on:",
    content: {
      sections: [
        {
          title: "Provider Segments",
          description: "Key customer segments and targeting strategies",
          type: "table",
          data: customerSegments
        },
        {
          title: "Critical Success Factor",
          description: 'Avoid "poisoning the market" by engaging non-ideal first users.',
          type: "text",
          items: []
        }
      ]
    }
  },
  {
    id: 4,
    title: "Adoption Playbook Development",
    subtitle: "Tailored strategies for different stakeholder segments",
    description: "L.E.K. would design specific playbooks by segment:",
    content: {
      sections: [
        {
          title: "Segment-Specific Playbooks",
          description: "Customized approaches for each stakeholder group",
          type: "grid",
          items: [
            {
              title: "For Clinicians",
              items: ["Comparative clinical data presentations", "Interactive video training modules", "Peer-to-peer KOL educational events", "Case study workshops and best practices"],
              icon: "user-md",
              color: "blue"
            },
            {
              title: "For Administrators",
              items: ["Time-to-break-even calculators", "Patient demand forecasting tools", "Procedural throughput metrics analysis", "ROI modeling and financial projections"],
              icon: "calculator",
              color: "green"
            },
            {
              title: "For Patients",
              items: ["Digital awareness campaigns", "Treatment finder applications", "Tele-assessment funnel systems", "Patient education resources"],
              icon: "mobile-alt",
              color: "purple"
            }
          ]
        },
        {
          title: "Best Practice Model",
          description: "Zenflow could emulate PROCEPT's sales funnel approach (case observations, training, tiered commitments) to avoid free trials and ensure only enthusiastic adopters proceed.",
          type: "text",
          items: []
        }
      ]
    }
  },
  {
    id: 5,
    title: "Sales Model Design",
    subtitle: "Optimized sales structure for office-based and ASC-friendly environments",
    description: "Based on Zenflow's target setting (likely office-based and ASC-friendly), L.E.K. would propose:",
    content: {
      sections: [
        {
          title: "Sales Structure Components",
          description: "Key elements of the proposed sales model",
          type: "grid",
          items: [
            {
              title: "Sales Structure",
              items: ["Lean sales model with field reps", "Physician training support", "Conversion optimization focus"],
              icon: "users",
              color: "blue"
            },
            {
              title: "Hybrid Model",
              items: ["Inside/outside salesforce balance", "Remote detailing capabilities", "Centralized case scheduling"],
              icon: "laptop",
              color: "green"
            },
            {
              title: "Clinical Support",
              items: ["Early surgeon champions program", "Procedural success optimization", "Ongoing clinical guidance"],
              icon: "stethoscope",
              color: "purple"
            },
            {
              title: "Sales Enablement",
              items: ["Economic value calculators", "Patient ID EMR flags", "Competitive comparison tools"],
              icon: "tools",
              color: "orange"
            }
          ]
        },
        {
          title: "Priority Tools",
          description: "Sales enablement tools like economic value calculators and patient ID EMR flags should be prioritized for maximum impact.",
          type: "text",
          items: []
        }
      ]
    }
  },
  {
    id: 6,
    title: "Market Access and Reimbursement",
    subtitle: "Strategic approach to overcome entrenched reimbursement pathways",
    description: "To counter entrenched reimbursement pathways for UroLift, Rezum, and Aquablation:",
    content: {
      sections: [
        {
          title: "Market Access Strategy",
          description: "Multi-pronged approach to reimbursement",
          type: "list",
          items: [
            {
              title: "Parallel Path Strategy",
              description: "Pursue HCPCS/CPT pathway while building DTC demand for self-pay (hybrid model).",
              icon: "route",
              color: "blue"
            },
            {
              title: "Economic Dossiers",
              description: "Develop economic dossiers for MACs and private payers showcasing lower retreatment rates, improved patient experience, and total cost savings over 12–24 months.",
              icon: "file-alt",
              color: "green"
            },
            {
              title: "Hybrid Commercialization",
              description: "Zenflow could also follow a below-the-line or hybrid commercialization model if it offers procedural simplicity and low adverse events.",
              icon: "handshake",
              color: "purple"
            }
          ]
        },
        {
          title: "Value Proposition Elements",
          description: "Key value drivers for payers and providers",
          type: "grid",
          items: [
            {
              title: "Lower Retreatment Rates",
              description: "Reduced need for follow-up procedures",
              icon: "redo-alt",
              color: "green"
            },
            {
              title: "Improved Experience",
              description: "Enhanced patient satisfaction metrics",
              icon: "smile",
              color: "green"
            },
            {
              title: "Total Cost Savings",
              description: "Cost reduction over 12–24 months",
              icon: "dollar-sign",
              color: "green"
            }
          ]
        }
      ]
    }
  },
  {
    id: 7,
    title: "Organizational Alignment & KPI Design",
    subtitle: "Performance metrics and organizational structure optimization",
    description: "Align incentives not just to unit sales, but also utilization, surgeon satisfaction, and retreatment avoidance.",
    content: {
      sections: [
        {
          title: "Organizational Framework",
          description: "Key elements for organizational success",
          type: "list",
          items: [
            {
              title: "Incentive Alignment",
              description: "Align incentives not just to unit sales, but also utilization, surgeon satisfaction, and retreatment avoidance.",
              icon: "bullseye",
              color: "blue"
            },
            {
              title: "Ongoing Support",
              description: "Ensure support teams stay involved post-installation to drive utilization and reference site value.",
              icon: "hands-helping",
              color: "purple"
            }
          ]
        },
        {
          title: "Tailored KPIs",
          description: "Key performance indicators for success measurement",
          type: "grid",
          items: [
            {
              title: "30-Day Reintervention Rate",
              description: "Track procedure success and safety",
              icon: "calendar",
              color: "green"
            },
            {
              title: "Case Throughput",
              description: "Measure operational efficiency",
              icon: "clock",
              color: "green"
            },
            {
              title: "ASC Payback Period",
              description: "Monitor financial performance",
              icon: "dollar-sign",
              color: "green"
            }
          ]
        }
      ]
    }
  }
];
