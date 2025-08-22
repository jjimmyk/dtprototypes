import { AlertTriangle, CheckCircle, Clock, Users, Droplets, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';

interface ActionCardProps {
  title: string;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  timeframe: string;
  resources: string[];
  status: 'pending' | 'in-progress' | 'completed';
  icon: React.ReactNode;
}

function ActionCard({ title, description, priority, timeframe, resources, status, icon }: ActionCardProps) {
  const priorityColors = {
    critical: 'border-destructive bg-destructive/5',
    high: 'border-orange-500 bg-orange-500/5',
    medium: 'border-yellow-500 bg-yellow-500/5',
    low: 'border-blue-500 bg-blue-500/5'
  };

  const statusColors = {
    pending: 'bg-muted text-muted-foreground',
    'in-progress': 'bg-orange-600 text-white',
    completed: 'bg-emerald-600 text-white'
  };

  return (
    <Card className={`${priorityColors[priority]} relative`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
          <div className="flex gap-2">
            <Badge className={statusColors[status]} variant="secondary">
              {status === 'in-progress' ? 'In Progress' : status === 'completed' ? 'Completed' : 'Pending'}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {priority.toUpperCase()}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-foreground">{description}</p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {timeframe}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-xs font-medium text-foreground">Required Resources:</div>
          <div className="flex flex-wrap gap-1">
            {resources.map((resource, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {resource}
              </Badge>
            ))}
          </div>
        </div>
        
        {status === 'pending' && (
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="text-xs">
              Deploy
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Modify
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function FirefightingActions() {
  return (
    <div className="space-y-6">
      {/* Critical Alert */}
      <Alert className="border-destructive bg-destructive/5">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-foreground">
          <strong>Wind shift detected:</strong> Fire spreading northeast toward residential area. 
          Immediate action required to establish firebreaks.
        </AlertDescription>
      </Alert>

      {/* Immediate Actions */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">Immediate Actions Required</h3>
        <div className="space-y-4">
          <ActionCard
            title="Establish Northern Firebreak"
            description="Create 20-foot firebreak along Honoapiilani Highway to prevent fire spread to residential areas. Wind shift has increased urgency."
            priority="critical"
            timeframe="Next 30 minutes"
            resources={["3 Bulldozers", "2 Engine Companies", "Incident Safety Officer"]}
            status="pending"
            icon={<AlertTriangle className="h-4 w-4 text-destructive" />}
          />
          
          <ActionCard
            title="Deploy Additional Water Tenders"
            description="Position 3 water tenders at strategic locations to maintain continuous water supply for suppression operations."
            priority="high"
            timeframe="Next 45 minutes"
            resources={["3 Water Tenders", "6 Firefighters", "Water Supply Coordinator"]}
            status="in-progress"
            icon={<Droplets className="h-4 w-4 text-blue-500" />}
          />
        </div>
      </div>

      {/* Strategic Actions */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">Strategic Operations</h3>
        <div className="space-y-4">
          <ActionCard
            title="Air Attack Coordination"
            description="Coordinate helicopter water drops on Zone A hotspots. Establish clear air corridors and communication protocols."
            priority="high"
            timeframe="Next 1 hour"
            resources={["2 Helicopters", "Air Operations Officer", "Ground Crews"]}
            status="in-progress"
            icon={<Wind className="h-4 w-4 text-cyan-500" />}
          />
          
          <ActionCard
            title="Structure Protection"
            description="Deploy structure protection teams to defend high-value buildings in threatened areas. Focus on historical district."
            priority="medium"
            timeframe="Next 2 hours"
            resources={["4 Engine Companies", "Structure Protection Specialists"]}
            status="pending"
            icon={<Users className="h-4 w-4 text-orange-500" />}
          />
          
          <ActionCard
            title="Evacuation Route Monitoring"
            description="Maintain clear evacuation routes and establish traffic control points. Monitor for smoke impact on visibility."
            priority="medium"
            timeframe="Ongoing"
            resources={["Law Enforcement", "Traffic Control", "Public Information Officer"]}
            status="completed"
            icon={<CheckCircle className="h-4 w-4 text-emerald-500" />}
          />
        </div>
      </div>

      {/* Contingency Planning */}
      <Card>
        <CardHeader>
          <CardTitle>Contingency Plans</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 border border-border rounded-lg">
            <div className="font-medium text-sm">If Fire Jumps Highway 30</div>
            <div className="text-xs text-muted-foreground mt-1">
              Implement Plan B: Expand evacuation to Zone 3, deploy marine units for waterfront access
            </div>
          </div>
          
          <div className="p-3 border border-border rounded-lg">
            <div className="font-medium text-sm">If Wind Speed Exceeds 40 mph</div>
            <div className="text-xs text-muted-foreground mt-1">
              Suspend aerial operations, establish defensive positions, full evacuation protocol
            </div>
          </div>
          
          <div className="p-3 border border-border rounded-lg">
            <div className="font-medium text-sm">If Water Supply Compromised</div>
            <div className="text-xs text-muted-foreground mt-1">
              Activate foam suppression systems, deploy marine water pumping operations
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}