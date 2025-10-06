import { useState } from "react";
import { counties } from "@/data/locations";

const CountyMap = () => {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  const countyRegions = [
    { id: "ventura", name: "Ventura", x: 50, y: 80, width: 120, height: 100 },
    { id: "losAngeles", name: "Los Angeles", x: 170, y: 100, width: 150, height: 120 },
    { id: "sanBernardino", name: "San Bernardino", x: 320, y: 60, width: 200, height: 180 },
    { id: "orange", name: "Orange", x: 200, y: 220, width: 100, height: 80 },
    { id: "riverside", name: "Riverside", x: 300, y: 240, width: 180, height: 140 },
    { id: "sanDiego", name: "San Diego", x: 180, y: 320, width: 140, height: 120 }
  ];

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-auto"
        style={{ maxHeight: "600px" }}
      >
        {/* County regions */}
        {countyRegions.map((region) => {
          const county = counties[region.id];
          const isSelected = selectedCounty === region.id;
          
          return (
            <g key={region.id}>
              <rect
                x={region.x}
                y={region.y}
                width={region.width}
                height={region.height}
                fill={county?.color || "#ccc"}
                stroke="#fff"
                strokeWidth="3"
                opacity={isSelected ? 1 : 0.7}
                className="cursor-pointer transition-all duration-300 hover:opacity-100"
                onMouseEnter={() => setSelectedCounty(region.id)}
                onMouseLeave={() => setSelectedCounty(null)}
                rx="8"
              />
              <text
                x={region.x + region.width / 2}
                y={region.y + region.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#000"
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none"
                style={{ textShadow: "0 0 4px rgba(255,255,255,0.8)" }}
              >
                {region.name}
              </text>
              {isSelected && (
                <text
                  x={region.x + region.width / 2}
                  y={region.y + region.height / 2 + 20}
                  textAnchor="middle"
                  fill="#000"
                  fontSize="12"
                  fontWeight="600"
                  className="pointer-events-none"
                  style={{ textShadow: "0 0 4px rgba(255,255,255,0.8)" }}
                >
                  {county?.cities.length} cities
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Selected County Info */}
      {selectedCounty && counties[selectedCounty] && (
        <div className="mt-6 p-6 bg-accent/10 border-2 border-accent rounded-2xl">
          <h3 className="text-2xl font-black text-foreground mb-4">
            {counties[selectedCounty].name}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {counties[selectedCounty].cities.map((city) => (
              <div
                key={city}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountyMap;
