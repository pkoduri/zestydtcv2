import { DTCHero } from "@/components/dtc-hero";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ProcedureExplanation } from "@/components/procedure-explanation";
import { TreatmentComparison } from "@/components/treatment-comparison";
import { FAQSection } from "@/components/faq-section";
import { FindDoctorCTA } from "@/components/find-doctor-cta";

export default function DTCHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Zenflow</h1>
                <p className="text-sm text-gray-500">Spring System</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Benefits
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                How It Works
              </a>
              <a href="#patient-stories" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Patient Stories
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                FAQ
              </a>
              <a 
                href="#find-doctor" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Find a Doctor
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <DTCHero />

        {/* Benefits Section */}
        <div id="benefits">
          <BenefitsGrid />
        </div>

        {/* How It Works Section */}
        <div id="how-it-works">
          <ProcedureExplanation />
        </div>

        {/* Patient Stories Section */}
        <div id="patient-stories">
          <TestimonialsCarousel />
        </div>

        {/* Treatment Comparison */}
        <TreatmentComparison />

        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Find Doctor CTA */}
        <FindDoctorCTA />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zenflow</h3>
                  <p className="text-gray-400">Spring System</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                The Spring System offers a new approach to BPH treatment that preserves 
                what matters most while delivering lasting relief from urinary symptoms.
              </p>
              <div className="text-sm text-gray-400">
                <p>© 2024 Zenflow, Inc. All rights reserved.</p>
                <p>FDA-approved medical device for the treatment of BPH.</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">For Patients</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#patient-stories" className="hover:text-white transition-colors">Patient Stories</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#find-doctor" className="hover:text-white transition-colors">Find a Doctor</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>1-800-ZENFLOW</li>
                <li>patients@zenflow.com</li>
                <li>Mon-Fri 8AM-6PM EST</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              Important Safety Information: The Spring System is intended for the treatment of urinary outflow 
              obstruction secondary to benign prostatic hyperplasia (BPH) in men ≥ 50 years old. As with any 
              medical procedure, individual results may vary. Please consult with a qualified healthcare provider 
              to determine if the Spring System is appropriate for your condition.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}