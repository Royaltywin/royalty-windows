import { useEffect, useRef, useState } from 'react';
import { cityLocations, searchCities } from '@/data/cityLocations';
import LocationSidebar from './LocationSidebar';

const GOOGLE_MAPS_API_KEY = 'AIzaSyA3bTDSv3stDpPxJiTxt5yCT8tC0kZ0oOw';

const InteractiveMapGoogle = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState(cityLocations);
  const [mapError, setMapError] = useState(false);

  // Create custom Royalty marker SVG
  const createRoyaltyMarker = () => {
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
          </filter>
        </defs>
        <circle cx="20" cy="20" r="18" fill="#d946ef" stroke="white" stroke-width="3" filter="url(#shadow)"/>
        <text x="20" y="28" font-size="20" text-anchor="middle" fill="white" font-family="Arial">👑</text>
      </svg>
    `)}`;
  };

  // Initialize Google Maps
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (mapRef.current && window.google) {
        try {
          const mapInstance = new window.google.maps.Map(mapRef.current, {
            center: { lat: 33.6846, lng: -117.8265 },
            zoom: 9,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
          });
          setMap(mapInstance);

          const infoWindowInstance = new window.google.maps.InfoWindow();
          setInfoWindow(infoWindowInstance);
        } catch (error) {
          console.error('Error initializing Google Maps:', error);
          setMapError(true);
        }
      }
    };

    script.onerror = () => {
      console.error('Error loading Google Maps script');
      setMapError(true);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Add city markers with custom Royalty logo
  useEffect(() => {
    if (!map || !infoWindow) return;

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));

    const newMarkers = filteredCities.map(city => {
      const marker = new google.maps.Marker({
        position: { lat: city.coordinates[1], lng: city.coordinates[0] },
        map: map,
        title: `Royalty Cleaning of ${city.name}`,
        icon: {
          url: createRoyaltyMarker(),
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 20),
        },
        animation: google.maps.Animation.DROP,
      });

      // Info window content for each city
      const contentString = `
        <div style="padding: 12px; max-width: 250px; font-family: system-ui, -apple-system, sans-serif;">
          <h3 style="font-weight: bold; margin: 0 0 8px 0; font-size: 16px; color: #1a1a1a;">
            Royalty Cleaning of ${city.name}
          </h3>
          <p style="margin: 4px 0; color: #666; font-size: 14px;">${city.address}</p>
          <p style="margin: 4px 0; color: #666; font-size: 14px;">${city.phone}</p>
          <div style="margin-top: 12px; display: flex; gap: 8px;">
            <a href="/locations/${city.countySlug}/${city.slug}" 
               style="background: #d946ef; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; display: inline-block;">
              View Services
            </a>
            <a href="tel:${city.phone.replace(/[^0-9]/g, '')}" 
               style="background: #10b981; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; display: inline-block;">
              Call Now
            </a>
          </div>
        </div>
      `;

      marker.addListener('click', () => {
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
        setSelectedCity(city.slug);
        
        // Scroll sidebar to selected city
        const element = document.getElementById(`city-${city.slug}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });

      return marker;
    });

    setMarkers(newMarkers);
  }, [map, filteredCities, infoWindow]);

  // Handle search
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setFilteredCities(searchCities(query));
  };

  // Handle city selection from sidebar
  const handleCitySelect = (city: typeof cityLocations[0]) => {
    if (!map || !infoWindow) return;
    
    setSelectedCity(city.slug);
    map.panTo({ lat: city.coordinates[1], lng: city.coordinates[0] });
    map.setZoom(12);

    // Find the marker and open its info window
    const marker = markers.find(m => 
      m.getPosition()?.lat() === city.coordinates[1] && 
      m.getPosition()?.lng() === city.coordinates[0]
    );

    if (marker) {
      const contentString = `
        <div style="padding: 12px; max-width: 250px; font-family: system-ui, -apple-system, sans-serif;">
          <h3 style="font-weight: bold; margin: 0 0 8px 0; font-size: 16px; color: #1a1a1a;">
            Royalty Cleaning of ${city.name}
          </h3>
          <p style="margin: 4px 0; color: #666; font-size: 14px;">${city.address}</p>
          <p style="margin: 4px 0; color: #666; font-size: 14px;">${city.phone}</p>
          <div style="margin-top: 12px; display: flex; gap: 8px;">
            <a href="/locations/${city.countySlug}/${city.slug}" 
               style="background: #d946ef; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; display: inline-block;">
              View Services
            </a>
            <a href="tel:${city.phone.replace(/[^0-9]/g, '')}" 
               style="background: #10b981; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; display: inline-block;">
              Call Now
            </a>
          </div>
        </div>
      `;
      infoWindow.setContent(contentString);
      infoWindow.open(map, marker);
    }
  };

  if (mapError) {
    return (
      <div className="h-[700px] bg-card border-4 border-border rounded-2xl overflow-hidden flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-xl font-bold text-foreground mb-2">Map Loading Error</p>
          <p className="text-muted-foreground">Unable to load the map. Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[700px] gap-0 border-4 border-border rounded-2xl overflow-hidden shadow-2xl">
      {/* Left Sidebar - Location List */}
      <LocationSidebar 
        cities={filteredCities}
        selectedCity={selectedCity}
        onCitySelect={handleCitySelect}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* Right Side - Google Map */}
      <div ref={mapRef} className="flex-1" />
    </div>
  );
};

export default InteractiveMapGoogle;
