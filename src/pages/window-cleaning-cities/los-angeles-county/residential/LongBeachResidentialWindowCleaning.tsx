import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";

const LongBeachResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
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

export default LongBeachResidentialWindowCleaning;
