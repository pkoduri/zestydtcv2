import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { faqItems } from "@/data/dtc-content";
import { cn } from "@/lib/utils";

const categoryLabels = {
  general: "General Information",
  procedure: "About the Procedure",
  recovery: "Recovery & Healing",
  benefits: "Results & Benefits"
};

const categoryColors = {
  general: "bg-blue-50 text-blue-700 border-blue-200",
  procedure: "bg-green-50 text-green-700 border-green-200",
  recovery: "bg-orange-50 text-orange-700 border-orange-200",
  benefits: "bg-purple-50 text-purple-700 border-purple-200"
};

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFAQs = faqItems.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const categories = ["all", ...Object.keys(categoryLabels)];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about BPH, the Spring System procedure, 
            and what you can expect from treatment.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              data-testid="faq-search"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "text-sm font-medium",
                  selectedCategory === category 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "text-gray-600 hover:text-gray-900 border-gray-300"
                )}
                data-testid={`faq-category-${category}`}
              >
                {category === "all" ? "All Questions" : categoryLabels[category as keyof typeof categoryLabels]}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No questions found matching your search.</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your search terms or selecting a different category.</p>
            </div>
          ) : (
            filteredFAQs.map((faq) => (
              <Card key={faq.id} className="border border-gray-200 overflow-hidden" data-testid={`faq-item-${faq.id}`}>
                <Button
                  variant="ghost"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-0 h-auto text-left hover:bg-gray-50"
                  data-testid={`faq-toggle-${faq.id}`}
                >
                  <CardContent className="p-6 flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={cn(
                        "px-2 py-1 rounded text-xs font-medium border",
                        categoryColors[faq.category]
                      )}>
                        {categoryLabels[faq.category]}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-gray-400 transition-transform duration-200",
                      openFAQ === faq.id ? "rotate-180" : ""
                    )} />
                  </CardContent>
                </Button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed" data-testid={`faq-answer-${faq.id}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-50 border-blue-200 inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-700 mb-6 max-w-md">
                Our patient coordinators are here to help you understand your options 
                and connect you with a qualified Spring System provider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => document.getElementById("find-doctor")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="btn-faq-find-doctor"
                >
                  Find a Doctor
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  data-testid="btn-faq-call"
                >
                  Call 1-800-ZENFLOW
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}