import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';
import { counties } from '@/data/locations';

// Note: For production, add your Mapbox token to Supabase Edge Function Secrets
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'; // Demo token

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

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

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-border">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {mapLoaded && (
        <div className="absolute top-4 left-4 z-10">
          <Button
            onClick={findMyLocation}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg font-bold"
            size="lg"
          >
            <Navigation className="mr-2 w-5 h-5" />
            Find Your Local Cleaner
          </Button>
        </div>
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
  );
};

export default InteractiveMap;
