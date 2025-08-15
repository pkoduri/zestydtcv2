import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Moon, 
  ShieldCheck, 
  Heart, 
  Zap, 
  CalendarCheck, 
  Pill 
} from "lucide-react";
import { springBenefits } from "@/data/dtc-content";
import { cn } from "@/lib/utils";

const iconMap = {
  moon: Moon,
  "shield-check": ShieldCheck,
  heart: Heart,
  zap: Zap,
  "calendar-check": CalendarCheck,
  "pill-off": Pill
};

const colorMap = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  red: "from-red-500 to-red-600",
  yellow: "from-yellow-500 to-yellow-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600"
};

export function BenefitsGrid() {
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Men Choose the Spring System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike other BPH treatments, the Spring System delivers comprehensive benefits 
            without compromising what matters most to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {springBenefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            const gradientClass = colorMap[benefit.color as keyof typeof colorMap];
            
            return (
              <Card
                key={benefit.id}
                className={cn(
                  "group cursor-pointer transition-all duration-300 transform hover:-translate-y-1",
                  "hover:shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50",
                  hoveredBenefit === benefit.id ? "scale-105 shadow-2xl" : "hover:shadow-lg"
                )}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
                data-testid={`benefit-${benefit.id}`}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Statistic Badge */}
                  {benefit.stat && (
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "bg-gradient-to-r text-white border-0 text-xs font-medium px-3 py-1",
                        gradientClass
                      )}
                    >
                      {benefit.stat}
                    </Badge>
                  )}

                  {/* Hover effect overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg",
                    gradientClass
                  )} />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Experience All These Benefits and More
            </h3>
            <p className="text-blue-700 mb-6 max-w-2xl">
              The Spring System is the only BPH treatment that delivers lasting relief while preserving 
              everything that's important to you - from sexual function to rapid recovery.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 px-4 py-2">
                No cutting or burning
              </Badge>
              <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 px-4 py-2">
                Sexual function preserved
              </Badge>
              <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 px-4 py-2">
                3+ year durability proven
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}