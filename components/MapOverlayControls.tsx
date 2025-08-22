import { useState } from 'react';
import { Flame, Wind, Layers, Eye, EyeOff, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';

interface OverlayState {
  fireIntensity: boolean;
  windData: boolean;
  resources: boolean;
}

interface MapOverlayControlsProps {
  onOverlayChange: (overlays: OverlayState) => void;
}

export function MapOverlayControls({ onOverlayChange }: MapOverlayControlsProps) {
  const [overlays, setOverlays] = useState<OverlayState>({
    fireIntensity: true,
    windData: false,
    resources: false,
  });

  const handleOverlayToggle = (type: keyof OverlayState, checked: boolean) => {
    const newOverlays = { ...overlays, [type]: checked };
    setOverlays(newOverlays);
    onOverlayChange(newOverlays);
  };

  return (
    <div className="absolute top-4 right-4 z-10 w-80">
      <Card className="bg-card/95 backdrop-blur-sm border-border">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Layers className="h-4 w-4" />
            Map Overlays
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Fire Location and Intensity */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="fire-intensity"
              checked={overlays.fireIntensity}
              onCheckedChange={(checked) => handleOverlayToggle('fireIntensity', checked as boolean)}
            />
            <div className="flex items-center gap-2 flex-1">
              <Flame className="h-4 w-4 text-red-500" />
              <label htmlFor="fire-intensity" className="text-sm font-medium text-card-foreground cursor-pointer">
                Fire Intensity Heat Map
              </label>
            </div>
            <Badge variant={overlays.fireIntensity ? "default" : "outline"} className="text-xs">
              {overlays.fireIntensity ? 'ON' : 'OFF'}
            </Badge>
          </div>

          {/* Fire Intensity Legend */}
          {overlays.fireIntensity && (
            <div className="ml-6 p-3 bg-muted/20 rounded text-xs">
              <div className="font-medium mb-2 text-card-foreground">Fire Intensity Scale:</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Low (1-3)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Moderate (4-6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-sm"></div>
                  <span className="text-muted-foreground">High (7-8)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-gradient-to-r from-red-700 to-red-900 rounded-sm"></div>
                  <span className="text-muted-foreground">Extreme (9-10)</span>
                </div>
              </div>
            </div>
          )}

          {/* Wind Data */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="wind-data"
              checked={overlays.windData}
              onCheckedChange={(checked) => handleOverlayToggle('windData', checked as boolean)}
            />
            <div className="flex items-center gap-2 flex-1">
              <Wind className="h-4 w-4 text-blue-500" />
              <label htmlFor="wind-data" className="text-sm font-medium text-card-foreground cursor-pointer">
                Wind Speed & Direction
              </label>
            </div>
            <Badge variant={overlays.windData ? "default" : "outline"} className="text-xs">
              {overlays.windData ? 'ON' : 'OFF'}
            </Badge>
          </div>

          {/* Wind Data Legend */}
          {overlays.windData && (
            <div className="ml-6 p-3 bg-muted/20 rounded text-xs">
              <div className="font-medium mb-2 text-card-foreground">Wind Speed (mph):</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-blue-400 rounded-full"></div>
                  <span className="text-muted-foreground">0-12.5 mph</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">12.5-25 mph</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-yellow-500 rounded-full"></div>
                  <span className="text-muted-foreground">25-50 mph</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">50-75 mph</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-red-500 rounded-full"></div>
                  <span className="text-muted-foreground">75+ mph</span>
                </div>
              </div>
              <div className="mt-2 text-muted-foreground">
                Arrow direction shows wind direction
              </div>
            </div>
          )}

          {/* Resources */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="resources"
              checked={overlays.resources}
              onCheckedChange={(checked) => handleOverlayToggle('resources', checked as boolean)}
            />
            <div className="flex items-center gap-2 flex-1">
              <Truck className="h-4 w-4 text-green-500" />
              <label htmlFor="resources" className="text-sm font-medium text-card-foreground cursor-pointer">
                Fire Resources & Units
              </label>
            </div>
            <Badge variant={overlays.resources ? "default" : "outline"} className="text-xs">
              {overlays.resources ? 'ON' : 'OFF'}
            </Badge>
          </div>

          {/* Resources Legend */}
          {overlays.resources && (
            <div className="ml-6 p-3 bg-muted/20 rounded text-xs">
              <div className="font-medium mb-2 text-card-foreground">Resource Types:</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Fire Engines</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Ladder Trucks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-muted-foreground">Water Tenders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-muted-foreground">Water Sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">Command Units</span>
                </div>
              </div>
            </div>
          )}

          {/* Multiple Overlays Active Notice */}
          {(overlays.fireIntensity && overlays.windData) && (
            <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
              <div className="flex items-center gap-2">
                <Eye className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium text-card-foreground">Fire-Weather Analysis Active</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Combined fire behavior and wind pattern analysis
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}