import { useEffect, useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { MapItemModal } from './MapItemModal';
import { MapSearchWidget } from './MapSearchWidget';
import { MapOverlayControls } from './MapOverlayControls';

interface EsriFireMapProps {
  className?: string;
  currentTime?: Date; // current timeline time provided by parent
}

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

interface SearchResult {
  id: string;
  name: string;
  type: 'location' | 'resource' | 'incident';
  coordinates?: [number, number];
  description: string;
  itemId?: string;
}

interface OverlayState {
  fireIntensity: boolean;
  windData: boolean;
  resources: boolean;
}

declare global {
  interface Window {
    $arcgis: {
      import: (modules: string[]) => Promise<any[]>;
    };
  }
}

export function EsriFireMap({ className, currentTime }: EsriFireMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<any>(null);
  const overlayGraphicsRef = useRef<any[]>([]);
  const lastSliderTimeRef = useRef<Date | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeValue, setTimeValue] = useState([24]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MapItemData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
  const [currentOverlays, setCurrentOverlays] = useState<OverlayState>({
    fireIntensity: false,
    windData: false,
    resources: false,
  });

  // Mock data for map items
  const mapItemsData: Record<string, MapItemData> = {
    'lahaina-harbor': {
      id: 'lahaina-harbor',
      name: 'Lahaina Harbor',
      type: 'water-source',
      status: 'Available',
      details: {
        facility: 'Small Boat Harbor',
        waterAccess: '2 boat ramps available',
        emergencyDock: 'Operational',
        evacuationStaging: '200 person capacity',
        lastInspection: '2 hours ago',
        security: 'Coast Guard on-site'
      },
      recommendedActions: [
        {
          action: 'Stage marine evacuation vessels',
          priority: 'medium',
          timeframe: 'Next 1 hour',
          resources: ['Coast Guard Cutter', '3 Civilian Vessels', 'Harbor Master']
        },
        {
          action: 'Establish water supply pumping station',
          priority: 'low',
          timeframe: 'Within 4 hours',
          resources: ['Portable Pumps', 'Water Engineer', 'Supply Lines']
        }
      ]
    },
    'front-street': {
      id: 'front-street',
      name: 'Front Street Historic District',
      type: 'evacuation-zone',
      status: 'Moderate Risk',
      details: {
        buildings: '47 historic structures',
        evacuation: 'Moderate Risk',
        personsAtRisk: '1872',
        structures: '12 commercial, 35 residential',
        roadAccess: '2 routes clear',
        fireDistance: '0.8 miles'
      },
      recommendedActions: [
        {
          action: 'Pre-position structure protection teams',
          priority: 'high',
          timeframe: 'Next 45 minutes',
          resources: ['2 Engine Companies', 'Structure Protection Specialists', 'Preservation Officer']
        },
        {
          action: 'Document cultural assets for preservation',
          priority: 'medium',
          timeframe: 'Next 2 hours',
          resources: ['Cultural Heritage Team', 'Digital Documentation Equipment']
        }
      ]
    },
    'fire-zone-a': {
      id: 'fire-zone-a',
      name: 'Active Fire Zone A',
      type: 'fire-zone',
      status: 'Active',
      details: {
        acres: '450 acres',
        intensity: 'High (8.2/10)',
        windSpeed: '23 mph',
        temperature: '89°F',
        humidity: '12%',
        structures: '15 threatened'
      },
      recommendedActions: [
        {
          action: 'Establish firebreak on north perimeter',
          priority: 'critical',
          timeframe: 'Next 30 minutes',
          resources: ['3 Bulldozers', '2 Engine Companies', 'Safety Officer']
        },
        {
          action: 'Deploy foam suppression systems',
          priority: 'high',
          timeframe: 'Next 45 minutes',
          resources: ['Foam Truck', '4 Firefighters', 'Foam Coordinator']
        }
      ]
    },
    'fire-zone-b': {
      id: 'fire-zone-b',
      name: 'Contained Zone B',
      type: 'fire-zone',
      status: 'Contained',
      details: {
        acres: '200 acres',
        containment: '85%',
        mopUpCrew: '12 firefighters',
        hotSpots: '3 identified',
        timeContained: '2 hours ago'
      },
      recommendedActions: [
        {
          action: 'Continue mop-up operations',
          priority: 'medium',
          timeframe: 'Next 4 hours',
          resources: ['Mop-up Crew', 'Water Tender', 'Supervisor']
        },
        {
          action: 'Monitor for rekindling',
          priority: 'medium',
          timeframe: 'Ongoing',
          resources: ['Patrol Unit', 'Thermal Camera']
        }
      ]
    },
    'evacuation-zone-1': {
      id: 'evacuation-zone-1',
      name: 'Evacuation Zone 1',
      type: 'evacuation-zone',
      status: 'Mandatory',
      details: {
        population: '847 residents',
        evacuated: '782 people',
        remaining: '65 estimated',
        shelters: '3 available',
        accessRoutes: '2 clear, 1 blocked'
      },
      recommendedActions: [
        {
          action: 'Door-to-door evacuation sweep',
          priority: 'critical',
          timeframe: 'Next 20 minutes',
          resources: ['Law Enforcement', 'Emergency Services', 'Translators']
        },
        {
          action: 'Clear Highway 30 alternate route',
          priority: 'high',
          timeframe: 'Next 1 hour',
          resources: ['Road Crew', 'Traffic Control', 'Emergency Vehicles']
        }
      ]
    },
    'engine-7': {
      id: 'engine-7',
      name: 'Engine 7',
      type: 'fire-unit',
      status: 'Active',
      details: {
        crew: '4 firefighters',
        waterCapacity: '500 gallons',
        fuelLevel: '75%',
        assignment: 'Structure protection',
        location: 'Front Street sector',
        lastUpdate: '5 minutes ago'
      },
      recommendedActions: [
        {
          action: 'Reposition for better coverage',
          priority: 'medium',
          timeframe: 'Next 15 minutes',
          resources: ['Command Authorization', 'Route Coordination']
        },
        {
          action: 'Refuel and resupply',
          priority: 'low',
          timeframe: 'Within 2 hours',
          resources: ['Fuel Truck', 'Supply Team']
        }
      ]
    },
    'ladder-3': {
      id: 'ladder-3',
      name: 'Ladder 3',
      type: 'fire-unit',
      status: 'Active',
      details: {
        crew: '5 firefighters',
        ladderHeight: '100 feet',
        pumpCapacity: '1500 GPM',
        assignment: 'Aerial operations',
        location: 'Lahainaluna Road',
        lastUpdate: '3 minutes ago'
      },
      recommendedActions: [
        {
          action: 'Provide elevated water stream on Zone A',
          priority: 'high',
          timeframe: 'Immediate',
          resources: ['Water Supply', 'Ground Support Crew']
        }
      ]
    },
    'water-source-1': {
      id: 'water-source-1',
      name: 'Water Source - Hydrant H-47',
      type: 'water-source',
      status: 'Available',
      details: {
        flowRate: '1500 GPM',
        pressure: '65 PSI',
        connections: '2 available',
        unitsConnected: 'Engine 12, Tender 5',
        waterQuality: 'Municipal grade',
        backupPower: 'Generator ready'
      },
      recommendedActions: [
        {
          action: 'Deploy additional tender connection',
          priority: 'medium',
          timeframe: 'Next 30 minutes',
          resources: ['Water Tender', 'Connection Equipment']
        },
        {
          action: 'Test backup generator',
          priority: 'low',
          timeframe: 'Within 1 hour',
          resources: ['Maintenance Crew']
        }
      ]
    }
  };

  const handleItemClick = (itemId: string, event: any) => {
    const itemData = mapItemsData[itemId];
    if (itemData) {
      setClickPosition({ x: event.x, y: event.y });
      setSelectedItem(itemData);
      setIsModalOpen(true);
    }
  };

  const handleSearchSelect = (result: SearchResult) => {
    if (result.coordinates && viewRef.current) {
      viewRef.current.goTo({
        center: result.coordinates,
        zoom: 15
      });
    }
    
    // If the search result has an itemId, show the modal for that item
    if (result.itemId && mapItemsData[result.itemId]) {
      setSelectedItem(mapItemsData[result.itemId]);
      setClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setIsModalOpen(true);
    }
  };

  const handleOverlayChange = (overlays: OverlayState) => {
    setCurrentOverlays(overlays);
    updateMapOverlays(overlays, lastSliderTimeRef.current ?? undefined);
  };

  // Fire intensity heat map overlay removed per request

  // Generate wind vector grid
  const generateWindVectorGrid = (bounds: any) => {
    const vectors = [];
    const gridSpacing = 0.003; // Dense grid spacing
    
    for (let lat = bounds.south; lat <= bounds.north; lat += gridSpacing) {
      for (let lon = bounds.west; lon <= bounds.east; lon += gridSpacing) {
        // Simulate realistic wind patterns - stronger winds near fire areas
        const distanceFromFire = Math.sqrt(Math.pow(lat - 20.8810, 2) + Math.pow(lon - (-156.6830), 2));
        const baseSpeed = 15 + Math.random() * 10; // 15-25 mph base
        const speed = baseSpeed + (distanceFromFire < 0.01 ? Math.random() * 20 : 0); // Higher near fire
        
        // Wind direction with some variation
        const baseDirection = 45 + (Math.random() - 0.5) * 30; // Northeast with variation
        
        vectors.push({
          lat,
          lon,
          speed,
          direction: baseDirection
        });
      }
    }
    
    return vectors;
  };

  const updateMapOverlays = async (overlays: OverlayState, overrideTime?: Date) => {
    if (!viewRef.current || !window.$arcgis) return;

    try {
      const [Graphic] = await window.$arcgis.import(['@arcgis/core/Graphic.js']);

      // Clear existing overlay graphics
      overlayGraphicsRef.current.forEach(graphic => {
        viewRef.current.graphics.remove(graphic);
      });
      overlayGraphicsRef.current = [];

      // Compute a time offset in hours to adjust visuals deterministically
      const base = new Date();
      const effectiveTime = overrideTime ?? currentTime ?? base;
      const timeOffsetHours = (effectiveTime.getTime() - base.getTime()) / 3600000;

      // Modern-looking fire perimeter polygons (time-responsive)
      {
        const center0 = { lat: 20.880, lon: -156.682 };
        const center1 = { lat: 20.8755, lon: -156.6765 };
        const angle = (timeOffsetHours * Math.PI) / 8;
        const drift = 0.0025;
        const phase = 0.0015 * Math.sin(timeOffsetHours / 3);
        const computeRing = (center: { lat: number; lon: number }, baseRadius: number, eccentricity = 0.6) => {
          const points: [number, number][] = [];
          const steps = 36;
          for (let i = 0; i < steps; i++) {
            const theta = (i / steps) * Math.PI * 2;
            const rLat = baseRadius * (1 - 0.25 * Math.cos(theta * 2));
            const rLon = baseRadius * (1 + eccentricity * 0.25 * Math.sin(theta));
            const x = rLon * Math.cos(theta + angle) + (Math.cos(angle) * drift + phase);
            const y = rLat * Math.sin(theta + angle) + (Math.sin(angle) * drift - phase);
            points.push([center.lon + x, center.lat + y]);
          }
          points.push(points[0]);
          return points;
        };

        const redPoly = new Graphic({
          geometry: { type: 'polygon', rings: computeRing(center0, 0.0045) },
          attributes: {
            perimeterId: 'perim-a',
            status: 'Active',
            intensity: 'High',
            updated: effectiveTime.toISOString(),
            recommendedAction: 'Establish firebreak on north perimeter',
          },
          popupTemplate: {
            title: 'Fire Perimeter — {status}',
            content: [
              {
                type: 'text',
                text: 'Synthetic active fire area near Lahaina. Intensity: {intensity}.\nLast updated: {updated}',
              },
              {
                type: 'fields',
                fieldInfos: [
                  { fieldName: 'recommendedAction', label: 'Recommended Action' },
                ],
              },
            ],
            actions: [
              {
                id: 'establish-firebreak',
                title: 'Recommend: Establish Firebreak',
                className: 'esri-icon-polyline'
              },
              {
                id: 'execute-recommended',
                title: 'Execute Recommended Action',
                className: 'esri-icon-check'
              },
            ],
          } as any,
          symbol: {
            type: 'simple-fill',
            color: [239, 68, 68, 0.22],
            outline: { color: [239, 68, 68, 0.9], width: 1.5 },
          },
        });
        const orangePoly = new Graphic({
          geometry: { type: 'polygon', rings: computeRing(center1, 0.0035, 0.8) },
          attributes: {
            perimeterId: 'perim-b',
            status: 'Contained',
            intensity: 'Moderate',
            updated: effectiveTime.toISOString(),
            recommendedAction: 'Deploy mop-up crews and monitor hotspots',
          },
          popupTemplate: {
            title: 'Fire Perimeter — {status}',
            content: [
              {
                type: 'text',
                text: 'Synthetic contained fire area. Intensity: {intensity}.\nLast updated: {updated}',
              },
              {
                type: 'fields',
                fieldInfos: [
                  { fieldName: 'recommendedAction', label: 'Recommended Action' },
                ],
              },
            ],
            actions: [
              {
                id: 'deploy-crews',
                title: 'Recommend: Deploy Mop-up Crews',
                className: 'esri-icon-user'
              },
              {
                id: 'execute-recommended',
                title: 'Execute Recommended Action',
                className: 'esri-icon-check'
              },
            ],
          } as any,
          symbol: {
            type: 'simple-fill',
            color: [251, 146, 60, 0.18],
            outline: { color: [251, 146, 60, 0.9], width: 1.5 },
          },
        });

        overlayGraphicsRef.current.push(redPoly, orangePoly);
        viewRef.current.graphics.addMany([redPoly, orangePoly]);
      }

      // Ember points (time-responsive)
      {
        const baseLat = 20.879;
        const baseLon = -156.681;
        const numEmbers = 60;
        const emberGraphics: any[] = [];
        const windDriftDeg = 25 + 10 * Math.sin(timeOffsetHours / 2);
        const windRad = (windDriftDeg * Math.PI) / 180;
        for (let i = 0; i < numEmbers; i++) {
          const t = i / numEmbers;
          const spread = 0.0035 + 0.0015 * Math.sin(timeOffsetHours / 1.7 + i * 0.3);
          const r = spread * Math.sqrt(Math.random());
          const jitter = (Math.random() - 0.5) * 0.001;
          const lon = baseLon + Math.cos(windRad) * r + jitter * Math.cos(i);
          const lat = baseLat + Math.sin(windRad) * r + jitter * Math.sin(i);
          emberGraphics.push(
            new Graphic({
              geometry: { type: 'point', longitude: lon, latitude: lat },
              attributes: {
                emberId: `ember-${i}`,
                heatC: Math.round(500 + Math.random() * 400),
                downwindMeters: Math.round(r * 111000),
                updated: effectiveTime.toISOString(),
                recommendedAction: 'Monitor ember hotspot and clear nearby fuels',
              },
              popupTemplate: {
                title: 'Ember — {emberId}',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      { fieldName: 'heatC', label: 'Estimated Heat (°C)' },
                      { fieldName: 'downwindMeters', label: 'Downwind Distance (m)' },
                      { fieldName: 'updated', label: 'Observed' },
                      { fieldName: 'recommendedAction', label: 'Recommended Action' },
                    ],
                  },
                ],
                actions: [
                  {
                    id: 'execute-recommended',
                    title: 'Execute Recommended Action',
                    className: 'esri-icon-check'
                  },
                ],
              } as any,
              symbol: {
                type: 'simple-marker',
                color: [253, 186, 116, 0.95],
                size: 6,
                outline: { color: [255, 255, 255, 0.7], width: 1 },
              },
            })
          );
        }
        overlayGraphicsRef.current.push(...emberGraphics);
        viewRef.current.graphics.addMany(emberGraphics);
      }

      // Add wind vector field overlay with time-based direction shift
      if (overlays.windData) {
        const mapBounds = {
          north: 20.890,
          south: 20.870,
          east: -156.670,
          west: -156.690
        };
        
        const windVectors = generateWindVectorGrid(mapBounds).map(v => ({
          ...v,
          direction: v.direction + timeOffsetHours * 2, // drift ~2° per hour
          speed: v.speed * (1 + 0.05 * Math.sin(timeOffsetHours / 2)),
        }));
        const windGraphics = [];
        
        windVectors.forEach(vector => {
          // Create wind arrow
          const arrowSize = 0.0005;
          const directionRad = (vector.direction * Math.PI) / 180;
          
          // Arrow tip
          const tipLat = vector.lat + Math.sin(directionRad) * arrowSize;
          const tipLon = vector.lon + Math.cos(directionRad) * arrowSize;
          
          // Arrow base
          const baseLat = vector.lat - Math.sin(directionRad) * arrowSize;
          const baseLon = vector.lon - Math.cos(directionRad) * arrowSize;
          
          // Color based on wind speed
          let color;
          if (vector.speed >= 75) {
            color = [239, 68, 68]; // Red
          } else if (vector.speed >= 50) {
            color = [249, 115, 22]; // Orange
          } else if (vector.speed >= 25) {
            color = [234, 179, 8]; // Yellow
          } else if (vector.speed >= 12.5) {
            color = [34, 197, 94]; // Green
          } else {
            color = [59, 130, 246]; // Blue
          }
          
          // Create line for arrow shaft
          const shaftGraphic = new Graphic({
            geometry: {
              type: "polyline",
              paths: [[
                [baseLon, baseLat],
                [tipLon, tipLat]
              ]]
            },
            symbol: {
              type: "simple-line",
              color: color,
              width: 1.5
            }
          });
          
          // Create arrow head
          const arrowHeadSize = arrowSize * 0.3;
          const leftWingLat = tipLat - Math.sin(directionRad + 2.5) * arrowHeadSize;
          const leftWingLon = tipLon - Math.cos(directionRad + 2.5) * arrowHeadSize;
          const rightWingLat = tipLat - Math.sin(directionRad - 2.5) * arrowHeadSize;
          const rightWingLon = tipLon - Math.cos(directionRad - 2.5) * arrowHeadSize;
          
          const arrowHeadGraphic = new Graphic({
            geometry: {
              type: "polygon",
              rings: [
                [tipLon, tipLat],
                [leftWingLon, leftWingLat],
                [rightWingLon, rightWingLat],
                [tipLon, tipLat]
              ]
            },
            symbol: {
              type: "simple-fill",
              color: color,
              outline: { width: 0 }
            }
          });
          
          windGraphics.push(shaftGraphic, arrowHeadGraphic);
        });
        
        overlayGraphicsRef.current.push(...windGraphics);
        viewRef.current.graphics.addMany(windGraphics);
      }

      // Add resources overlay
      if (overlays.resources) {
        const resourceGraphics = [
          // Fire Engines
          new Graphic({
            geometry: { type: "point", longitude: -156.683, latitude: 20.881 },
            attributes: { id: 'engine-7', name: "Engine 7", type: "Fire Engine", status: "Active" },
            symbol: { type: "simple-marker", color: [59, 130, 246], size: 14, outline: { color: [255, 255, 255], width: 2 } }
          }),
          new Graphic({
            geometry: { type: "point", longitude: -156.680, latitude: 20.878 },
            attributes: { id: 'engine-12', name: "Engine 12", type: "Fire Engine", status: "Active" },
            symbol: { type: "simple-marker", color: [59, 130, 246], size: 14, outline: { color: [255, 255, 255], width: 2 } }
          }),
          // Ladder Trucks
          new Graphic({
            geometry: { type: "point", longitude: -156.677, latitude: 20.875 },
            attributes: { id: 'ladder-3', name: "Ladder 3", type: "Ladder Truck", status: "Active" },
            symbol: { type: "simple-marker", color: [147, 51, 234], size: 14, outline: { color: [255, 255, 255], width: 2 } }
          }),
          // Water Tenders
          new Graphic({
            geometry: { type: "point", longitude: -156.675, latitude: 20.879 },
            attributes: { id: 'tender-5', name: "Tender 5", type: "Water Tender", status: "Active" },
            symbol: { type: "simple-marker", color: [6, 182, 212], size: 14, outline: { color: [255, 255, 255], width: 2 } }
          }),
          // Water Sources
          new Graphic({
            geometry: { type: "point", longitude: -156.679, latitude: 20.879 },
            attributes: { id: 'water-source-1', name: "Hydrant H-47", type: "Water Source", status: "Available" },
            symbol: { type: "simple-marker", color: [34, 197, 94], size: 16, outline: { color: [255, 255, 255], width: 2 } }
          }),
          new Graphic({
            geometry: { type: "point", longitude: -156.674, latitude: 20.877 },
            attributes: { id: 'water-source-2', name: "Hydrant H-23", type: "Water Source", status: "Available" },
            symbol: { type: "simple-marker", color: [34, 197, 94], size: 16, outline: { color: [255, 255, 255], width: 2 } }
          }),
          // Command Units
          new Graphic({
            geometry: { type: "point", longitude: -156.681, latitude: 20.882 },
            attributes: { id: 'command-1', name: "Command 1", type: "Command Unit", status: "Active" },
            symbol: { type: "simple-marker", color: [249, 115, 22], size: 16, outline: { color: [255, 255, 255], width: 2 } }
          })
        ];
        
        overlayGraphicsRef.current.push(...resourceGraphics);
        viewRef.current.graphics.addMany(resourceGraphics);
      }

    } catch (error) {
      console.error('Error updating map overlays:', error);
    }
  };

  useEffect(() => {
    const loadEsriResources = async () => {
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://js.arcgis.com/4.33/esri/themes/light/main.css';
      document.head.appendChild(cssLink);

      const script = document.createElement('script');
      script.src = 'https://js.arcgis.com/4.33/';
      script.onload = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    };

    const initializeMap = async () => {
      if (!mapRef.current || !window.$arcgis) return;

      try {
        const [MapView, Map, FeatureLayer, Graphic, TimeSlider, Basemap] = await window.$arcgis.import([
          '@arcgis/core/views/MapView.js',
          '@arcgis/core/Map.js',
          '@arcgis/core/layers/FeatureLayer.js',
          '@arcgis/core/Graphic.js',
          '@arcgis/core/widgets/TimeSlider.js',
          '@arcgis/core/Basemap.js',
        ]);

        const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
        const map = new Map({
          basemap: isOnline ? 'satellite' : new Basemap({ baseLayers: [] })
        });

        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-156.6825, 20.8783],
          zoom: 13,
          spatialReference: { wkid: 3857 },
          ui: {
            components: ['zoom']
          }
        });

        viewRef.current = view;

        // Safety: mark loaded after 5s even if basemap fails (offline fallback)
        const safetyTimer = setTimeout(() => {
          if (!mapLoaded) setMapLoaded(true);
        }, 5000);

        view.when(() => {
          // Removed static perimeter and evacuation polygons per request

          // Esri TimeSlider + synthetic track visualization
          // Define a fixed "Now" at 10:15 local time for annotation and initial slider position
          const nowActual = new Date();
          const sliderNow = new Date(
            nowActual.getFullYear(),
            nowActual.getMonth(),
            nowActual.getDate(),
            10,
            15,
            0,
            0,
          );
          const incidentStart = new Date(sliderNow.getTime() - 12 * 60 * 60 * 1000);
          const incidentEnd = new Date(sliderNow.getTime() + 12 * 60 * 60 * 1000);
          lastSliderTimeRef.current = incidentStart;

          const makeTrackFeatures = (
            unitId: string,
            path: Array<[number, number]>,
            start: Date,
            count: number,
            stepMinutes: number,
          ) => {
            const feats: any[] = [];
            for (let i = 0; i < count; i++) {
              const t = i / Math.max(1, (count - 1));
              const seg = Math.min(path.length - 2, Math.floor(t * (path.length - 1)));
              const localT = (t * (path.length - 1)) - seg;
              const [lonA, latA] = path[seg];
              const [lonB, latB] = path[seg + 1];
              const lon = lonA + (lonB - lonA) * localT;
              const lat = latA + (latB - latA) * localT;
              const ts = new Date(start.getTime() + i * stepMinutes * 60 * 1000);
              feats.push(new Graphic({
                geometry: { type: 'point', longitude: lon, latitude: lat },
                attributes: {
                  OBJECTID: i + (unitId === 'unit-a' ? 0 : 10000),
                  unitId,
                  timestamp: ts.getTime(),
                },
              }));
            }
            return feats;
          };

          const pathA: Array<[number, number]> = [
            [-156.69, 20.885],
            [-156.686, 20.882],
            [-156.683, 20.880],
            [-156.680, 20.878],
            [-156.677, 20.876],
          ];
          const pathB: Array<[number, number]> = [
            [-156.676, 20.874],
            [-156.679, 20.875],
            [-156.682, 20.877],
            [-156.685, 20.879],
            [-156.688, 20.881],
          ];

          const trackLayer = new FeatureLayer({
            source: [
              ...makeTrackFeatures('unit-a', pathA, incidentStart, 49, 30),
              ...makeTrackFeatures('unit-b', pathB, incidentStart, 49, 30),
            ],
            objectIdField: 'OBJECTID',
            fields: [
              { name: 'OBJECTID', type: 'oid' },
              { name: 'unitId', type: 'string' },
              { name: 'timestamp', type: 'date' },
            ],
            timeInfo: { startField: 'timestamp', trackIdField: 'unitId' } as any,
            // Hide base point symbols (no dots)
            renderer: {
              type: 'simple',
              symbol: { type: 'simple-marker', size: 0, outline: { width: 0 }, color: [0,0,0,0] },
            } as any,
            // Show only track lines (no latest/previous dots)
            trackInfo: {
              enabled: true,
              previousObservations: { visible: false },
              latestObservations: { visible: false },
              trackLines: { visible: false },
            } as any,
            popupEnabled: false,
          });
          map.add(trackLayer);

          const timeSlider = new TimeSlider({
            view,
            mode: 'cumulative-from-start',
            fullTimeExtent: { start: incidentStart, end: incidentEnd },
            timeExtent: { start: incidentStart, end: sliderNow } as any,
            stops: { interval: { value: 30, unit: 'minutes' } },
          } as any);
          // Centered, full-width slider overlay inside the map container
          const sliderOuter = document.createElement('div');
          sliderOuter.style.position = 'absolute';
          sliderOuter.style.left = '0';
          sliderOuter.style.right = '0';
          sliderOuter.style.bottom = '2px';
          sliderOuter.style.display = 'flex';
          sliderOuter.style.justifyContent = 'center';
          sliderOuter.style.pointerEvents = 'none';
          sliderOuter.style.zIndex = '10';

          const sliderInner = document.createElement('div');
          sliderInner.style.width = '100%';
          sliderInner.style.maxWidth = 'unset';
          sliderInner.style.pointerEvents = 'auto';
          sliderInner.style.padding = '0 8px';

          // Use default TimeSlider labels

          timeSlider.container = sliderInner as any;
          sliderOuter.appendChild(sliderInner);
          view.container.appendChild(sliderOuter);

          // Overlay a bold "Now" marker at 10:15 along the track visualization
          const nowGuide = document.createElement('div');
          nowGuide.style.position = 'absolute';
          nowGuide.style.bottom = '9px';
          nowGuide.style.transform = 'translateX(-50%)';
          nowGuide.style.display = 'flex';
          nowGuide.style.flexDirection = 'column';
          nowGuide.style.alignItems = 'center';
          nowGuide.style.pointerEvents = 'none';
          nowGuide.style.zIndex = '11';

          const guideLine = document.createElement('div');
          guideLine.style.width = '3px';
          guideLine.style.height = '24px';
          guideLine.style.background = '#01669F';
          guideLine.style.borderRadius = '2px';
          guideLine.style.boxShadow = '0 0 0 1px rgba(1,102,159,0.35)';

          const guideLabel = document.createElement('div');
          guideLabel.textContent = 'Now';
          guideLabel.style.marginTop = '2px';
          guideLabel.style.fontSize = '12px';
          guideLabel.style.fontWeight = '700';
          guideLabel.style.color = '#01669F';
          guideLabel.style.textShadow = '0 1px 2px rgba(0,0,0,0.4)';

          nowGuide.appendChild(guideLine);
          nowGuide.appendChild(guideLabel);
          sliderOuter.appendChild(nowGuide);

          const positionNowGuide = () => {
            const total = incidentEnd.getTime() - incidentStart.getTime();
            const offset = Math.max(0, Math.min(total, sliderNow.getTime() - incidentStart.getTime()));
            const ratio = total > 0 ? offset / total : 0;
            nowGuide.style.left = `${ratio * 100}%`;
          };
          positionNowGuide();

          // Containment badge just to the right of the zoom control
          const containmentBadge = document.createElement('div');
          containmentBadge.style.position = 'absolute';
          containmentBadge.style.top = '22px';
          containmentBadge.style.left = '56px';
          containmentBadge.style.padding = '4px 8px';
          containmentBadge.style.borderRadius = '6px';
          containmentBadge.style.background = 'rgba(20,23,26,0.85)';
          containmentBadge.style.color = '#fff';
          containmentBadge.style.fontSize = '12px';
          containmentBadge.style.fontWeight = '600';
          containmentBadge.style.boxShadow = '0 1px 3px rgba(0,0,0,0.4)';
          view.container.appendChild(containmentBadge);

          const formatContainment = (endTime: Date) => {
            const total = incidentEnd.getTime() - incidentStart.getTime();
            const offset = Math.max(0, Math.min(total, endTime.getTime() - incidentStart.getTime()));
            const pct = Math.round(50 + (offset / total) * 25); // 50% at far left → 75% at far right
            return `Containment ${pct}%`;
          };
          containmentBadge.textContent = formatContainment(sliderNow);

          const applyTimeExtent = (extent: any) => {
            view.timeExtent = extent;
            const endTime: Date | null = extent?.end ?? null;
            if (endTime) {
              lastSliderTimeRef.current = endTime;
              updateMapOverlays(currentOverlays, endTime);
              containmentBadge.textContent = formatContainment(endTime);
            }
          };
          applyTimeExtent(timeSlider.timeExtent);
          timeSlider.watch('timeExtent', (extent: any) => applyTimeExtent(extent));

          // Handle popup action clicks (esri-defined modal actions). Guard if popup doesn't support `on` yet.
          (view.popup as any)?.on?.('trigger-action', (event: any) => {
            const actionId = event.action?.id;
            if (!actionId) return;
            if (actionId === 'establish-firebreak') {
              view.popup.content = [
                { type: 'text', text: 'Action queued: Establish firebreak along north perimeter. Resources notified.' },
                ...(Array.isArray(view.popup.content) ? view.popup.content : []),
              ] as any;
            }
            if (actionId === 'deploy-crews') {
              view.popup.content = [
                { type: 'text', text: 'Action queued: Deploy mop-up crews to contained area. Supervisor assigned.' },
                ...(Array.isArray(view.popup.content) ? view.popup.content : []),
              ] as any;
            }
            if (actionId === 'execute-recommended') {
              const attr = (view.popup.selectedFeature as any)?.attributes || {};
              const actionText = attr.recommendedAction ? `Executing: ${attr.recommendedAction}` : 'Executing recommended action';
              view.popup.content = [
                { type: 'text', text: actionText },
                ...(Array.isArray(view.popup.content) ? view.popup.content : []),
              ] as any;
            }
          });

          view.on("click", function(event) {
            view.hitTest(event).then(function(response) {
              if (response.results.length > 0) {
                const graphic = response.results[0].graphic;
                if (graphic && graphic.attributes && graphic.attributes.id) {
                  handleItemClick(graphic.attributes.id, event);
                }
              }
            });
          });

          // Initialize overlays with current time
          updateMapOverlays(currentOverlays, lastSliderTimeRef.current ?? undefined);
          setMapLoaded(true);
          clearTimeout(safetyTimer);
        });

      } catch (error) {
        console.error('Error initializing Esri map:', error);
      }
    };

    loadEsriResources();

    return () => {
      // Cleanup
    };
  }, [currentTime]);

  return (
    <>
      <div className={`bg-card rounded-lg overflow-hidden ${className}`}>


        {/* Map Container with Overlays */}
        <div className="relative h-[700px]">
          <div 
            ref={mapRef} 
            className="w-full h-full cursor-pointer"
            style={{ minHeight: '700px' }}
          />

          {/* Search Widget */}
          <MapSearchWidget onSearchSelect={handleSearchSelect} />

          {/* Legend removed per request */}

          {/* Loading indicator */}
          {!mapLoaded && (
            <div className="absolute inset-0 bg-card/80 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                <div className="text-sm text-muted-foreground">Loading Professional Fire Map...</div>
              </div>
            </div>
          )}
        </div>

        {/* Removed old non-Esri Incident Timeline controls */}
      </div>

      <MapItemModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemData={selectedItem}
        position={clickPosition}
      />
    </>
  );
}