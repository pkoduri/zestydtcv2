import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { SidebarNavigation } from "@/components/sidebar-navigation";
import { PhaseContent } from "@/components/phase-content";
import { TimelineView } from "@/components/timeline-view";
import { NavigationControls } from "@/components/navigation-controls";
import { gtmPhases } from "@/data/gtm-framework";

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<number | 'timeline'>(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalPhases = gtmPhases.length;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPhase]);

  const handlePhaseChange = (phase: number | 'timeline') => {
    setCurrentPhase(phase);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (typeof currentPhase === 'number') {
      if (currentPhase < totalPhases) {
        handlePhaseChange(currentPhase + 1);
      } else if (currentPhase === totalPhases) {
        handlePhaseChange('timeline');
      }
    }
  };

  const handlePrevious = () => {
    if (currentPhase === 'timeline') {
      handlePhaseChange(totalPhases);
    } else if (typeof currentPhase === 'number' && currentPhase > 1) {
      handlePhaseChange(currentPhase - 1);
    }
  };

  const getProgressPercentage = () => {
    if (currentPhase === 'timeline') return 100;
    return (currentPhase as number / (totalPhases + 1)) * 100;
  };

  const getCurrentPhaseDisplay = () => {
    if (currentPhase === 'timeline') return 'Timeline';
    return currentPhase.toString();
  };

  const currentPhaseData = typeof currentPhase === 'number' 
    ? gtmPhases.find(p => p.id === currentPhase)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-rocket text-white text-sm">🚀</i>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">GTM Framework</h1>
                <p className="text-sm text-gray-500">Zenflow Launch Strategy</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Phase <span className="font-semibold text-primary" data-testid="current-phase-display">{getCurrentPhaseDisplay()}</span> of {totalPhases + 1}
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${getProgressPercentage()}%` }}
                  data-testid="progress-bar"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <SidebarNavigation 
          currentPhase={currentPhase}
          onPhaseChange={handlePhaseChange}
        />

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
            <SidebarNavigation 
              currentPhase={currentPhase}
              onPhaseChange={handlePhaseChange}
              className="relative"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Content */}
            <div className="mb-8" data-testid="main-content">
              {currentPhase === 'timeline' ? (
                <TimelineView />
              ) : currentPhaseData ? (
                <PhaseContent phase={currentPhaseData} />
              ) : null}
            </div>

            {/* Navigation Controls */}
            <NavigationControls
              currentPhase={currentPhase}
              totalPhases={totalPhases}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </main>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Button
        className="lg:hidden fixed bottom-4 right-4 w-12 h-12 rounded-full shadow-lg z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        data-testid="btn-mobile-menu"
      >
        <Menu className="w-5 h-5" />
      </Button>
    </div>
  );
}
