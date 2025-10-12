import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";

const LongBeachHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Long Beach"
      citySlug="long-beach"
      countySlug="los-angeles"
      nearbyCities={[
        { name: "Signal Hill", slug: "signal-hill" },
        { name: "Lakewood", slug: "lakewood" },
        { name: "Carson", slug: "carson" },
      ]}
    />
  );
};

export default LongBeachHighRiseWindowCleaning;
