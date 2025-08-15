import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Clock, Home, HeartHandshake, Play, CheckCircle } from "lucide-react";
import { procedureSteps } from "@/data/dtc-content";

const iconMap = {
  "user-doctor": UserCheck,
  clock: Clock,
  home: Home,
  "heart-handshake": HeartHandshake
};

export function ProcedureExplanation() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple Process, Life-Changing Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Spring System procedure is designed to be as comfortable and convenient as possible. 
            Here's what you can expect from consultation to recovery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {procedureSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            const isLast = index === procedureSteps.length - 1;
            
            return (
              <div key={step.step} className="relative" data-testid={`procedure-step-${step.step}`}>
                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 z-0 transform translate-x-4"></div>
                )}
                
                <Card className="relative z-10 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
                      Step {step.step}
                    </Badge>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Procedure Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Procedure Visual/Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What Makes the Spring System Different?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">No Cutting or Tissue Removal</h4>
                    <p className="text-gray-600 text-sm">The spring works with your natural anatomy - no tissue is cut, burned, or removed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Minimally Invasive Placement</h4>
                    <p className="text-gray-600 text-sm">Inserted through the urethra using local anesthesia - no incisions needed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Immediate Relief</h4>
                    <p className="text-gray-600 text-sm">The spring immediately props open the urethra for improved urine flow</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Permanent Solution</h4>
                    <p className="text-gray-600 text-sm">Once placed, the spring provides lasting relief for years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video placeholder */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Play className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-semibold mb-2">Watch: How the Spring System Works</h4>
                <p className="text-blue-100">See a 3D animation of the procedure and learn from medical experts</p>
              </CardContent>
            </Card>
          </div>

          {/* Right: Key Stats and Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Procedure Facts</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15-30</div>
                  <div className="text-sm text-gray-700">Minutes</div>
                  <div className="text-xs text-gray-500">Procedure time</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">2-3</div>
                  <div className="text-sm text-gray-700">Days</div>
                  <div className="text-xs text-gray-500">Recovery time</div>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">3+</div>
                  <div className="text-sm text-gray-700">Years</div>
                  <div className="text-xs text-gray-500">Proven durability</div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-1">90%</div>
                  <div className="text-sm text-gray-700">Satisfaction</div>
                  <div className="text-xs text-gray-500">Patient rating</div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Most Patients Experience:
                </h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Improved sleep quality within weeks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Reduced bathroom frequency during day and night</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Stronger, more complete urine stream</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Renewed confidence and quality of life</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}