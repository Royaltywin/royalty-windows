import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Navigation, MapPin, Search } from 'lucide-react';
import { counties } from '@/data/locations';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import CountyTileModal from './CountyTileModal';

// Note: For production, add your Mapbox token to Supabase Edge Function Secrets
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'; // Demo token

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-117.8265, 33.6846], // Orange County center
        zoom: 7.5,
        pitch: 0,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: false,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        setMapLoaded(true);

        // Add county markers
        Object.values(counties).forEach((county) => {
          // Approximate coordinates for each county center
          const coordinates = getCountyCoordinates(county.name);
          
          // Create custom marker element
          const el = document.createElement('div');
          el.className = 'county-marker';
          el.style.backgroundColor = county.color;
          el.style.width = '30px';
          el.style.height = '30px';
          el.style.borderRadius = '50%';
          el.style.border = '3px solid white';
          el.style.cursor = 'pointer';
          el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
          el.style.transition = 'transform 0.2s';
          
          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.2)';
          });
          
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
          });

          el.addEventListener('click', () => {
            setSelectedCounty(county.name);
          });

          // Create popup
          const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
            .setHTML(`
              <div style="padding: 8px;">
                <h3 style="font-weight: bold; margin: 0 0 8px 0; color: ${county.color};">${county.name}</h3>
                <p style="margin: 0; font-size: 14px; color: #666;">${county.cities.length} cities served</p>
              </div>
            `);

          new mapboxgl.Marker(el)
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map.current!);
        });
      });

      map.current.on('error', () => {
        setMapError(true);
      });
    } catch (error) {
      console.error('Map initialization error:', error);
      setMapError(true);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  const getCountyCoordinates = (countyName: string): [number, number] => {
    const coords: Record<string, [number, number]> = {
      'Orange County': [-117.8265, 33.6846],
      'Riverside County': [-116.5, 33.7],
      'San Bernardino County': [-117.2, 34.1],
      'San Diego County': [-117.1, 33.0],
      'Los Angeles County': [-118.2, 34.05],
      'Ventura County': [-119.0, 34.4]
    };
    return coords[countyName] || [-117.8265, 33.6846];
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          map.current?.flyTo({
            center: [longitude, latitude],
            zoom: 11,
            essential: true
          });

          // Add marker at user location
          new mapboxgl.Marker({ color: '#ef4444' })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setHTML('<p>Your Location</p>'))
            .addTo(map.current!);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleCountyModalClose = () => {
    setSelectedCounty(null);
  };

  const handleBookNow = () => {
    window.location.href = 'tel:+19519994546';
  };

  const handleGetQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    setSelectedCounty(null);
  };

  const getServiceHighlight = (countyName: string) => {
    const highlights: Record<string, string> = {
      'Orange County': 'The best window cleaning in Orange County',
      'Riverside County': 'The best pressure washing in Riverside County',
      'San Bernardino County': 'The best solar panel cleaning in San Bernardino County',
      'Los Angeles County': 'The best roof cleaning in Los Angeles County',
      'San Diego County': 'The best gutter cleaning in San Diego County',
      'Ventura County': 'The best graffiti removal in Ventura County',
    };
    return highlights[countyName] || 'Professional cleaning services';
  };

  const filteredCounties = searchQuery
    ? Object.values(counties).filter(
        (county) =>
          county.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          county.cities.some((city) =>
            city.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : Object.values(counties);

  // Fallback UI when map fails to load
  if (mapError) {
    return (
      <div className="w-full rounded-2xl overflow-hidden border-4 border-border bg-background">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(counties).map((county) => {
              const slug = county.name.toLowerCase().replace(' county', '').replace(' ', '-');
              return (
                <Link key={county.name} to={`/locations/${slug}`}>
                  <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full border-3 border-white shadow-md group-hover:scale-110 transition-transform flex items-center justify-center"
                        style={{ backgroundColor: county.color }}
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {county.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {county.cities.length} cities served
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {county.cities.slice(0, 3).join(', ')}
                          {county.cities.length > 3 && ` and ${county.cities.length - 3} more...`}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-border">
        <div ref={mapContainer} className="absolute inset-0" />
        
        {mapLoaded && (
          <>
            {/* Search Box */}
            <div className="absolute top-4 left-4 right-4 z-10 flex gap-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search your city or ZIP code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/95 backdrop-blur border-2 border-border shadow-lg"
                />
              </div>
              <Button
                onClick={findMyLocation}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg font-bold"
                size="lg"
              >
                <Navigation className="mr-2 w-5 h-5" />
                Find Me
              </Button>
            </div>
          </>
        )}

      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-background/95 backdrop-blur rounded-xl p-4 border-2 border-border">
          <p className="text-sm font-semibold mb-2">Counties We Serve:</p>
          <div className="flex flex-wrap gap-2">
            {Object.values(counties).map((county) => (
              <div key={county.name} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full border-2 border-white"
                  style={{ backgroundColor: county.color }}
                />
                <span className="text-xs font-medium">{county.name.replace(' County', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* County Tile Modal */}
      {selectedCounty && (
        <CountyTileModal
          isOpen={!!selectedCounty}
          onClose={handleCountyModalClose}
          countyName={selectedCounty}
          serviceHighlight={getServiceHighlight(selectedCounty)}
          onBookNow={handleBookNow}
          onGetQuote={handleGetQuote}
        />
      )}
    </>
  );
};

export default InteractiveMap;
