import { useState } from 'react';
import { Search, MapPin, Clock, Target } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface SearchResult {
  id: string;
  name: string;
  type: 'location' | 'resource' | 'incident';
  coordinates?: [number, number];
  description: string;
  itemId?: string;
}

interface MapSearchWidgetProps {
  onSearchSelect: (result: SearchResult) => void;
}

export function MapSearchWidget({ onSearchSelect }: MapSearchWidgetProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: 'front-street',
      name: 'Front Street',
      type: 'location',
      coordinates: [-156.6825, 20.8783],
      description: 'Main street in historic Lahaina',
      itemId: 'front-street'
    },
    {
      id: 'engine-7',
      name: 'Engine 7',
      type: 'resource',
      coordinates: [-156.683, 20.881],
      description: 'Fire engine - Active on Front Street sector',
      itemId: 'engine-7'
    },
    {
      id: 'fire-zone-a',
      name: 'Active Fire Zone A',
      type: 'incident',
      coordinates: [-156.6825, 20.880],
      description: '450 acres - High intensity fire',
      itemId: 'fire-zone-a'
    },
    {
      id: 'lahaina-harbor',
      name: 'Lahaina Harbor',
      type: 'location',
      coordinates: [-156.6742, 20.8667],
      description: 'Lahaina Small Boat Harbor - Emergency water access point',
      itemId: 'lahaina-harbor'
    },
    {
      id: 'ladder-3',
      name: 'Ladder 3',
      type: 'resource',
      coordinates: [-156.677, 20.875],
      description: 'Ladder truck - Aerial operations',
      itemId: 'ladder-3'
    }
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setIsSearching(true);

    if (value.length > 1) {
      // Filter mock results based on search term
      const filtered = mockResults.filter(result =>
        result.name.toLowerCase().includes(value.toLowerCase()) ||
        result.description.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
    setIsSearching(false);
  };

  const handleResultSelect = (result: SearchResult) => {
    setSearchTerm(result.name);
    setSearchResults([]);
    onSearchSelect(result);
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'location':
        return <MapPin className="h-4 w-4 text-blue-500" />;
      case 'resource':
        return <Target className="h-4 w-4 text-green-500" />;
      case 'incident':
        return <Clock className="h-4 w-4 text-red-500" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <div className="absolute top-4 right-4 z-10 w-80">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 bg-card/95 backdrop-blur-sm border-border"
          />
        </div>

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <Card className="absolute top-full mt-1 w-full bg-card/95 backdrop-blur-sm border-border max-h-64 overflow-y-auto">
            <div className="p-2">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultSelect(result)}
                  className="w-full p-2 text-left hover:bg-muted/50 rounded flex items-start gap-2 transition-colors"
                >
                  {getResultIcon(result.type)}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-card-foreground truncate">
                      {result.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {result.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        )}

        {/* No Results - hidden per request */}
      </div>
    </div>
  );
}