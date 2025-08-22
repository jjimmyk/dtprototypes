import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

interface FireMapProps {
  className?: string;
}

export function FireMap({ className }: FireMapProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeValue, setTimeValue] = useState([24]);

  return (
    <div className={`bg-card rounded-lg overflow-hidden ${className}`}>
      {/* Map Header */}
      <div className="bg-card border-b border-border flex items-center justify-between px-4 py-3">
        <h3 className="text-foreground font-medium">
          Lahaina Fire Incident - Real-time Monitoring
        </h3>
        <Button variant="ghost" size="sm">
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Map Area */}
      <div className="relative h-[600px] bg-gradient-to-br from-orange-900/20 via-red-900/30 to-yellow-900/20">
        {/* Simulated map background */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-900/10 to-transparent"></div>
        </div>
        
        {/* Fire zones overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl">
            {/* Active fire zone */}
            <div className="absolute top-20 left-40 w-32 h-24 bg-red-600/70 rounded-lg animate-pulse">
              <div className="absolute -top-6 left-2 text-xs text-foreground bg-destructive px-2 py-1 rounded">
                Active Fire Zone A
              </div>
            </div>
            
            {/* Contained zone */}
            <div className="absolute top-32 right-32 w-28 h-20 bg-orange-500/50 rounded-lg">
              <div className="absolute -top-6 left-2 text-xs text-foreground bg-orange-600 px-2 py-1 rounded">
                Contained Zone B
              </div>
            </div>
            
            {/* Evacuation zones */}
            <div className="absolute bottom-32 left-20 w-40 h-32 border-2 border-yellow-500 border-dashed rounded-lg">
              <div className="absolute -top-6 left-2 text-xs text-foreground bg-yellow-600 px-2 py-1 rounded">
                Evacuation Zone 1
              </div>
            </div>
            
            {/* Fire department units */}
            <div className="absolute top-40 left-20 w-3 h-3 bg-blue-500 rounded-full">
              <div className="absolute -top-6 -left-8 text-xs text-foreground bg-primary px-2 py-1 rounded whitespace-nowrap">
                Engine 7
              </div>
            </div>
            
            <div className="absolute bottom-40 right-40 w-3 h-3 bg-blue-500 rounded-full">
              <div className="absolute -top-6 -left-8 text-xs text-foreground bg-primary px-2 py-1 rounded whitespace-nowrap">
                Ladder 3
              </div>
            </div>
            
            {/* Water sources */}
            <div className="absolute top-60 right-20 w-4 h-4 bg-cyan-400 rounded-full">
              <div className="absolute -top-6 -left-6 text-xs text-foreground bg-cyan-600 px-2 py-1 rounded whitespace-nowrap">
                Water Source
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
          <h4 className="text-sm font-medium text-foreground mb-2">Legend</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span className="text-foreground">Active Fire</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <span className="text-foreground">Contained</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-yellow-500 border-dashed"></div>
              <span className="text-foreground">Evacuation Zone</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-foreground">Fire Units</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-foreground">Water Source</span>
            </div>
          </div>
        </div>
      </div>

      {/* Time Controls */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">Incident Timeline</span>
          <span className="text-sm text-foreground">Hour {timeValue[0]} - 14:30 Aug 8, 2025</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTimeValue([Math.max(0, timeValue[0] - 1)])}
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTimeValue([Math.min(72, timeValue[0] + 1)])}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
          
          <div className="flex-1 mx-4">
            <Slider
              value={timeValue}
              onValueChange={setTimeValue}
              max={72}
              step={1}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span>0h</span>
            <span>72h</span>
          </div>
        </div>
      </div>
    </div>
  );
}