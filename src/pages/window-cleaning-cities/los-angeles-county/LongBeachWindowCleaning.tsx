import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";

const LongBeachWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Long Beach"
      citySlug="long-beach"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={[
        { name: "Signal Hill", slug: "signal-hill" },
        { name: "Lakewood", slug: "lakewood" },
        { name: "Carson", slug: "carson" },
        { name: "Torrance", slug: "torrance" },
      ]}
    />
  );
};

export default LongBeachWindowCleaning;
