import { Flame, Wind, Thermometer, Droplets, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  status: 'critical' | 'warning' | 'normal';
  icon: React.ReactNode;
  trend?: string;
}

function MetricCard({ title, value, unit, status, icon, trend }: MetricCardProps) {
  const statusColors = {
    critical: 'bg-destructive/10 border-destructive text-destructive',
    warning: 'bg-orange-500/10 border-orange-500 text-orange-600',
    normal: 'bg-emerald-500/10 border-emerald-500 text-emerald-600'
  };

  return (
    <Card className={`${statusColors[status]}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          {unit && <span className="text-sm font-normal ml-1">{unit}</span>}
        </div>
        {trend && (
          <p className="text-xs text-muted-foreground mt-1">{trend}</p>
        )}
      </CardContent>
    </Card>
  );
}

export function FireInsights() {
  return (
    <div className="space-y-6">
      {/* Current Conditions */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">Current Fire Conditions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Fire Intensity"
            value="8.2"
            unit="/10"
            status="critical"
            icon={<Flame className="h-4 w-4" />}
            trend="↑ Increasing rapidly"
          />
          <MetricCard
            title="Wind Speed"
            value="23"
            unit="mph"
            status="warning"
            icon={<Wind className="h-4 w-4" />}
            trend="↗ Gusting to 35 mph"
          />
          <MetricCard
            title="Temperature"
            value="89"
            unit="°F"
            status="warning"
            icon={<Thermometer className="h-4 w-4" />}
            trend="Rising, low humidity"
          />
          <MetricCard
            title="Relative Humidity"
            value="12"
            unit="%"
            status="critical"
            icon={<Droplets className="h-4 w-4" />}
            trend="↓ Critically low"
          />
        </div>
      </div>

      {/* Fire Progression */}
      <Card>
        <CardHeader>
          <CardTitle>Fire Progression Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Acres Burned</span>
              <span className="font-medium">2,147 / Est. 4,500 acres</span>
            </div>
            <Progress value={48} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Containment Progress</span>
              <span className="font-medium">35%</span>
            </div>
            <Progress value={35} className="h-2" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-lg font-bold text-destructive">2</div>
              <div className="text-xs text-muted-foreground">Structures Lost</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">47</div>
              <div className="text-xs text-muted-foreground">Threatened</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-emerald-600">89</div>
              <div className="text-xs text-muted-foreground">Protected</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resource Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Resource Deployment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Fire Engines</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline">12 Active</Badge>
                <Badge variant="secondary">3 En Route</Badge>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Firefighters</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline">89 On Scene</Badge>
                <Badge variant="secondary">25 Incoming</Badge>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Air Support</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline">2 Helicopters</Badge>
                <Badge variant="secondary">1 Tanker</Badge>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Water Capacity</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline">15,000 gal</Badge>
                <Badge className="bg-emerald-600">Available</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Evacuation Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Evacuation Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
              <div>
                <div className="font-medium text-destructive">Zone 1 - Mandatory</div>
                <div className="text-sm text-muted-foreground">Front Street to Lahaina Road</div>
              </div>
              <Badge variant="destructive">Active</Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-orange-500/10 rounded-lg">
              <div>
                <div className="font-medium text-orange-600">Zone 2 - Advisory</div>
                <div className="text-sm text-muted-foreground">North of Highway 30</div>
              </div>
              <Badge className="bg-orange-600">Monitor</Badge>
            </div>
            
            <div className="text-center pt-2">
              <div className="text-lg font-bold text-foreground">1,247</div>
              <div className="text-sm text-muted-foreground">People Evacuated Safely</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}