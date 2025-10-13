import { Input } from '@/components/ui/input';
import { Search, MapPin, Phone } from 'lucide-react';
import { CityLocation } from '@/data/cityLocations';

interface LocationSidebarProps {
  cities: CityLocation[];
  selectedCity: string | null;
  onCitySelect: (city: CityLocation) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const LocationSidebar = ({
  cities,
  selectedCity,
  onCitySelect,
  searchQuery,
  onSearchChange
}: LocationSidebarProps) => {
  return (
    <div className="w-96 bg-background border-r-4 border-border flex flex-col">
      {/* Header */}
      <div className="p-6 bg-gradient-primary text-primary-foreground">
        <h2 className="text-2xl font-black mb-2">Our Locations</h2>
        <p className="text-sm opacity-90">{cities.length}+ Cities in Southern California</p>
      </div>

      {/* Search */}
      <div className="p-4 border-b-2 border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search city, ZIP, or address..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {cities.length} location{cities.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Scrollable City List */}
      <div className="flex-1 overflow-y-auto">
        {cities.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <p>No locations found.</p>
            <p className="text-sm mt-2">Try a different search term.</p>
          </div>
        ) : (
          cities.map((city) => (
            <div
              key={city.slug}
              id={`city-${city.slug}`}
              onClick={() => onCitySelect(city)}
              className={`
                p-4 border-b border-border cursor-pointer transition-all
                hover:bg-accent/10 hover:border-l-4 hover:border-l-accent
                ${selectedCity === city.slug ? 'bg-accent/20 border-l-4 border-l-accent' : ''}
              `}
            >
              <div className="flex items-start gap-3">
                <MapPin 
                  className="w-5 h-5 flex-shrink-0 mt-1" 
                  style={{ color: city.countyColor }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-1">
                    Royalty Cleaning of {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {city.address}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="inline-block w-2 h-2 rounded-full" 
                      style={{ backgroundColor: city.countyColor }}
                    />
                    <p className="text-xs text-muted-foreground">
                      {city.county}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="w-3 h-3 text-accent" />
                    <a 
                      href={`tel:${city.phone.replace(/[^0-9]/g, '')}`}
                      className="text-xs font-semibold text-accent hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {city.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LocationSidebar;
