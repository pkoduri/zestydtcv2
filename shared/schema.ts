import { z } from "zod";

// GTM Framework Schemas
export const gtmPhaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  content: z.object({
    sections: z.array(z.object({
      title: z.string(),
      description: z.string(),
      type: z.enum(['text', 'grid', 'table', 'list']),
      items: z.array(z.any()).optional(),
      data: z.any().optional()
    }))
  })
});

export const timelinePhaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  timeframe: z.string(),
  description: z.string(),
  actions: z.array(z.string()),
  color: z.string(),
  icon: z.string()
});

export const customerSegmentSchema = z.object({
  segment: z.string(),
  characteristics: z.string(),
  implications: z.string()
});

// DTC Website Schemas
export const patientTestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  location: z.string(),
  beforeStory: z.string(),
  afterStory: z.string(),
  quote: z.string(),
  timeframe: z.string(),
  avatar: z.string().optional()
});

export const benefitSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  stat: z.string().optional(),
  color: z.string()
});

export const treatmentComparisonSchema = z.object({
  treatment: z.string(),
  procedure: z.string(),
  recovery: z.string(),
  durability: z.string(),
  sexualFunction: z.string(),
  notes: z.string()
});

export const faqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.enum(['general', 'procedure', 'recovery', 'benefits'])
});

export type GTMPhase = z.infer<typeof gtmPhaseSchema>;
export type TimelinePhase = z.infer<typeof timelinePhaseSchema>;
export type CustomerSegment = z.infer<typeof customerSegmentSchema>;
export type PatientTestimonial = z.infer<typeof patientTestimonialSchema>;
export type Benefit = z.infer<typeof benefitSchema>;
export type TreatmentComparison = z.infer<typeof treatmentComparisonSchema>;
export type FAQItem = z.infer<typeof faqItemSchema>;
