import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Clock, 
  Microscope, 
  Users, 
  Building, 
  Rocket, 
  TrendingUp,
  Lightbulb 
} from "lucide-react";
import { timelinePhases } from "@/data/gtm-framework";

const iconMap = {
  microscope: Microscope,
  users: Users,
  building: Building,
  rocket: Rocket,
  'chart-line': TrendingUp
};

const colorMap = {
  red: { bg: "bg-red-100", text: "text-red-600", badge: "bg-red-100 text-red-800" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", badge: "bg-orange-100 text-orange-800" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600", badge: "bg-yellow-100 text-yellow-800" },
  green: { bg: "bg-green-100", text: "text-green-600", badge: "bg-green-100 text-green-800" },
  blue: { bg: "bg-blue-100", text: "text-blue-600", badge: "bg-blue-100 text-blue-800" }
};

export function TimelineView() {
  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Timeline View - Launch Roadmap</h2>
            <p className="text-gray-600 mt-1">Strategic timeline from -36 months to +24 months post-launch</p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-8">
            {timelinePhases.map((phase, index) => {
              const IconComponent = iconMap[phase.icon as keyof typeof iconMap];
              const colors = colorMap[phase.color as keyof typeof colorMap];
              
              return (
                <div key={phase.id} className="relative flex items-start" data-testid={`timeline-phase-${phase.id}`}>
                  <div className={`flex-shrink-0 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center border-4 border-white shadow`}>
                    <IconComponent className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                      <Badge variant="secondary" className="text-sm font-medium">
                        {phase.timeframe}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mt-1">{phase.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {phase.actions.map((action, actionIndex) => (
                        <Badge 
                          key={actionIndex}
                          variant="outline" 
                          className={`text-xs font-medium ${colors.badge} border-0`}
                        >
                          {action}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Alert className="mt-8 bg-gray-50 border-gray-200">
          <Lightbulb className="w-4 h-4 text-yellow-500" />
          <AlertDescription className="text-gray-700">
            <strong>Next Steps:</strong> Would you like a mock GTM launch roadmap slide or a sample VAC dossier outline for Zenflow?
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
