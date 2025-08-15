import { cn } from "@/lib/utils";
import { Rocket, Clock } from "lucide-react";

interface SidebarNavigationProps {
  currentPhase: number | 'timeline';
  onPhaseChange: (phase: number | 'timeline') => void;
  className?: string;
}

export function SidebarNavigation({ currentPhase, onPhaseChange, className }: SidebarNavigationProps) {
  const phases = [
    { id: 1, title: "Launch Situation Assessment", subtitle: "Market analysis & readiness" },
    { id: 2, title: "Differentiated Positioning", subtitle: "Competitive advantage" },
    { id: 3, title: "Customer Segmentation", subtitle: "Target audience identification" },
    { id: 4, title: "Adoption Playbook", subtitle: "Implementation strategies" },
    { id: 5, title: "Sales Model Design", subtitle: "Sales strategy & structure" },
    { id: 6, title: "Market Access", subtitle: "Reimbursement strategy" },
    { id: 7, title: "Organizational Alignment", subtitle: "KPIs & performance metrics" }
  ];

  return (
    <div className={cn("w-80 bg-white shadow-lg border-r border-gray-200 hidden lg:block", className)}>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Framework Phases</h2>
        <nav className="space-y-2">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => onPhaseChange(phase.id)}
              data-testid={`nav-phase-${phase.id}`}
              className={cn(
                "w-full flex items-center p-3 rounded-lg text-left transition-colors",
                currentPhase === phase.id
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                  currentPhase === phase.id
                    ? "bg-white bg-opacity-20"
                    : "bg-gray-200"
                )}
              >
                <span className="text-sm font-semibold">{phase.id}</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{phase.title}</div>
                <div className={cn(
                  "text-xs",
                  currentPhase === phase.id ? "opacity-80" : "text-gray-500"
                )}>
                  {phase.subtitle}
                </div>
              </div>
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => onPhaseChange('timeline')}
            data-testid="nav-timeline"
            className={cn(
              "w-full flex items-center p-3 rounded-lg text-left transition-colors",
              currentPhase === 'timeline'
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                currentPhase === 'timeline'
                  ? "bg-white bg-opacity-20"
                  : "bg-accent bg-opacity-20"
              )}
            >
              <Clock className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Timeline View</div>
              <div className={cn(
                "text-xs",
                currentPhase === 'timeline' ? "opacity-80" : "text-gray-500"
              )}>
                Launch roadmap
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
