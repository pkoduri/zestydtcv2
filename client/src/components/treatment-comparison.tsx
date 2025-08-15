import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle, Clock, Zap, Shield, Heart } from "lucide-react";
import { treatmentComparisons } from "@/data/dtc-content";

const getStatusIcon = (text: string) => {
  if (text.toLowerCase().includes('preserved') || text.toLowerCase().includes('no negative') || text.toLowerCase().includes('long-term')) {
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  }
  if (text.toLowerCase().includes('high risk') || text.toLowerCase().includes('several weeks')) {
    return <XCircle className="w-4 h-4 text-red-500" />;
  }
  if (text.toLowerCase().includes('generally') || text.toLowerCase().includes('moderate') || text.toLowerCase().includes('good')) {
    return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
  }
  return null;
};

const getStatusColor = (text: string) => {
  if (text.toLowerCase().includes('preserved') || text.toLowerCase().includes('no negative') || text.toLowerCase().includes('long-term')) {
    return 'text-green-700 bg-green-50 border-green-200';
  }
  if (text.toLowerCase().includes('high risk') || text.toLowerCase().includes('several weeks')) {
    return 'text-red-700 bg-red-50 border-red-200';
  }
  if (text.toLowerCase().includes('generally') || text.toLowerCase().includes('moderate') || text.toLowerCase().includes('good')) {
    return 'text-yellow-700 bg-yellow-50 border-yellow-200';
  }
  return 'text-gray-700 bg-gray-50 border-gray-200';
};

export function TreatmentComparison() {
  const springSystem = treatmentComparisons[0]; // Zenflow Spring System is first
  const otherTreatments = treatmentComparisons.slice(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Does the Spring System Compare?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When choosing a BPH treatment, it's important to understand all your options. 
            Here's how the Spring System stacks up against other treatments.
          </p>
        </div>

        {/* Featured Spring System Card */}
        <Card className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-2xl" data-testid="spring-system-highlight">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-white flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span>{springSystem.treatment}</span>
              </CardTitle>
              <Badge className="bg-white text-blue-600 font-semibold">Recommended</Badge>
            </div>
          </CardHeader>
          <CardContent className="text-white">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-200" />
                <div>
                  <div className="font-medium text-blue-100 text-sm">Recovery</div>
                  <div className="text-sm">{springSystem.recovery}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-200" />
                <div>
                  <div className="font-medium text-blue-100 text-sm">Durability</div>
                  <div className="text-sm">{springSystem.durability}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-blue-200" />
                <div>
                  <div className="font-medium text-blue-100 text-sm">Sexual Function</div>
                  <div className="text-sm">{springSystem.sexualFunction}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-200" />
                <div>
                  <div className="font-medium text-blue-100 text-sm">Special Benefit</div>
                  <div className="text-sm">{springSystem.notes}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">Treatment</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Procedure Type</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Recovery Time</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Durability</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Sexual Function</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Key Notes</th>
                </tr>
              </thead>
              <tbody>
                {/* Spring System Row (highlighted) */}
                <tr className="bg-blue-50 border-b border-blue-100" data-testid="comparison-spring-system">
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="font-semibold text-blue-900">{springSystem.treatment}</span>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-gray-700">{springSystem.procedure}</td>
                  <td className="p-6">
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs border ${getStatusColor(springSystem.recovery)}`}>
                      {getStatusIcon(springSystem.recovery)}
                      <span>{springSystem.recovery}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs border ${getStatusColor(springSystem.durability)}`}>
                      {getStatusIcon(springSystem.durability)}
                      <span>{springSystem.durability}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs border ${getStatusColor(springSystem.sexualFunction)}`}>
                      {getStatusIcon(springSystem.sexualFunction)}
                      <span>{springSystem.sexualFunction}</span>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-gray-700">{springSystem.notes}</td>
                </tr>

                {/* Other Treatments */}
                {otherTreatments.map((treatment, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-25" data-testid={`comparison-${treatment.treatment.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <td className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span className="font-medium text-gray-900">{treatment.treatment}</span>
                      </div>
                    </td>
                    <td className="p-6 text-sm text-gray-700">{treatment.procedure}</td>
                    <td className="p-6">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs border ${getStatusColor(treatment.recovery)}`}>
                        {getStatusIcon(treatment.recovery)}
                        <span>{treatment.recovery}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs border ${getStatusColor(treatment.durability)}`}>
                        {getStatusIcon(treatment.durability)}
                        <span>{treatment.durability}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs border ${getStatusColor(treatment.sexualFunction)}`}>
                        {getStatusIcon(treatment.sexualFunction)}
                        <span>{treatment.sexualFunction}</span>
                      </div>
                    </td>
                    <td className="p-6 text-sm text-gray-700">{treatment.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Clear Choice for Modern BPH Treatment
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl">
                The Spring System is the only BPH treatment that combines rapid recovery, 
                lasting durability, and preserved sexual function without any cutting or tissue removal.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-white text-green-600 border-green-200">
                  ✓ Fastest Recovery
                </Badge>
                <Badge variant="outline" className="bg-white text-blue-600 border-blue-200">
                  ✓ 100% Tissue Preservation
                </Badge>
                <Badge variant="outline" className="bg-white text-purple-600 border-purple-200">
                  ✓ Sexual Function Maintained
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}