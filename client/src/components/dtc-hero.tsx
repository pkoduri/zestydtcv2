import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Moon, Clock } from "lucide-react";
import { heroStats } from "@/data/dtc-content";

export function DTCHero() {
  const handleWatchVideo = () => {
    // In a real implementation, this would open a video modal or redirect to video
    console.log("Watch video clicked");
  };

  const handleFindDoctor = () => {
    // In a real implementation, this would scroll to find doctor section or open form
    document.getElementById("find-doctor")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 px-4 py-2">
                FDA-Approved BPH Treatment
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight" data-testid="hero-title">
                Stop Letting Your{" "}
                <span className="text-blue-600">Prostate</span>{" "}
                Control Your Life
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl" data-testid="hero-subtitle">
                Finally sleep through the night. No more mapping out bathrooms everywhere you go. 
                The Spring System offers lasting relief from BPH symptoms without cutting, burning, or compromising your sexual function.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-blue-600">{heroStats.menAffected}</div>
                <div className="text-sm text-gray-600">Men affected by BPH in the US</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-blue-600">{heroStats.ageGroup}</div>
                <div className="text-sm text-gray-600">Of men experience BPH by age 50</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" data-testid="hero-cta-buttons">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
                onClick={handleFindDoctor}
                data-testid="btn-find-doctor"
              >
                Find a Doctor Near You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium"
                onClick={handleWatchVideo}
                data-testid="btn-watch-video"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Patient Stories
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Moon className="h-4 w-4 text-blue-600" />
                <span>Sleep through the night</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>15-30 minute procedure</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">You Don't Have to \"Just Deal With It\"</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-red-800">Before Treatment</div>
                      <div className="text-sm text-red-700">Waking up 4-6 times every night, constant bathroom anxiety, avoiding travel and activities</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-green-800">After Spring System</div>
                      <div className="text-sm text-green-700">Sleeping through the night, confidence restored, enjoying life without bathroom anxiety</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                  <div className="text-sm text-blue-700 font-medium">Of patients report significantly improved quality of life</div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              FDA Approved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}