import { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, Users, Droplets, Wind, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface MapItemData {
  id: string;
  name: string;
  type: 'fire-zone' | 'evacuation-zone' | 'fire-unit' | 'water-source';
  status: string;
  details: Record<string, any>;
  recommendedActions: Array<{
    action: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
    timeframe: string;
    resources: string[];
  }>;
}

interface MapItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemData: MapItemData | null;
  position?: { x: number; y: number };
}

export function MapItemModal({ isOpen, onClose, itemData, position }: MapItemModalProps) {
  if (!itemData || !isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fire-zone':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'evacuation-zone':
        return <Users className="h-4 w-4 text-yellow-600" />;
      case 'fire-unit':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'water-source':
        return <Droplets className="h-4 w-4 text-cyan-500" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'critical':
        return 'bg-destructive text-destructive-foreground';
      case 'contained':
      case 'warning':
        return 'bg-orange-600 text-white';
      case 'moderate risk':
        return 'bg-yellow-500 text-black';
      case 'available':
      case 'normal':
        return 'bg-emerald-600 text-white';
      case 'mandatory':
        return 'bg-destructive text-destructive-foreground';
      case 'advisory':
        return 'bg-yellow-600 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  // Calculate position - default to center-right if no position provided
  const modalStyle = position 
    ? {
        position: 'fixed' as const,
        left: Math.min(position.x + 20, window.innerWidth - 400),
        top: Math.min(position.y - 100, window.innerHeight - 400),
        zIndex: 1000,
      }
    : {
        position: 'fixed' as const,
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
      };

  return (
    <div 
      className="w-96 max-h-[60vh] bg-card border border-border rounded-lg shadow-lg overflow-hidden"
      style={modalStyle}
    >
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getTypeIcon(itemData.type)}
            <h3 className="font-medium text-card-foreground">{itemData.name}</h3>
            <Badge className={`${getStatusColor(itemData.status)} text-xs`}>
              {itemData.status}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="max-h-64 overflow-y-auto">
        <div className="p-4 space-y-4">
          {/* Key Details */}
          <div>
            <h4 className="font-medium text-sm mb-2 text-card-foreground">Key Details</h4>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(itemData.details).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="font-medium text-card-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-card border-t border-border p-3">
        <div className="flex">
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            Update Status
          </Button>
        </div>
      </div>
    </div>
  );
}