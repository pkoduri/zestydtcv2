import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Microscope, 
  TrendingUp, 
  Users, 
  Bus, 
  Route,
  FileText,
  Handshake,
  Target,
  Calculator,
  Smartphone,
  Laptop,
  Stethoscope,
  Settings,
  Trophy,
  Lightbulb,
  TriangleAlert
} from "lucide-react";
import type { GTMPhase, CustomerSegment } from "@shared/schema";

interface PhaseContentProps {
  phase: GTMPhase;
}

const iconMap = {
  microscope: Microscope,
  'chart-line': TrendingUp,
  users: Users,
  'user-tie': Bus,
  route: Route,
  'file-alt': FileText,
  handshake: Handshake,
  bullseye: Target,
  calculator: Calculator,
  'mobile-alt': Smartphone,
  'user-md': Users,
  laptop: Laptop,
  stethoscope: Stethoscope,
  tools: Settings,
  trophy: Trophy,
  lightbulb: Lightbulb,
  'redo-alt': TrendingUp,
  smile: Users,
  'dollar-sign': TrendingUp,
  'hands-helping': Users,
  calendar: Users,
  clock: Users,
  building: Users,
  rocket: Users
};

const colorMap = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  green: "bg-green-50 text-green-700 border-green-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  red: "bg-red-50 text-red-700 border-red-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200"
};

export function PhaseContent({ phase }: PhaseContentProps) {
  const renderSection = (section: any) => {
    switch (section.type) {
      case 'grid':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {section.items?.map((item: any, index: number) => {
              const IconComponent = item.icon ? iconMap[item.icon as keyof typeof iconMap] : null;
              const colorClass = item.color ? colorMap[item.color as keyof typeof colorMap] : "bg-gray-50";
              
              return (
                <div key={index} className={`rounded-lg p-6 border ${colorClass}`}>
                  <div className="flex items-center mb-4">
                    {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  {item.description && (
                    <p className="text-gray-700">{item.description}</p>
                  )}
                  {item.features && (
                    <ul className="space-y-1 mt-2">
                      {item.features.map((feature: string, idx: number) => (
                        <li key={idx} className="text-sm">• {feature}</li>
                      ))}
                    </ul>
                  )}
                  {item.items && (
                    <ul className="space-y-2 mt-2">
                      {item.items.map((listItem: string, idx: number) => (
                        <li key={idx} className="text-sm">• {listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        );

      case 'table':
        return (
          <div className="overflow-x-auto">
            <Table className="w-full bg-white border border-gray-200 rounded-lg">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-900">Segment</TableHead>
                  <TableHead className="font-semibold text-gray-900">Characteristics</TableHead>
                  <TableHead className="font-semibold text-gray-900">Implications</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.data?.map((row: CustomerSegment, index: number) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{row.segment}</TableCell>
                    <TableCell className="text-gray-700">{row.characteristics}</TableCell>
                    <TableCell className="text-gray-700">{row.implications}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );

      case 'list':
        return (
          <div className="space-y-6">
            {section.items?.map((item: any, index: number) => {
              const IconComponent = item.icon ? iconMap[item.icon as keyof typeof iconMap] : null;
              const colorClass = item.color ? colorMap[item.color as keyof typeof colorMap] : "bg-gray-50";
              
              return (
                <div key={index} className={`rounded-lg p-6 border ${colorClass}`}>
                  <div className="flex items-center mb-4">
                    {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        );

      case 'text':
        return (
          <div className="bg-gray-50 rounded-lg p-6 border">
            <div className="flex items-center mb-3">
              <Lightbulb className="w-5 h-5 text-yellow-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
            </div>
            <p className="text-gray-700">{section.description}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
            <span className="text-white font-semibold text-lg">{phase.id}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{phase.title}</h2>
            <p className="text-gray-600 mt-1">{phase.subtitle}</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">{phase.description}</p>
          
          <div className="space-y-8">
            {phase.content.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                {section.description && section.type !== 'text' && (
                  <p className="text-gray-700 mb-6">{section.description}</p>
                )}
                {renderSection(section)}
              </div>
            ))}
          </div>
        </div>

        {/* Special alerts for specific phases */}
        {phase.id === 3 && (
          <Alert className="mt-6 border-yellow-200 bg-yellow-50">
            <TriangleAlert className="w-4 h-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800 font-medium">
              Avoid "poisoning the market" by engaging non-ideal first users.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
