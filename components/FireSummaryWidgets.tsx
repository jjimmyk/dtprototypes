import { useState } from 'react';
import { Flame, AlertTriangle, CheckCircle, Clock, TrendingUp, Users, Info, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';

interface RecommendedAction {
  id: string;
  action: string;
  objective: string;
  timeframe: string;
  priority: 'critical' | 'high' | 'medium';
  explanation: string;
}

export function FireSummaryWidgets() {
  const [selectedAction, setSelectedAction] = useState<RecommendedAction | null>(null);

  const recommendedActions: RecommendedAction[] = [
    {
      id: 'air-support',
      action: 'Deploy air support to Zone A',
      objective: 'Structure Protection',
      timeframe: 'Next 15 minutes',
      priority: 'critical',
      explanation: 'Zone A North has 47 structures under immediate threat from advancing fire line. Aerial water drops can create a protective barrier and buy time for ground crews to establish defensive positions. Current wind conditions (23 mph NE) are within operational limits for helicopter operations. Immediate deployment critical as fire behavior analysis shows rapid spread potential in next 30-minute period due to low humidity (12%) and pre-heating of structures.'
    },
    {
      id: 'evacuation-expansion',
      action: 'Expand evacuation to Zone 3',
      objective: 'Life Safety',
      timeframe: 'Next 30 minutes',
      priority: 'high',
      explanation: 'Predictive fire spread modeling indicates Zone 3 could be impacted within 2-3 hours if wind patterns maintain current direction. Early evacuation allows orderly movement versus emergency evacuation under direct threat. Zone 3 has approximately 340 residents, and evacuation routes remain clear. Pre-positioning evacuation resources now prevents resource conflicts during active fire suppression operations.'
    },
    {
      id: 'water-supply',
      action: 'Establish water supply line',
      objective: 'Sustained Operations',
      timeframe: 'Next 45 minutes',
      priority: 'high',
      explanation: 'Current water consumption rate of 1,200 GPM from existing hydrants approaches system capacity limits. Additional supply line from Lahaina Harbor provides redundancy and increased flow capacity for extended operations. Analysis shows 6-8 hour suppression timeline requiring sustained 1,500+ GPM flow. Secondary benefit includes backup supply if wind-driven fire damages existing infrastructure.'
    }
  ];

  const handleActionClick = (action: RecommendedAction) => {
    setSelectedAction(action);
  };

  const closeExplanation = () => {
    setSelectedAction(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-destructive/10 border-destructive/20 text-destructive';
      case 'high':
        return 'bg-orange-500/10 border-orange-500/20 text-orange-600';
      case 'medium':
        return 'bg-blue-500/10 border-blue-500/20 text-blue-600';
      default:
        return 'bg-muted/10 border-border text-foreground';
    }
  };

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-destructive text-destructive-foreground';
      case 'high':
        return 'bg-orange-600 text-white';
      case 'medium':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Percent Contained Widget */}
        <Card className="bg-card/95 backdrop-blur-sm border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Percent Contained
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-card-foreground">35%</span>
                <Badge className="bg-orange-600 text-white">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% last hour
                </Badge>
              </div>
              <Progress value={35} className="h-2" />
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-bold text-emerald-600">650</div>
                  <div className="text-muted-foreground">Acres secured</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-orange-600">1,497</div>
                  <div className="text-muted-foreground">Acres remaining</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highest Risk Areas Widget */}
        <Card className="bg-card/95 backdrop-blur-sm border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              Highest Risk Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-destructive/10 rounded border border-destructive/20">
                <div>
                  <div className="font-medium text-sm text-card-foreground">Zone A North</div>
                  <div className="text-xs text-muted-foreground">47 structures at risk</div>
                </div>
                <Badge variant="destructive" className="text-xs">
                  CRITICAL
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-orange-500/10 rounded border border-orange-500/20">
                <div>
                  <div className="font-medium text-sm text-card-foreground">Lahaina Bypass</div>
                  <div className="text-xs text-muted-foreground">High wind exposure</div>
                </div>
                <Badge className="bg-orange-600 text-white text-xs">
                  HIGH
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                <div>
                  <div className="font-medium text-sm text-card-foreground">Front Street Historic</div>
                  <div className="text-xs text-muted-foreground">Cultural preservation</div>
                </div>
                <Badge className="bg-yellow-600 text-white text-xs">
                  WATCH
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Actions Widget */}
        <Card className="bg-card/95 backdrop-blur-sm border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-4 w-4 text-blue-500" />
              Recommended Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recommendedActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleActionClick(action)}
                  className={`w-full text-left flex items-start gap-2 p-2 rounded border transition-colors hover:bg-muted/20 ${getPriorityColor(action.priority)}`}
                >
                  <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${action.priority === 'critical' ? 'bg-destructive' : action.priority === 'high' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-medium text-xs text-card-foreground truncate">{action.action}</div>
                      <Info className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                    </div>
                    <div className="text-xs text-muted-foreground">{action.objective}</div>
                    <div className="text-xs text-muted-foreground">{action.timeframe}</div>
                  </div>
                </button>
              ))}
              
              <div className="text-center mt-2">
                <button className="text-xs text-blue-500 hover:text-blue-400 transition-colors">
                  View all recommendations (7)
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Explanation Modal */}
      {selectedAction && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Info className="h-5 w-5 text-blue-500" />
                  Action Analysis: {selectedAction.action}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={closeExplanation} className="h-6 w-6 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge className={getPriorityBadgeColor(selectedAction.priority)}>
                  {selectedAction.priority.toUpperCase()} PRIORITY
                </Badge>
                <div className="text-sm text-muted-foreground">
                  Objective: <span className="font-medium text-card-foreground">{selectedAction.objective}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Timeline: <span className="font-medium text-card-foreground">{selectedAction.timeframe}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2 text-card-foreground">Why This Action is Recommended:</h4>
                <div className="text-sm text-card-foreground leading-relaxed bg-muted/20 p-3 rounded">
                  {selectedAction.explanation}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                <Button className="flex-1">
                  Authorize Action
                </Button>
                <Button variant="outline" className="flex-1">
                  Request More Info
                </Button>
                <Button variant="outline" onClick={closeExplanation}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}