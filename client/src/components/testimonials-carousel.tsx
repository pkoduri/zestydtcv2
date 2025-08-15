import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { patientTestimonials } from "@/data/dtc-content";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % patientTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + patientTestimonials.length) % patientTestimonials.length);
  };

  const currentTestimonial = patientTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from Real Patients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from men who've reclaimed their quality of life with the Spring System.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="bg-white shadow-xl border-0 overflow-hidden" data-testid={`testimonial-${currentTestimonial.id}`}>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Avatar/Info Section */}
                <div className="bg-blue-600 text-white p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">{currentTestimonial.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{currentTestimonial.name}</h3>
                  <p className="text-blue-100 text-sm mb-2">Age {currentTestimonial.age}</p>
                  <p className="text-blue-100 text-sm mb-4">{currentTestimonial.location}</p>
                  <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1 text-xs font-medium">
                    {currentTestimonial.timeframe}
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 p-8">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  
                  <blockquote className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
                    \"{currentTestimonial.quote}\"
                  </blockquote>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Before Spring System:</h4>
                      <p className="text-gray-700">{currentTestimonial.beforeStory}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">After Spring System:</h4>
                      <p className="text-gray-700">{currentTestimonial.afterStory}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={prevTestimonial}
            disabled={patientTestimonials.length <= 1}
            data-testid="btn-prev-testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={nextTestimonial}
            disabled={patientTestimonials.length <= 1}
            data-testid="btn-next-testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {patientTestimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              data-testid={`testimonial-dot-${index}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to write your own success story?
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
            onClick={() => document.getElementById("find-doctor")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="btn-testimonial-cta"
          >
            Find a Spring System Doctor Near You
          </Button>
        </div>
      </div>
    </section>
  );
}