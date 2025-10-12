import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";

const LosAngelesWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Los Angeles"
      citySlug="los-angeles"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={[
        { name: "Santa Monica", slug: "santa-monica" },
        { name: "Beverly Hills", slug: "beverly-hills" },
        { name: "West Hollywood", slug: "west-hollywood" },
        { name: "Glendale", slug: "glendale" },
        { name: "Burbank", slug: "burbank" },
        { name: "Culver City", slug: "culver-city" },
      ]}
    />
  );
};

export default LosAngelesWindowCleaning;
