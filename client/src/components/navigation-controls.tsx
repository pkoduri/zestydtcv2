import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationControlsProps {
  currentPhase: number | 'timeline';
  totalPhases: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function NavigationControls({ 
  currentPhase, 
  totalPhases, 
  onPrevious, 
  onNext 
}: NavigationControlsProps) {
  const canGoPrevious = currentPhase !== 1;
  const canGoNext = currentPhase !== 'timeline';
  
  const getNextButtonText = () => {
    if (currentPhase === totalPhases) {
      return "View Timeline";
    }
    return "Next";
  };

  return (
    <div className="flex justify-between items-center pt-6 border-t border-gray-200">
      <Button
        variant="ghost"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        data-testid="btn-previous"
        className="flex items-center text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </Button>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalPhases + 1 }, (_, index) => {
          const phase = index + 1;
          const isActive = phase === currentPhase || (phase === totalPhases + 1 && currentPhase === 'timeline');
          
          return (
            <div
              key={phase}
              className={`w-2 h-2 rounded-full transition-colors ${
                isActive ? 'bg-primary' : 'bg-gray-300'
              }`}
              data-testid={`progress-dot-${phase}`}
            />
          );
        })}
      </div>
      
      <Button
        variant="ghost"
        onClick={onNext}
        disabled={!canGoNext}
        data-testid="btn-next"
        className="flex items-center text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {getNextButtonText()}
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
